# Task Management System

Sistema de gestión de tareas completo con frontend React/Next.js y backend Node.js/TypeScript, siguiendo los estándares de arquitectura de NexusCorp.

## Project Structure

```
task-management-system/
├── apps/
│   └── frontend/          # Next.js React application
├── services/
│   └── api-lambda/        # Node.js/TypeScript API service
├── packages/
│   └── common-utils/      # Shared types and utilities
└── infrastructure/        # AWS CDK stacks (to be added)
```

## Prerequisites

- Node.js 18+ 
- npm 9+

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Setup environment variables:**
   ```bash
   # Frontend
   cp apps/frontend/.env.local.example apps/frontend/.env.local
   
   # Backend
   cp services/api-lambda/.env.example services/api-lambda/.env
   ```

3. **Start development servers:**
   ```bash
   npm run dev
   ```

   This starts both frontend (http://localhost:3000) and backend (http://localhost:3001) concurrently.

## Development Commands

- `npm run dev` - Start both frontend and backend in development mode
- `npm run build` - Build all packages and applications
- `npm run test` - Run all test suites
- `npm run lint` - Lint all code
- `npm run type-check` - TypeScript type checking

## Individual Service Commands

### Frontend (Next.js)
```bash
cd apps/frontend
npm run dev        # Development server
npm run build      # Production build
npm run test       # Run tests
```

### Backend (API Lambda)
```bash
cd services/api-lambda
npm run dev        # Development server with hot reload
npm run build      # Production build
npm run test       # Run tests
```

### Common Utils
```bash
cd packages/common-utils
npm run build      # Build shared types
npm run test       # Run tests
```

## Architecture

- **Frontend**: Next.js with TypeScript, Material-UI, React Query
- **Backend**: Express.js with TypeScript, prepared for AWS Lambda
- **Shared**: Common types and utilities package
- **Testing**: Jest with property-based testing using fast-check
- **Code Quality**: ESLint, Prettier, strict TypeScript

## Design System

Based on Figma design: https://www.figma.com/design/p6DkcwhGo9RasbGJAsR2cX/Personal-Task-Manager-In-Figma--Community-

## Next Steps

This is the initial project structure. Subsequent tasks will implement:
1. Pure business logic functions
2. Data persistence layer  
3. Backend API endpoints
4. Frontend React components
5. Integration and testing

## Requirements Coverage

- ✅ **3.1**: Task interface defined with id, titulo, estado, prioridad, fechaCreacion
- ✅ **3.2**: Priority type defined as "alta" | "media" | "baja"  
- ✅ **3.3**: TaskStats type defined with total, completadas, pendientes
- ✅ **NexusCorp Standards**: TypeScript throughout, proper project structure, testing setup