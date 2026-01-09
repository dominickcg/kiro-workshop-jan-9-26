# GitHub Integration Guide - NexusCorp Task Management System

## Overview

Este documento define las mejores prácticas para interactuar con GitHub mediante el GitHub MCP Server en el proyecto Task Management System de NexusCorp. Establece workflows, convenciones y procedimientos estándar para mantener la calidad del código y la consistencia del proyecto.

## GitHub MCP Server Configuration

### Current Setup
- **Server**: `@modelcontextprotocol/server-github`
- **Authentication**: GitHub Personal Access Token
- **Environment Variable**: `GITHUB_TOKEN`
- **Status**: Configurado y habilitado

### Repository Information
- **Organization/Owner**: `dominickcg`
- **Repository Name**: `kiro-workshop-jan-9-26`
- **Repository URL**: `https://github.com/dominickcg/kiro-workshop-jan-9-26.git`
- **Main Branch**: `master`
- **Development Branch**: `develop` (to be created)
- **Current Branch**: `master`

## Branch Strategy (GitFlow)

### Branch Naming Conventions (MANDATORY)

```
master                  # Producción estable (branch principal actual)
develop                 # Integración de desarrollo (a crear)
feature/[feature-name]  # Nuevas características
hotfix/[issue-name]     # Correcciones urgentes
release/[version]       # Preparación de releases
```

**Ejemplos:**
- `feature/user-authentication`
- `feature/task-crud-operations`
- `hotfix/priority-color-fix`
- `release/v1.0.0`

### Workflow de Desarrollo

1. **Feature Development**
   ```bash
   # Crear rama develop si no existe
   git checkout master
   git checkout -b develop
   git push -u origin develop
   
   # Crear nueva rama desde develop
   git checkout develop
   git pull origin develop
   git checkout -b feature/task-management-ui
   ```

2. **Commit Standards** (Conventional Commits)
   ```
   feat: add task creation functionality
   fix: resolve priority color display issue
   docs: update API documentation
   style: format code according to prettier rules
   refactor: restructure task component hierarchy
   test: add unit tests for task validation
   chore: update dependencies
   ```

3. **Pull Request Process**
   - Crear PR desde feature branch hacia `develop`
   - Título descriptivo siguiendo conventional commits
   - Descripción detallada con contexto y cambios
   - Asignar reviewers apropiados
   - Vincular issues relacionados

## GitHub Operations Guidelines

### Repository Management

#### Creating and Managing Issues

```typescript
// Crear issue para nueva funcionalidad
await github.create_issue({
  owner: "dominickcg",
  repo: "kiro-workshop-jan-9-26",
  title: "feat: Implement task priority filtering",
  body: `
## Description
Implementar filtrado de tareas por prioridad según el diseño de Figma.

