package main

import (
	"log"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"github.com/rs/cors/wrapper/gin"
	"ml-crash-course-backend/graph"
	"ml-crash-course-backend/graph/generated"
	"ml-crash-course-backend/internal/database"
	"ml-crash-course-backend/internal/middleware"
)

func main() {
	// Load environment variables
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found, using system environment variables")
	}

	// Initialize database
	db, err := database.InitDB()
	if err != nil {
		log.Fatal("Failed to connect to database:", err)
	}
	defer db.Close()

	// Set Gin mode
	if os.Getenv("GIN_MODE") == "release" {
		gin.SetMode(gin.ReleaseMode)
	}

	// Create router
	r := gin.Default()

	// CORS middleware
	config := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:3000", "https://yourdomain.com"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Origin", "Content-Type", "Accept", "Authorization"},
		AllowCredentials: true,
	})
	r.Use(corsHandler(config))

	// Health check endpoint
	r.GET("/health", func(c *gin.Context) {
		c.JSON(200, gin.H{"status": "ok"})
	})

	// GraphQL endpoint
	srv := generated.NewExecutableSchema(generated.Config{Resolvers: &graph.Resolver{DB: db}})
	r.POST("/graphql", middleware.GraphQLHandler(srv))

	// Start server
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("Server starting on port %s", port)
	if err := r.Run(":" + port); err != nil {
		log.Fatal("Failed to start server:", err)
	}
}
