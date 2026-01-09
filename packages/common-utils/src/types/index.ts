/**
 * Core Domain Types for Task Management System
 * Based on Requirements 3.1, 3.2, 3.3
 */

// Priority type as defined in Requirements 3.2
export type Priority = 'alta' | 'media' | 'baja';

// Task interface as defined in Requirements 3.1
export interface Task {
  id: string;                    // Unique identifier (UUID)
  titulo: string;                // Task title (1-100 characters)
  estado: 'pendiente' | 'completada';  // Task status
  prioridad: Priority;           // Task priority level
  fechaCreacion: Date;           // Creation timestamp
}

// TaskStats type as defined in Requirements 3.3
export interface TaskStats {
  total: number;                 // Total number of tasks
  completadas: number;           // Number of completed tasks
  pendientes: number;            // Number of pending tasks
}

// API Response Types (Requirements 5.2, 5.3)
export interface ApiResponse<T> {
  statusCode: number;
  data: T;
}

export interface ApiError {
  statusCode: number;
  error: {
    message: string;
    code: string;
  };
}

// Request/Response DTOs
export interface CreateTaskRequest {
  titulo: string;
  prioridad: Priority;
}

export interface UpdateTaskRequest {
  titulo?: string;
  prioridad?: Priority;
  estado?: 'pendiente' | 'completada';
}

// Filter types
export type TaskFilter = 'all' | 'pendientes' | 'completadas';

// Validation result type
export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

// Business logic function interfaces
export interface TaskDomain {
  createTask(titulo: string, prioridad: Priority): Task;
  toggleTaskCompletion(task: Task): Task;
  filterTasks(tasks: Task[], filter: TaskFilter): Task[];
  calculateStats(tasks: Task[]): TaskStats;
  validateTaskTitle(titulo: string): ValidationResult;
}

// API interface
export interface TaskAPI {
  getTasks(filter?: TaskFilter): Promise<ApiResponse<Task[]>>;
  createTask(taskData: CreateTaskRequest): Promise<ApiResponse<Task>>;
  toggleTaskCompletion(id: string): Promise<ApiResponse<Task>>;
  getTaskStats(): Promise<ApiResponse<TaskStats>>;
}

// Error codes enum
export enum ErrorCodes {
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  TASK_NOT_FOUND = 'TASK_NOT_FOUND',
  INVALID_FILTER = 'INVALID_FILTER',
  INTERNAL_ERROR = 'INTERNAL_ERROR'
}