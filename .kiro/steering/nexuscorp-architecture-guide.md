---
inclusion: always
---

# NexusCorp Development & Architecture Guide

## Mandatory Technology Stack

### Frontend
- **React/Next.js with TypeScript** - Primary framework for SPAs/MPAs
- **Material-UI or Ant Design** - Consistent design system
- **SSR/SSG** - Use Server-Side Rendering or Static Site Generation when appropriate

### Backend
- **Node.js with TypeScript** - For AWS Lambda functions
- **Serverless Architecture** - Prioritize AWS serverless services

### Database
- **Amazon DynamoDB** - Preferred for high traffic and low latency
- **Amazon Aurora Serverless** - For complex transactions or SQL consistency

### Infrastructure
- **AWS CDK or Serverless Framework** - Infrastructure as Code (IaC)
- **AWS Lambda** - Backend code execution
- **Amazon API Gateway** - REST and WebSocket endpoints

## Naming Conventions (STRICT)

- **Services/Projects:** kebab-case (`user-service`)
- **Variables/Functions:** camelCase (`calculatePrice`)
- **Classes/Components:** PascalCase (`ProductCard`)
- **Constants:** UPPER_SNAKE_CASE (`MAX_RETRIES`)
- **Files/Modules:** kebab-case (`user-repository.ts`)
- **Lambda Functions:** PascalCase (`CreateUserFunction`)

## API Response Format (MANDATORY)

All API responses MUST follow this standardized JSON format:

```typescript
// Success Response
{
  statusCode: 200,
  data: T // actual response data
}

// Error Response
{
  statusCode: number,
  error: {
    message: string,
    code: string
  }
}
```

## Architecture Principles

### Serverless First
- **Event-Driven Design** - Asynchronous communication between services
- **Loose Coupling** - Independent components with well-defined interfaces
- **Auto-Scaling** - Leverage serverless auto-scalability
- **Fault Tolerance** - Implement retries, dead-letter queues, circuit breakers

### Development Standards
- **Clean Code** - Prioritize readability, maintainability, simplicity
- **Test-Driven Development** - Write tests before implementation
- **Single Responsibility** - Each module/function has one clear purpose

## Project Structure (REQUIRED)

```
/apps
  /frontend-app          # Next.js application
/services  
  /api-lambda           # Lambda function services
/packages
  /ui-library           # Shared UI components
  /common-utils         # Shared utilities
/infrastructure
  /aws-cdk-stacks       # Infrastructure definitions
```

## Security Requirements (NON-NEGOTIABLE)

- **Zero Trust Architecture** - Never trust internal/external traffic
- **Least Privilege Principle** - Restrictive IAM policies
- **AWS Cognito** - User management and authentication
- **AWS Secrets Manager** - Credential storage
- **JWT Tokens** - Validation via API Gateway Custom Authorizers

## Observability (MANDATORY)

- **Structured Logging** - JSON format logs in CloudWatch
- **CloudWatch Metrics** - Performance and error monitoring
- **AWS X-Ray** - Distributed tracing
- **CloudWatch Alarms** - Automated alerts (e.g., errors > 1%)

## Testing Requirements

1. **Unit Tests** - Minimum 80% code coverage
2. **Integration Tests** - Service interaction validation
3. **E2E Tests** - Complete user flow testing (Cypress/Playwright)

## DevOps Standards

- **CI/CD Pipeline** - AWS CodePipeline or GitHub Actions
- **Infrastructure as Code** - All resources provisioned via code
- **Safe Deployments** - Blue-green or canary deployments for critical changes
- **Cost Monitoring** - AWS Cost Explorer integration

## Code Quality Standards

- **Conventional Commits** - For automated changelogs
- **Code Reviews** - Senior developer approval required
- **Semantic Versioning** - For releases and dependencies

## AI Assistant Guidelines

When generating code or architecture:
1. Always use TypeScript with strict type checking
2. Implement proper error handling with standardized response format
3. Include CloudWatch logging in Lambda functions
4. Follow the exact naming conventions specified above
5. Prioritize serverless AWS services over traditional infrastructure
6. Include basic security measures (input validation, authentication checks)
7. Structure code according to the required project layout