## Acceptance Criteria
- [ ] Filtro por prioridad alta (rojo #fb1856)
- [ ] Filtro por prioridad media (amarillo #f2d023)
- [ ] Filtro por prioridad baja (verde #259d6e)
- [ ] Interfaz consistente con design system

## Design Reference
- Figma Node: 3:58, 3:60, 3:62
- Component: Priority indicators

## Technical Requirements
- TypeScript implementation
- Material-UI components
- Unit tests with 80% coverage
- Property-based tests for filtering logic
  `,
  labels: ["enhancement", "frontend", "priority-medium"],
  assignees: ["developer-username"]
});
```

#### Pull Request Templates

**Template para Feature PRs:**
```markdown
## 🚀 Feature Description
Brief description of the feature implemented.

## 📋 Changes Made
- [ ] Component implementation
- [ ] Unit tests added
- [ ] Integration tests added
- [ ] Documentation updated
- [ ] Design system compliance verified

## 🎨 Design Compliance
- [ ] Figma specifications followed
- [ ] Color palette matches exactly
- [ ] Typography specifications applied
- [ ] Layout measurements verified
- [ ] Responsive behavior tested

## 🧪 Testing
- [ ] Unit tests pass (80% coverage minimum)
- [ ] Property-based tests implemented
- [ ] Integration tests pass
- [ ] Manual testing completed

## 📱 Screenshots/Demo
[Include screenshots or demo links]

## 🔗 Related Issues
Closes #[issue-number]

## 📝 Additional Notes
Any additional context or considerations.
```

### Code Quality Standards

#### Pre-commit Checks
```typescript
// Verificar antes de commit
const preCommitChecks = {
  linting: "eslint --fix src/",
  formatting: "prettier --write src/",
  typeCheck: "tsc --noEmit",
  tests: "npm run test:coverage",
  buildCheck: "npm run build"
};
```

#### File Organization Standards
```
/src
  /components
    /task
      TaskCard.tsx           # Componente principal (Figma: 3:184)
      TaskCard.test.tsx      # Unit tests
      TaskCard.stories.tsx   # Storybook stories
      TaskCard.types.ts      # TypeScript interfaces
    /priority
      PriorityIcon.tsx       # Componente prioridad (Figma: 3:58-62)
    /category
      CategoryTag.tsx        # Componente categoría (Figma: 3:50-52)
  /hooks
    useTaskManagement.ts     # Custom hooks
  /services
    taskService.ts           # API services
  /types
    task.types.ts           # Interfaces globales
  /utils
    taskUtils.ts            # Utilidades
```

### Deployment and Release Management

#### Release Process
1. **Preparación de Release**
   ```bash
   # Crear rama de release
   git checkout develop
   git checkout -b release/v1.0.0
   
   # Actualizar versión
   npm version patch|minor|major
   ```

2. **Release Notes Template**
   ```markdown
   # Release v1.0.0
   
   ## 🚀 New Features
   - Task creation and management
   - Priority-based filtering
   - Category organization
   
   ## 🐛 Bug Fixes
   - Fixed priority color display
   - Resolved responsive layout issues
   
   ## 🎨 Design Updates
   - Updated to match latest Figma specifications
   - Improved accessibility compliance
   
   ## 🧪 Testing
   - Added comprehensive unit tests
   - Implemented property-based testing
   - Achieved 85% code coverage
   
   ## 📚 Documentation
   - Updated API documentation
   - Added component usage examples
   ```

### Security and Compliance

#### Sensitive Data Management
```typescript
// NEVER commit sensitive data
const securityRules = {
  noSecrets: "No API keys, tokens, or passwords in code",
  envVars: "Use environment variables for configuration",
  gitignore: "Ensure .env files are in .gitignore",
  tokenRotation: "Rotate GitHub tokens regularly"
};
```

#### Code Review Requirements
- **Mandatory Reviews**: Minimum 1 senior developer approval
- **Security Review**: Required for authentication/authorization changes
- **Design Review**: Required for UI/UX changes
- **Performance Review**: Required for data processing changes

### Automation and CI/CD

#### GitHub Actions Workflows
```yaml
# .github/workflows/ci.yml
name: Continuous Integration
on:
  pull_request:
    branches: [develop, master]
  push:
    branches: [develop, master]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
      - run: npm run test:coverage
      - run: npm run build
```

#### Automated Quality Gates
- **Code Coverage**: Minimum 80%
- **Type Safety**: Zero TypeScript errors
- **Linting**: Zero ESLint errors
- **Security**: Snyk vulnerability scanning
- **Performance**: Lighthouse CI checks

## GitHub MCP Commands Reference

### Repository Operations
```typescript
// Buscar repositorios
await github.search_repositories({
  query: "kiro-workshop dominickcg",
  page: 1,
  perPage: 10
});

// Obtener contenido de archivos
await github.get_file_contents({
  owner: "dominickcg",
  repo: "kiro-workshop-jan-9-26",
  path: "src/components/TaskCard.tsx",
  branch: "develop"
});

// Crear/actualizar archivos
await github.create_or_update_file({
  owner: "dominickcg",
  repo: "kiro-workshop-jan-9-26",
  path: "src/components/NewComponent.tsx",
  content: componentCode,
  message: "feat: add new task component",
  branch: "feature/new-component"
});
```

### Issue Management
```typescript
// Listar issues
await github.list_issues({
  owner: "dominickcg",
  repo: "kiro-workshop-jan-9-26",
  state: "open",
  labels: ["bug", "priority-high"],
  sort: "created",
  direction: "desc"
});

// Actualizar issue
await github.update_issue({
  owner: "dominickcg",
  repo: "kiro-workshop-jan-9-26",
  issue_number: 123,
  state: "closed",
  labels: ["resolved", "tested"]
});

// Agregar comentario
await github.add_issue_comment({
  owner: "dominickcg",
  repo: "kiro-workshop-jan-9-26",
  issue_number: 123,
  body: "Issue resolved in PR #456. Testing completed successfully."
});
```

### Pull Request Management
```typescript
// Crear Pull Request
await github.create_pull_request({
  owner: "dominickcg",
  repo: "kiro-workshop-jan-9-26",
  title: "feat: implement task priority filtering",
  head: "feature/task-priority-filter",
  base: "develop",
  body: pullRequestTemplate,
  draft: false
});

// Revisar Pull Request
await github.create_pull_request_review({
  owner: "dominickcg",
  repo: "kiro-workshop-jan-9-26",
  pull_number: 456,
  body: "LGTM! Code follows all standards and tests pass.",
  event: "APPROVE"
});

// Merge Pull Request
await github.merge_pull_request({
  owner: "dominickcg",
  repo: "kiro-workshop-jan-9-26",
  pull_number: 456,
  commit_title: "feat: implement task priority filtering (#456)",
  merge_method: "squash"
});
```

## Integration with Figma Design System

### Design-Code Sync Workflow
```typescript
// Workflow para sincronizar cambios de diseño
const designSyncWorkflow = {
  1: "Detectar cambios en Figma usando Figma MCP",
  2: "Crear issue automático para actualización de componentes",
  3: "Generar branch feature/design-update-[date]",
  4: "Actualizar componentes según nuevas especificaciones",
  5: "Ejecutar tests de regresión visual",
  6: "Crear PR con evidencia de cambios",
  7: "Review y merge tras aprobación de diseño"
};
```

### Component Mapping
```typescript
// Mapeo entre componentes Figma y código
const figmaToCodeMapping = {
  "3:184": "src/components/task/TaskCard.tsx",
  "3:50": "src/components/category/PersonalTag.tsx",
  "3:52": "src/components/category/WorkTag.tsx",
  "3:58": "src/components/priority/HighPriority.tsx",
  "3:60": "src/components/priority/MediumPriority.tsx",
  "3:62": "src/components/priority/LowPriority.tsx"
};
```

## Error Handling and Troubleshooting

### Common GitHub MCP Issues
```typescript
const troubleshooting = {
  authenticationError: {
    issue: "GitHub token expired or invalid",
    solution: "Update GITHUB_TOKEN in .env file",
    command: "Check token permissions and expiration"
  },
  
  rateLimitExceeded: {
    issue: "GitHub API rate limit reached",
    solution: "Wait for rate limit reset or use authenticated requests",
    command: "Check rate limit status with github.get_rate_limit()"
  },
  
  permissionDenied: {
    issue: "Insufficient permissions for repository operation",
    solution: "Ensure token has required scopes (repo, issues, pull_requests)",
    command: "Verify token permissions in GitHub settings"
  }
};
```

### Monitoring and Logging
```typescript
// Logging para operaciones GitHub
const logGitHubOperation = (operation: string, result: any) => {
  console.log(`[GitHub MCP] ${operation}:`, {
    timestamp: new Date().toISOString(),
    operation,
    success: result.success,
    details: result.data
  });
};
```

## Automated Task Completion Workflow

### Auto-commit Strategy
Cada vez que se complete una tarea del spec, se debe realizar un commit automático para mantener un historial granular del progreso.

#### Task Completion Commit Pattern
```typescript
// Patrón de commit al completar tareas
const taskCommitPattern = {
  format: "task: complete [task-number] - [task-description]",
  examples: [
    "task: complete 1.1 - implement task card component",
    "task: complete 2.3 - add priority filtering logic",
    "task: complete 3.2 - write unit tests for task validation"
  ]
};
```

#### Automated Commit Workflow
```typescript
// Workflow automático al completar una tarea
const autoCommitWorkflow = {
  1: "Completar implementación de la tarea",
  2: "Ejecutar tests para verificar funcionalidad",
  3: "Ejecutar linting y formatting automático",
  4: "Generar commit con mensaje descriptivo",
  5: "Push automático a la rama feature actual",
  6: "Actualizar status de la tarea en tasks.md",
  7: "Notificar progreso al usuario"
};
```

#### GitHub MCP Commands for Auto-commit
```typescript
// Función para auto-commit al completar tarea
async function autoCommitTaskCompletion(taskNumber: string, taskDescription: string, changedFiles: string[]) {
  try {
    // 1. Obtener información del repositorio actual
    const repoInfo = await getCurrentRepository();
    
    // 2. Crear commit message siguiendo convenciones
    const commitMessage = `task: complete ${taskNumber} - ${taskDescription}

- Implemented functionality according to spec requirements
- All tests passing
- Code follows NexusCorp standards
- Design system compliance verified

Task: ${taskNumber}
Files changed: ${changedFiles.join(', ')}`;

    // 3. Crear commit con todos los archivos modificados
    const commitResult = await github.create_or_update_file({
      owner: repoInfo.owner,
      repo: repoInfo.repo,
      path: "TASK_PROGRESS.md", // Archivo de tracking
      content: generateTaskProgressContent(taskNumber, taskDescription),
      message: commitMessage,
      branch: repoInfo.currentBranch
    });

    // 4. Push múltiples archivos si es necesario
    if (changedFiles.length > 1) {
      await github.push_files({
        owner: repoInfo.owner,
        repo: repoInfo.repo,
        branch: repoInfo.currentBranch,
        files: changedFiles.map(file => ({
          path: file,
          content: readFileContent(file)
        })),
        message: commitMessage
      });
    }

    // 5. Actualizar task status
    await updateTaskStatus(taskNumber, 'completed');
    
    console.log(`✅ Task ${taskNumber} completed and committed successfully`);
    return { success: true, commitSha: commitResult.sha };
    
  } catch (error) {
    console.error(`❌ Error auto-committing task ${taskNumber}:`, error);
    return { success: false, error: error.message };
  }
}
```

#### Task Progress Tracking
```typescript
// Generar contenido de progreso de tareas
function generateTaskProgressContent(taskNumber: string, taskDescription: string): string {
  const timestamp = new Date().toISOString();
  const progressEntry = `
## Task ${taskNumber} - Completed ✅

**Description**: ${taskDescription}
**Completed**: ${timestamp}
**Branch**: ${getCurrentBranch()}
**Commit**: ${getCurrentCommitSha()}

### Changes Made:
- Implementation completed according to specifications
- Tests added and passing
- Code review ready

---
`;
  
  return progressEntry;
}
```

#### Integration with Spec Execution
```typescript
// Integración con el sistema de specs de Kiro
const specTaskIntegration = {
  onTaskStart: "Crear branch feature/task-[number] si no existe",
  onTaskProgress: "Commit intermedio con 'wip: [task-number] - progress update'",
  onTaskComplete: "Commit final con 'task: complete [task-number] - [description]'",
  onSpecComplete: "Crear PR automático hacia develop con resumen completo"
};
```

#### Auto-commit Configuration
```typescript
// Configuración para auto-commits
const autoCommitConfig = {
  enabled: true,
  commitOnTaskComplete: true,
  commitOnTestPass: true,
  pushImmediately: true,
  createProgressFile: true,
  updateTaskStatus: true,
  
  // Patrones de archivos a incluir automáticamente
  includePatterns: [
    "src/**/*.ts",
    "src/**/*.tsx", 
    "src/**/*.test.ts",
    "src/**/*.stories.tsx",
    "*.md",
    "package.json"
  ],
  
  // Archivos a excluir
  excludePatterns: [
    "node_modules/**",
    ".env*",
    "*.log",
    "dist/**"
  ]
};
```

#### Branch Management for Tasks
```typescript
// Gestión automática de branches por tarea
const taskBranchStrategy = {
  pattern: "feature/task-[spec-name]-[task-number]",
  examples: [
    "feature/task-management-system-1.1",
    "feature/task-management-system-2.3",
    "feature/task-management-system-3.2"
  ],
  
  autoCreate: true,
  autoSwitch: true,
  baseBranch: "develop",
  
  // Crear branch automáticamente al iniciar tarea
  createBranchOnTaskStart: async (specName: string, taskNumber: string) => {
    const branchName = `feature/task-${specName}-${taskNumber}`;
    
    await github.create_branch({
      owner: repoInfo.owner,
      repo: repoInfo.repo,
      branch: branchName,
      from_branch: "develop"
    });
    
    return branchName;
  }
};
```

#### Pull Request Auto-creation
```typescript
// Crear PR automático cuando se completen todas las tareas de un spec
async function createSpecCompletionPR(specName: string, completedTasks: string[]) {
  const prTitle = `feat: complete ${specName} implementation`;
  const prBody = `
## 🚀 Spec Implementation Complete: ${specName}

This PR implements the complete ${specName} specification with all required tasks.

## ✅ Completed Tasks
${completedTasks.map(task => `- [x] ${task}`).join('\n')}

## 📋 Implementation Summary
- All spec requirements implemented
- Unit tests added with >80% coverage
- Property-based tests implemented
- Design system compliance verified
- Code review ready

## 🧪 Testing
- [ ] All unit tests pass
- [ ] Property-based tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed

## 🎨 Design Compliance
- [ ] Figma specifications followed exactly
- [ ] Color palette matches design system
- [ ] Typography specifications applied
- [ ] Responsive behavior verified

## 📱 Demo
[Include screenshots or demo links]

**Auto-generated PR from spec completion**
`;

  return await github.create_pull_request({
    owner: repoInfo.owner,
    repo: repoInfo.repo,
    title: prTitle,
    head: getCurrentBranch(),
    base: "develop",
    body: prBody,
    draft: false
  });
}
```

## Best Practices Summary

### DO's ✅
- Usar conventional commits para todos los commits
- **Hacer commit automático al completar cada tarea**
- **Crear branches específicos por tarea cuando sea necesario**
- Crear issues detallados con acceptance criteria
- Incluir tests en todos los PRs
- Seguir el design system de Figma exactamente
- Documentar cambios en PRs
- Usar branches descriptivos
- Revisar código antes de merge
- Mantener coverage de tests > 80%
- **Mantener historial granular de progreso de tareas**

### DON'Ts ❌
- No hacer commits directos a main/develop
- No mergear PRs sin review
- No incluir secrets en el código
- No ignorar fallos de tests
- No hacer cambios sin issue asociado
- No usar force push en branches compartidos
- No mergear con conflictos sin resolver
- **No completar tareas sin hacer commit del progreso**
- **No acumular múltiples tareas en un solo commit**

## Maintenance and Updates

### Regular Tasks
- **Weekly**: Review y cleanup de branches obsoletos
- **Monthly**: Actualización de dependencias
- **Quarterly**: Review de permisos y tokens
- **Annually**: Audit de seguridad completo

### Monitoring Metrics
- Pull request merge time
- Code review coverage
- Test coverage trends
- Issue resolution time
- Deployment frequency
- Change failure rate
- **Task completion rate and velocity**
- **Commit frequency per task**
- **Time between task start and completion**

---

**Nota**: Este documento debe actualizarse cuando cambien las configuraciones del proyecto o se implementen nuevas prácticas de desarrollo.