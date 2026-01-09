import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env['PORT'] || 3001;

// Middleware
app.use(cors({
  origin: process.env['CORS_ORIGIN'] || 'http://localhost:3000'
}));
app.use(express.json());

// Health check endpoint
app.get('/health', (_req, res) => {
  res.json({ 
    statusCode: 200, 
    data: { 
      status: 'healthy', 
      timestamp: new Date().toISOString() 
    } 
  });
});

// Placeholder API routes - to be implemented in subsequent tasks
app.get('/api/tasks', (_req, res) => {
  res.json({ 
    statusCode: 200, 
    data: [] 
  });
});

// Start server
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;