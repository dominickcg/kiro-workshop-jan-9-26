// Re-export common types
export * from '@task-management/common-utils';

// Backend-specific types
export interface ServerConfig {
  port: number;
  corsOrigin: string;
  dataPath: string;
}

export interface StorageAdapter {
  read(): Promise<Task[]>;
  write(tasks: Task[]): Promise<void>;
}

// Express request/response extensions
export interface TaskRequest extends Request {
  body: CreateTaskRequest | UpdateTaskRequest;
}

// Import types from common-utils
import type { Task, CreateTaskRequest, UpdateTaskRequest } from '@task-management/common-utils';
import type { Request } from 'express';