import React from 'react';
import { Node } from '@xyflow/react';

interface NodeConfigurationProps {
  node: Node | null;
  onUpdateNode: (nodeId: string, updates: Partial<Node>) => void;
}

const NodeConfiguration: React.FC<NodeConfigurationProps> = ({ node, onUpdateNode }) => {
  if (!node) {
    return (
      <div className="p-6 text-center text-gray-500 dark:text-gray-400">
        <div className="mb-4">
          <i className="bi bi-node-plus text-4xl"></i>
        </div>
        <h3 className="text-lg font-medium mb-2">No Node Selected</h3>
        <p className="text-sm">Click on a node to configure its properties</p>
      </div>
    );
  }

  const handleLabelChange = (newLabel: string) => {
    onUpdateNode(node.id, {
      data: { ...(node.data as any), label: newLabel }
    });
  };

  const getNodeTypeInfo = (type: string) => {
    switch (type) {
      case 'start':
        return { icon: '▶️', color: '#10b981', description: 'Workflow entry point' };
      case 'end':
        return { icon: '⏹️', color: '#ef4444', description: 'Workflow exit point' };
      case 'action':
        return { icon: '⚡', color: '#3b82f6', description: 'Execute an action or task' };
      case 'decision':
        return { icon: '❓', color: '#f59e0b', description: 'Conditional branching' };
      case 'loop':
        return { icon: '🔄', color: '#8b5cf6', description: 'Repeat actions' };
      default:
        return { icon: '📦', color: '#6b7280', description: 'Custom node' };
    }
  };

  const nodeInfo = getNodeTypeInfo(node.type || 'default');

  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <div 
            className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl mr-3"
            style={{ backgroundColor: `${nodeInfo.color}20`, color: nodeInfo.color }}
          >
            {nodeInfo.icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {(node.type || 'default').charAt(0).toUpperCase() + (node.type || 'default').slice(1)}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
              {(node.data as any)?.label || 'No label'}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Node Label
          </label>
          <input
            type="text"
            value={(node.data as any)?.label || ''}
            onChange={(e) => handleLabelChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            placeholder="Enter node label..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Node ID
          </label>
          <input
            type="text"
            value={node.id}
            disabled
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 cursor-not-allowed"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Position
          </label>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">X</label>
              <input
                type="number"
                value={Math.round(node.position.x)}
                disabled
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 cursor-not-allowed"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Y</label>
              <input
                type="number"
                value={Math.round(node.position.y)}
                disabled
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 cursor-not-allowed"
              />
            </div>
          </div>
        </div>

        {(node.type || '') === 'decision' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Decision Logic
            </label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              rows={3}
              placeholder="Describe the decision logic..."
              defaultValue="Check if condition is met"
            />
          </div>
        )}

        {(node.type || '') === 'action' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Action Details
            </label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              rows={3}
              placeholder="Describe the action to be performed..."
              defaultValue="Execute the specified action"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default NodeConfiguration;
