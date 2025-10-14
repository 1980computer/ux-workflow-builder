export type NodeType = 'start' | 'end' | 'action' | 'decision' | 'loop' | 'condition' | 'delay' | 'notification';

export interface Position {
  x: number;
  y: number;
}

export interface WorkflowNodeData {
  id: string;
  type: NodeType;
  label: string;
  position: Position;
  data: Record<string, any>;
  inputs?: string[];
  outputs?: string[];
}

export interface Connection {
  id: string;
  fromNodeId: string;
  fromPort: string;
  toNodeId: string;
  toPort: string;
}

export interface WorkflowData {
  id: string;
  name: string;
  description?: string;
  nodes: WorkflowNodeData[];
  connections: Connection[];
  createdAt: Date;
  updatedAt: Date;
}

export interface NodeTypeConfig {
  type: NodeType;
  label: string;
  icon: string;
  color: string;
  inputs: number;
  outputs: number;
  description: string;
}

export const NODE_TYPES: Record<NodeType, NodeTypeConfig> = {
  start: {
    type: 'start',
    label: 'Start',
    icon: '▶️',
    color: '#10b981',
    inputs: 0,
    outputs: 1,
    description: 'Workflow entry point'
  },
  end: {
    type: 'end',
    label: 'End',
    icon: '⏹️',
    color: '#ef4444',
    inputs: 1,
    outputs: 0,
    description: 'Workflow exit point'
  },
  action: {
    type: 'action',
    label: 'Action',
    icon: '⚡',
    color: '#3b82f6',
    inputs: 1,
    outputs: 1,
    description: 'Execute an action or task'
  },
  decision: {
    type: 'decision',
    label: 'Decision',
    icon: '❓',
    color: '#f59e0b',
    inputs: 1,
    outputs: 2,
    description: 'Conditional branching'
  },
  loop: {
    type: 'loop',
    label: 'Loop',
    icon: '🔄',
    color: '#8b5cf6',
    inputs: 1,
    outputs: 1,
    description: 'Repeat actions'
  },
  condition: {
    type: 'condition',
    label: 'Condition',
    icon: '🔍',
    color: '#06b6d4',
    inputs: 1,
    outputs: 2,
    description: 'Check conditions'
  },
  delay: {
    type: 'delay',
    label: 'Delay',
    icon: '⏱️',
    color: '#6b7280',
    inputs: 1,
    outputs: 1,
    description: 'Wait for specified time'
  },
  notification: {
    type: 'notification',
    label: 'Notification',
    icon: '📢',
    color: '#f97316',
    inputs: 1,
    outputs: 1,
    description: 'Send notifications'
  }
};
