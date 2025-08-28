'use client';

import React from 'react';

const nodeTypes = [
  {
    type: 'task',
    label: 'Task Node',
    color: '#10b981',
    description: 'A task to be completed',
    icon: '📋'
  },
  {
    type: 'decision',
    label: 'Decision Node',
    color: '#f59e0b',
    description: 'A decision point',
    icon: '🤔'
  },
  {
    type: 'process',
    label: 'Process Node',
    color: '#3b82f6',
    description: 'A processing step',
    icon: '⚙️'
  },
  {
    type: 'end',
    label: 'End Node',
    color: '#ef4444',
    description: 'End of workflow',
    icon: '🏁'
  },
  {
    type: 'start',
    label: 'Start Node',
    color: '#8b5cf6',
    description: 'Start of workflow',
    icon: '🚀'
  }
];

export default function Sidebar() {
  const onDragStart = (event: React.DragEvent, nodeType: string, label: string, color: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.setData('application/reactflow-label', label);
    event.dataTransfer.setData('application/reactflow-color', color);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside className="absolute left-4 top-4 w-72 bg-white rounded-xl shadow-xl border border-gray-200 p-6">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Node Types</h3>
        <p className="text-sm text-gray-600">Drag nodes to the canvas</p>
      </div>
      
      <div className="space-y-3">
        {nodeTypes.map((node) => (
          <div
            key={node.type}
            className="sidebar-node p-4 border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-200 bg-gradient-to-r from-gray-50 to-white"
            draggable
            onDragStart={(event) => onDragStart(event, node.type, node.label, node.color)}
          >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                  style={{ 
                    backgroundColor: `${node.color}20`,
                    border: `2px solid ${node.color}40`
                  }}
                >
                  {node.icon}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm text-gray-900 mb-1">
                  {node.label}
                </div>
                <div className="text-xs text-gray-500">
                  {node.description}
                </div>
              </div>
              <div className="flex-shrink-0">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: node.color }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
        <h4 className="font-semibold text-sm text-blue-900 mb-3 flex items-center">
          <span className="mr-2">💡</span>
          Quick Tips
        </h4>
        <ul className="text-xs text-blue-800 space-y-2">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Drag nodes from sidebar to canvas</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Click nodes to select them</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Double-click nodes to edit</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Connect nodes by dragging from handles</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Use controls to zoom and pan</span>
          </li>
        </ul>
      </div>
    </aside>
  );
}
