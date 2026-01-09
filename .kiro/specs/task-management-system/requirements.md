# Requirements Document

## Introduction

Sistema de gestión de tareas como aplicación web completa con frontend y backend. El sistema permite a los usuarios crear, gestionar y filtrar tareas con diferentes prioridades, proporcionando estadísticas en tiempo real. Debe funcionar localmente antes de considerar despliegue a AWS.

## Glossary

- **Task_Manager**: El sistema completo de gestión de tareas
- **Task**: Una tarea individual con título, estado, prioridad y fecha de creación
- **Priority**: Nivel de importancia de una tarea (alta, media, baja)
- **Task_Stats**: Estadísticas calculadas del conjunto de tareas
- **Frontend**: Aplicación web cliente desarrollada en React/Next.js
- **Backend**: API REST desarrollada en Node.js/TypeScript
- **User**: Usuario final que interactúa con la aplicación

## Requirements

### Requirement 1: Gestión Básica de Tareas

**User Story:** Como usuario, quiero crear y gestionar tareas con diferentes prioridades, para organizar mi trabajo de manera efectiva.

#### Acceptance Criteria

1. THE Task_Manager SHALL allow creating tasks with title and priority (alta, media, baja)
2. THE Task_Manager SHALL allow marking tasks as completed and unmarking them
3. WHEN a task is created, THE Task_Manager SHALL assign a unique ID and creation timestamp
4. THE Task_Manager SHALL persist all task data between sessions

### Requirement 2: Filtrado y Visualización

**User Story:** Como usuario, quiero filtrar y visualizar mis tareas por estado, para enfocarme en lo que necesito hacer.

#### Acceptance Criteria

1. THE Task_Manager SHALL allow filtering tasks by status: all, pending, completed
2. THE Task_Manager SHALL display tasks with visual styling based on priority
3. THE Task_Manager SHALL maintain responsive layout for mobile devices
4. THE Task_Manager SHALL show task statistics: total, completed, pending

### Requirement 3: Definición de Tipos TypeScript

**User Story:** Como desarrollador, quiero tipos TypeScript bien definidos, para garantizar la consistencia de datos en toda la aplicación.

#### Acceptance Criteria

1. THE Task_Manager SHALL define Task interface with: id, titulo, estado, prioridad, fechaCreacion
2. THE Task_Manager SHALL define Priority type as "alta" | "media" | "baja"
3. THE Task_Manager SHALL define TaskStats type with: total, completadas, pendientes
4. THE Task_Manager SHALL use strict TypeScript typing throughout the codebase

### Requirement 4: Lógica de Negocio Pura

**User Story:** Como desarrollador, quiero funciones puras e inmutables para la lógica de negocio, para facilitar el testing y mantenimiento.

#### Acceptance Criteria

1. THE Task_Manager SHALL implement pure functions for: create task, toggle completion, filter by status, calculate statistics
2. THE Task_Manager SHALL ensure all business logic functions are immutable
3. THE Task_Manager SHALL separate business logic from UI and API concerns
4. THE Task_Manager SHALL make business logic functions easily testable

### Requirement 5: API REST Backend

**User Story:** Como desarrollador frontend, quiero una API REST bien definida, para integrar el frontend con el backend de manera consistente.

#### Acceptance Criteria

1. THE Backend SHALL expose REST endpoints for: create task, list tasks, update completion status, get statistics
2. THE Backend SHALL use standardized JSON response format with statusCode and data for success
3. THE Backend SHALL use standardized JSON response format with statusCode and error for failures
4. WHEN invalid task data is received, THE Backend SHALL reject requests with clear error messages
5. THE Backend SHALL validate task titles are not empty and not longer than 100 characters

### Requirement 6: Frontend con Consumo de API

**User Story:** Como usuario, quiero una interfaz web intuitiva que se sincronice automáticamente con el servidor, para tener mis datos siempre actualizados.

#### Acceptance Criteria

1. WHEN the user opens the application, THE Frontend SHALL load the task list from the API
2. WHEN the user creates or updates a task, THE Frontend SHALL reflect changes by updating state with API response
3. THE Frontend SHALL render: form, task list, status filters, and statistics panel
4. THE Frontend SHALL handle API errors gracefully with user-friendly messages

### Requirement 7: Validaciones Frontend

**User Story:** Como usuario, quiero validación inmediata en el frontend, para recibir feedback rápido sobre errores en mis datos.

#### Acceptance Criteria

1. IF the user attempts to submit a task without title or with more than 100 characters, THEN THE Frontend SHALL prevent submission and show clear error message
2. THE Frontend SHALL provide real-time validation feedback as user types
3. THE Frontend SHALL disable submit button when validation fails
4. THE Frontend SHALL clear validation errors when user corrects input

### Requirement 8: Configuración y Ejecución Local

**User Story:** Como desarrollador, quiero poder ejecutar y probar el sistema localmente de manera sencilla, para desarrollo y debugging eficiente.

#### Acceptance Criteria

1. THE Task_Manager SHALL provide clear instructions to start backend and frontend locally
2. THE Task_Manager SHALL use environment variables for configuration (e.g., API_BASE_URL)
3. THE Task_Manager SHALL include unit tests for all pure domain functions
4. WHEN tests are executed locally, THE Task_Manager SHALL run all test suites successfully
5. THE Task_Manager SHALL provide a single command to start the complete development environment

### Requirement 9: Integración con Diseño Figma

**User Story:** Como usuario, quiero una interfaz que siga el diseño establecido en Figma, para una experiencia visual consistente y profesional.

#### Acceptance Criteria

1. THE Frontend SHALL implement the visual design specified in the Figma file (URL: https://www.figma.com/design/p6DkcwhGo9RasbGJAsR2cX/Personal-Task-Manager-In-Figma--Community-?node-id=0-1)
2. THE Frontend SHALL maintain design consistency across all components
3. THE Frontend SHALL use appropriate colors, typography, and spacing as defined in Figma
4. THE Frontend SHALL ensure responsive behavior matches Figma specifications