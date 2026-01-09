// Test Component - Created via GitHub MCP Server
import React from 'react';

interface TestComponentProps {
  title: string;
  priority: 'alta' | 'media' | 'baja';
}

export const TestComponent: React.FC<TestComponentProps> = ({ title, priority }) => {
  return (
    <div className={`test-component priority-${priority}`}>
      <h3>{title}</h3>
      <span className="priority-indicator" />
    </div>
  );
};

export default TestComponent;

// Created via GitHub MCP Server - Push Files Test