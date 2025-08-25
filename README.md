# Machine Learning Crash Course Platform

A modern, full-stack machine learning education platform built with React/Next.js TypeScript frontend and Go backend with GraphQL and gRPC.

## 🚀 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Next.js 14** (App Router)
- **Tailwind CSS** for styling
- **Apollo Client** for GraphQL
- **Framer Motion** for animations
- **Heroicons** for icons

### Backend
- **Go 1.21** with Gin framework
- **GraphQL** with gqlgen
- **gRPC** for microservices communication
- **PostgreSQL** database
- **JWT** authentication
- **CORS** enabled

## 📁 Project Structure

```
machine_learning_crash_course/
├── src/                          # Frontend source code
│   ├── app/                      # Next.js app directory
│   ├── components/               # React components
│   ├── lib/                      # Utilities and configurations
│   └── types/                    # TypeScript type definitions
├── backend/                      # Go backend
│   ├── graph/                    # GraphQL schema and resolvers
│   ├── internal/                 # Internal packages
│   ├── proto/                    # gRPC protocol buffers
│   └── main.go                   # Main server file
├── package.json                  # Frontend dependencies
├── go.mod                        # Go module file
└── README.md                     # This file
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ and npm/yarn
- Go 1.21+
- PostgreSQL 13+
- Protocol Buffers compiler

### Frontend Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   
   Add the following to `.env.local`:
   ```env
   NEXT_PUBLIC_GRAPHQL_ENDPOINT=http://localhost:8080/graphql
   NEXT_PUBLIC_GRPC_ENDPOINT=localhost:9090
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

   The frontend will be available at `http://localhost:3000`

### Backend Setup

1. **Install Go dependencies:**
   ```bash
   cd backend
   go mod tidy
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   
   Add the following to `.env`:
   ```env
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=postgres
   DB_PASSWORD=your_password
   DB_NAME=ml_crash_course
   JWT_SECRET=your_jwt_secret
   PORT=8080
   GRPC_PORT=9090
   ```

3. **Set up PostgreSQL database:**
   ```sql
   CREATE DATABASE ml_crash_course;
   ```

4. **Run database migrations:**
   ```bash
   go run cmd/migrate/main.go
   ```

5. **Generate GraphQL code:**
   ```bash
   go run github.com/99designs/gqlgen generate
   ```

6. **Generate gRPC code:**
   ```bash
   protoc --go_out=. --go_opt=paths=source_relative \
          --go-grpc_out=. --go-grpc_opt=paths=source_relative \
          proto/ml_service.proto
   ```

7. **Run the backend server:**
   ```bash
   go run main.go
   ```

   The backend will be available at:
   - GraphQL: `http://localhost:8080/graphql`
   - gRPC: `localhost:9090`
   - Health check: `http://localhost:8080/health`

## 🎯 Features

### Phase 1 (Current)
- ✅ Responsive landing page
- ✅ Course module listings
- ✅ Prerequisites page
- ✅ Navigation with dropdowns
- ✅ Mobile-friendly design
- ✅ GraphQL API integration
- ✅ TypeScript type safety

### Phase 2 (Future)
- 🔄 User authentication and registration
- 🔄 Video player integration
- 🔄 Interactive exercises
- 🔄 Progress tracking
- 🔄 Analytics dashboard
- 🔄 Admin panel

## 📱 Pages

1. **Home** (`/`) - Landing page with course overview
2. **Crash Course** (`/crash-course`) - Course modules listing
3. **Modules** (`/modules`) - Detailed module information
4. **Prerequisites** (`/prerequisites`) - Course requirements
5. **Foundational Courses** (`/foundational-courses`) - Beginner courses
6. **Advanced Courses** (`/advanced-courses`) - Advanced courses

## 🔧 Development

### Frontend Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript check
```

### Backend Commands
```bash
go run main.go                    # Run development server
go test ./...                     # Run all tests
go run cmd/migrate/main.go        # Run database migrations
go run github.com/99designs/gqlgen generate  # Generate GraphQL code
```

## 🗄️ Database Schema

### Tables
- `courses` - Course information
- `modules` - Module details
- `prerequisites` - Course requirements
- `users` - User accounts
- `course_progress` - User progress tracking
- `analytics_events` - User interaction tracking

## 🔌 API Endpoints

### GraphQL
- `POST /graphql` - GraphQL endpoint

### REST
- `GET /health` - Health check

### gRPC Services
- `CourseService` - Course and module operations
- `UserService` - User management
- `AnalyticsService` - Analytics tracking

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Connect your repository
2. Set environment variables
3. Deploy automatically on push

### Backend (AWS EKS)
1. Build Docker image
2. Deploy to EKS cluster
3. Set up load balancer
4. Configure environment variables

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, please open an issue in the GitHub repository or contact the development team.
