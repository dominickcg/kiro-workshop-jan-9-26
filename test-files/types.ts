// TypeScript Types - Created via GitHub MCP Server

export interface Task {
  id: string;
  titulo: string;
  estado: 'pendiente' | 'completada';
  prioridad: 'alta' | 'media' | 'baja';
  fechaCreacion: Date;
  fechaVencimiento?: Date;
  categoria?: 'personal' | 'trabajo';
}

export interface TaskCardProps {
  task: Task;
  onToggle: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export type PriorityColor = {
  alta: '#fb1856';
  media: '#f2d023';
  baja: '#259d6e';
};

export type CategoryColor = {
  personal: '#1e6bd6';
  trabajo: '#c3b573';
};

// Created via GitHub MCP Server - Push Files Test