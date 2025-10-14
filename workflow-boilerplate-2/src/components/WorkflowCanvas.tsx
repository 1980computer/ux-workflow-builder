import React, { useState, useRef, useCallback } from 'react';
import { WorkflowNode } from './WorkflowNode';
import { WorkflowConnector } from './WorkflowConnector';
import { NodeType, WorkflowNodeData, Position, Connection } from '../types/workflow';

interface WorkflowCanvasProps {
  nodes: WorkflowNodeData[];
  connections: Connection[];
  onNodeAdd: (node: WorkflowNodeData) => void;
  onNodeUpdate: (id: string, updates: Partial<WorkflowNodeData>) => void;
  onNodeDelete: (id: string) => void;
  onConnectionAdd: (connection: Connection) => void;
  onConnectionDelete: (id: string) => void;
  onNodeSelect: (id: string | null) => void;
  selectedNodeId: string | null;
}

export const WorkflowCanvas: React.FC<WorkflowCanvasProps> = ({
  nodes,
  connections,
  onNodeAdd,
  onNodeUpdate,
  onNodeDelete,
  onConnectionAdd,
  onConnectionDelete,
  onNodeSelect,
  selectedNodeId
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<Position>({ x: 0, y: 0 });
  const [canvasOffset, setCanvasOffset] = useState<Position>({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLDivElement>(null);

  const handleCanvasClick = useCallback((e: React.MouseEvent) => {
    if (e.target === canvasRef.current) {
      onNodeSelect(null);
    }
  }, [onNodeSelect]);

  const handleNodeDrag = useCallback((nodeId: string, position: Position) => {
    onNodeUpdate(nodeId, { position });
  }, [onNodeUpdate]);

  const handleNodeClick = useCallback((nodeId: string) => {
    onNodeSelect(nodeId);
  }, [onNodeSelect]);

  const handleNodeDoubleClick = useCallback((nodeId: string) => {
    // Open node properties panel
    console.log('Open properties for node:', nodeId);
  }, []);

  const handleConnectionStart = useCallback((fromNodeId: string, fromPort: string) => {
    // Start connection creation
    console.log('Start connection from:', fromNodeId, fromPort);
  }, []);

  const handleConnectionEnd = useCallback((toNodeId: string, toPort: string) => {
    // Complete connection creation
    console.log('Complete connection to:', toNodeId, toPort);
  }, []);

  return (
    <div 
      ref={canvasRef}
      className="relative w-full h-full bg-gray-50 dark:bg-dark-grey overflow-hidden"
      onClick={handleCanvasClick}
      style={{ 
        backgroundImage: 'radial-gradient(circle, #e5e7eb 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Connections */}
      <svg className="absolute inset-0 pointer-events-none z-10">
        {connections.map((connection) => (
          <WorkflowConnector
            key={connection.id}
            connection={connection}
            nodes={nodes}
            onDelete={onConnectionDelete}
          />
        ))}
      </svg>

      {/* Nodes */}
      <div className="relative z-20">
        {nodes.map((node) => (
          <WorkflowNode
            key={node.id}
            node={node}
            isSelected={selectedNodeId === node.id}
            onDrag={handleNodeDrag}
            onClick={handleNodeClick}
            onDoubleClick={handleNodeDoubleClick}
            onConnectionStart={handleConnectionStart}
            onConnectionEnd={handleConnectionEnd}
            onDelete={onNodeDelete}
          />
        ))}
      </div>

      {/* Canvas controls */}
      <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
        <button
          className="p-2 bg-white dark:bg-dark-grey-light border border-gray-200 dark:border-dark-grey rounded-lg shadow-lg hover:bg-gray-50 dark:hover:bg-dark-grey transition-colors"
          onClick={() => {
            const newNode: WorkflowNodeData = {
              id: `node-${Date.now()}`,
              type: 'action',
              label: 'New Action',
              position: { x: 100, y: 100 },
              data: {}
            };
            onNodeAdd(newNode);
          }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
        
        <button
          className="p-2 bg-white dark:bg-dark-grey-light border border-gray-200 dark:border-dark-grey rounded-lg shadow-lg hover:bg-gray-50 dark:hover:bg-dark-grey transition-colors"
          onClick={() => {
            // Reset canvas view
            setCanvasOffset({ x: 0, y: 0 });
          }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>
    </div>
  );
};
