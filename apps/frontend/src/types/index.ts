// Re-export common types
export * from '@task-management/common-utils';

// Frontend-specific types
export interface AppState {
  tasks: Task[];
  currentFilter: TaskFilter;
  loading: boolean;
  error: string | null;
  stats: TaskStats;
}

// Component prop types will be defined here as needed
export interface TaskCardProps {
  task: Task;
  onToggle: (id: string) => void;
}

export interface TaskFormProps {
  onSubmit: (taskData: CreateTaskRequest) => void;
  loading?: boolean;
}

export interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string) => void;
  loading?: boolean;
}

export interface TaskFiltersProps {
  currentFilter: TaskFilter;
  onFilterChange: (filter: TaskFilter) => void;
}

export interface TaskStatsProps {
  stats: TaskStats;
}

// Import types from common-utils
import type { Task, TaskFilter, TaskStats, CreateTaskRequest } from '@task-management/common-utils';