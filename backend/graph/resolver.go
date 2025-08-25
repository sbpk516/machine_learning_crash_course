package graph

import (
	"context"
	"database/sql"
	"ml-crash-course-backend/internal/models"
)

type Resolver struct {
	DB *sql.DB
}

func (r *Resolver) Query() QueryResolver {
	return &queryResolver{r}
}

func (r *Resolver) Mutation() MutationResolver {
	return &mutationResolver{r}
}

type queryResolver struct{ *Resolver }

func (r *queryResolver) Courses(ctx context.Context, category *string) ([]*models.Course, error) {
	return models.GetCourses(r.DB, category)
}

func (r *queryResolver) Course(ctx context.Context, id string) (*models.Course, error) {
	return models.GetCourseByID(r.DB, id)
}

func (r *queryResolver) Modules(ctx context.Context, courseID string) ([]*models.Module, error) {
	return models.GetModulesByCourseID(r.DB, courseID)
}

func (r *queryResolver) Module(ctx context.Context, id string) (*models.Module, error) {
	return models.GetModuleByID(r.DB, id)
}

func (r *queryResolver) Prerequisites(ctx context.Context) ([]*models.Prerequisite, error) {
	return models.GetPrerequisites(r.DB)
}

func (r *queryResolver) User(ctx context.Context, id string) (*models.User, error) {
	return models.GetUserByID(r.DB, id)
}

func (r *queryResolver) UserProgress(ctx context.Context, userID string) ([]*models.CourseProgress, error) {
	return models.GetUserProgress(r.DB, userID)
}

type mutationResolver struct{ *Resolver }

func (r *mutationResolver) CreateUser(ctx context.Context, input models.CreateUserInput) (*models.User, error) {
	return models.CreateUser(r.DB, input)
}

func (r *mutationResolver) UpdateUserProgress(ctx context.Context, input models.UpdateProgressInput) (*models.CourseProgress, error) {
	return models.UpdateUserProgress(r.DB, input)
}

func (r *mutationResolver) CompleteModule(ctx context.Context, input models.CompleteModuleInput) (*models.Module, error) {
	return models.CompleteModule(r.DB, input)
}
