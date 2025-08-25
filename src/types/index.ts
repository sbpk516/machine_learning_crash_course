// Course and Module Types
export interface Module {
  id: string;
  number: number;
  title: string;
  description: string;
  duration: number; // in minutes
  exercises: number;
  videos: number;
  isCompleted?: boolean;
  progress?: number; // 0-100
}

export interface Course {
  id: string;
  title: string;
  description: string;
  duration: number; // in hours
  level: 'beginner' | 'intermediate' | 'advanced';
  rating: number;
  modules: Module[];
  features: string[];
  badge?: 'popular' | 'new' | 'featured';
  category: 'foundational' | 'advanced';
}

export interface Prerequisite {
  id: string;
  title: string;
  description: string;
  items: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  icon: string;
}

// Navigation Types
export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
  isDropdown?: boolean;
}

// User Types (for future use)
export interface User {
  id: string;
  email: string;
  name: string;
  progress: CourseProgress[];
  completedCourses: string[];
}

export interface CourseProgress {
  courseId: string;
  completedModules: string[];
  overallProgress: number;
  lastAccessed: Date;
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  errors?: string[];
}

// GraphQL Types
export interface GraphQLResponse<T> {
  data: T;
  errors?: GraphQLError[];
}

export interface GraphQLError {
  message: string;
  locations?: { line: number; column: number }[];
  path?: string[];
}

// Component Props Types
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  className?: string;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
}

// Form Types
export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

// Analytics Types
export interface AnalyticsEvent {
  event: string;
  properties: Record<string, any>;
  timestamp: Date;
}
