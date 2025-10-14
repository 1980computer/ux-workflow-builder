import React, { useState, useRef, useCallback } from 'react';
import { WorkflowNodeData, Position, NODE_TYPES } from '../types/workflow';

interface WorkflowNodeProps {
  node: WorkflowNodeData;
  isSelected: boolean;
  onDrag: (nodeId: string, position: Position) => void;
  onClick: (nodeId: string) => void;
  onDoubleClick: (nodeId: string) => void;
  onConnectionStart: (nodeId: string, port: string) => void;
  onConnectionEnd: (nodeId: string, port: string) => void;
  onDelete: (nodeId: string) => void;
}

export const WorkflowNode: React.FC<WorkflowNodeProps> = ({
  node,
  isSelected,
  onDrag,
  onClick,
  onDoubleClick,
  onConnectionStart,
  onConnectionEnd,
  onDelete
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<Position>({ x: 0, y: 0 });
  const nodeRef = useRef<HTMLDivElement>(null);

  const nodeConfig = NODE_TYPES[node.type];

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDragging(true);
    setDragStart({
      x: e.clientX - node.position.x,
      y: e.clientY - node.position.y
    });
    onClick(node.id);
  }, [node.id, node.position, onClick]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging) {
      const newPosition = {
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      };
      onDrag(node.id, newPosition);
    }
  }, [isDragging, dragStart, node.id, onDrag]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const handleDoubleClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    onDoubleClick(node.id);
  }, [node.id, onDoubleClick]);

  const handleDelete = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete(node.id);
  }, [node.id, onDelete]);

  const handlePortClick = useCallback((e: React.MouseEvent, port: string) => {
    e.stopPropagation();
    // Handle port connection logic
    console.log('Port clicked:', port);
  }, []);

  return (
    <div
      ref={nodeRef}
      className={`
        absolute cursor-move select-none
        ${isSelected ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}
      `}
      style={{
        left: node.position.x,
        top: node.position.y,
        transform: isDragging ? 'scale(1.05)' : 'scale(1)',
        transition: isDragging ? 'none' : 'transform 0.2s ease'
      }}
      onMouseDown={handleMouseDown}
      onDoubleClick={handleDoubleClick}
    >
      {/* Node Container */}
      <div
        className={`
          relative bg-white dark:bg-dark-grey-light border-2 rounded-lg shadow-lg
          ${isSelected ? 'border-blue-500' : 'border-gray-200 dark:border-dark-grey'}
          hover:shadow-xl transition-all duration-200
        `}
        style={{
          minWidth: '120px',
          minHeight: '80px'
        }}
      >
        {/* Input Ports */}
        {nodeConfig.inputs > 0 && (
          <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 flex flex-col space-y-1">
            {Array.from({ length: nodeConfig.inputs }).map((_, index) => (
              <div
                key={`input-${index}`}
                className="w-4 h-4 bg-gray-400 rounded-full border-2 border-white dark:border-dark-grey-light cursor-pointer hover:bg-gray-500 transition-colors"
                onClick={(e) => handlePortClick(e, `input-${index}`)}
              />
            ))}
          </div>
        )}

        {/* Node Content */}
        <div className="p-3 text-center">
          <div className="text-2xl mb-1">{nodeConfig.icon}</div>
          <div className="text-sm font-medium text-gray-900 dark:text-white truncate">
            {node.label}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">
            {node.type}
          </div>
        </div>

        {/* Output Ports */}
        {nodeConfig.outputs > 0 && (
          <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 flex flex-col space-y-1">
            {Array.from({ length: nodeConfig.outputs }).map((_, index) => (
              <div
                key={`output-${index}`}
                className="w-4 h-4 bg-gray-400 rounded-full border-2 border-white dark:border-dark-grey-light cursor-pointer hover:bg-gray-500 transition-colors"
                onClick={(e) => handlePortClick(e, `output-${index}`)}
              />
            ))}
          </div>
        )}

        {/* Delete Button */}
        {isSelected && (
          <button
            className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full text-xs hover:bg-red-600 transition-colors"
            onClick={handleDelete}
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
};
