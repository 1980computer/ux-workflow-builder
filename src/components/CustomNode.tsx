'use client';

import React, { useState, useCallback } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';

interface CustomNodeData {
  label: string;
  description: string;
  color: string;
  isEditing: boolean;
}

export default function CustomNode({ data, id }: NodeProps<CustomNodeData>) {
  const [label, setLabel] = useState(data.label);
  const [description, setDescription] = useState(data.description);

  const handleLabelChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value);
  }, []);

  const handleDescriptionChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      data.isEditing = false;
    }
    if (e.key === 'Escape') {
      e.preventDefault();
      setLabel(data.label);
      setDescription(data.description);
      data.isEditing = false;
    }
  }, [data]);

  return (
    <div
      className="custom-node"
      style={{ 
        borderColor: data.color,
        background: `linear-gradient(135deg, ${data.color}10, ${data.color}05)`
      }}
    >
      <Handle 
        type="target" 
        position={Position.Top} 
        className="w-3 h-3"
        style={{ 
          background: data.color,
          borderColor: '#ffffff',
          boxShadow: `0 0 0 2px ${data.color}20`
        }}
      />
      
      <div className="text-center">
        {data.isEditing ? (
          <div className="space-y-3">
            <input
              type="text"
              value={label}
              onChange={handleLabelChange}
              onKeyDown={handleKeyDown}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              autoFocus
              placeholder="Node label..."
            />
            <textarea
              value={description}
              onChange={handleDescriptionChange}
              onKeyDown={handleKeyDown}
              className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              rows={2}
              placeholder="Description..."
            />
          </div>
        ) : (
          <div className="space-y-2">
            <div 
              className="font-semibold text-sm mb-2 px-2 py-1 rounded-md"
              style={{ 
                color: data.color,
                backgroundColor: `${data.color}15`
              }}
            >
              {label}
            </div>
            <div className="text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded-md">
              {description}
            </div>
          </div>
        )}
      </div>

      <Handle 
        type="source" 
        position={Position.Bottom} 
        className="w-3 h-3"
        style={{ 
          background: data.color,
          borderColor: '#ffffff',
          boxShadow: `0 0 0 2px ${data.color}20`
        }}
      />
    </div>
  );
}
