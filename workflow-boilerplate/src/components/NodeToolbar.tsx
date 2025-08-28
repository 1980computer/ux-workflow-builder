'use client';

import React, { useState } from 'react';
import { Node } from 'reactflow';

interface NodeToolbarProps {
  node: Node;
  onUpdate: (nodeId: string, newData: any) => void;
  onDelete: (nodeId: string) => void;
  onClose: () => void;
}

export default function NodeToolbar({ node, onUpdate, onDelete, onClose }: NodeToolbarProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    label: node.data.label,
    description: node.data.description,
    color: node.data.color
  });

  const handleSave = () => {
    onUpdate(node.id, editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({
      label: node.data.label,
      description: node.data.description,
      color: node.data.color
    });
    setIsEditing(false);
  };

  const handleNavigate = () => {
    console.log('Navigating to node:', node.id);
    alert(`Navigating to node: ${node.id}`);
  };

  const colorOptions = [
    { name: 'Green', value: '#10b981', icon: '🟢' },
    { name: 'Blue', value: '#3b82f6', icon: '🔵' },
    { name: 'Red', value: '#ef4444', icon: '🔴' },
    { name: 'Yellow', value: '#f59e0b', icon: '🟡' },
    { name: 'Purple', value: '#8b5cf6', icon: '🟣' },
    { name: 'Gray', value: '#6b7280', icon: '⚫' },
  ];

  return (
    <div className="absolute right-4 top-4 w-80 bg-white rounded-xl shadow-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Node Editor</h3>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1 rounded-lg hover:bg-gray-100"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {isEditing ? (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Label
            </label>
            <input
              type="text"
              value={editData.label}
              onChange={(e) => setEditData({ ...editData, label: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter node label..."
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Description
            </label>
            <textarea
              value={editData.description}
              onChange={(e) => setEditData({ ...editData, description: e.target.value })}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
              placeholder="Enter description..."
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Color Theme
            </label>
            <div className="grid grid-cols-3 gap-3">
              {colorOptions.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setEditData({ ...editData, color: color.value })}
                  className={`color-option p-3 rounded-lg flex flex-col items-center space-y-1 transition-all duration-200 ${
                    editData.color === color.value
                      ? 'ring-2 ring-blue-500 ring-offset-2'
                      : 'hover:ring-2 hover:ring-gray-300'
                  }`}
                  style={{ backgroundColor: `${color.value}15` }}
                  title={color.name}
                >
                  <span className="text-lg">{color.icon}</span>
                  <span className="text-xs font-medium text-gray-700">{color.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex space-x-3 pt-4">
            <button
              onClick={handleSave}
              className="toolbar-button flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-semibold"
            >
              💾 Save Changes
            </button>
            <button
              onClick={handleCancel}
              className="toolbar-button flex-1 px-4 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all duration-200 font-semibold"
            >
              ❌ Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
              <span className="mr-2">📋</span>
              Current Node
            </h4>
            <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200">
              <div className="flex items-center space-x-3 mb-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ backgroundColor: node.data.color }}
                >
                  {node.data.label.charAt(0).toUpperCase()}
                </div>
                <div>
                  <span className="font-semibold text-gray-900">{node.data.label}</span>
                  <div className="text-xs text-gray-500">ID: {node.id}</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 bg-white px-3 py-2 rounded-lg border border-gray-200">
                {node.data.description}
              </p>
            </div>
          </div>

          <div className="flex space-x-3">
            <button
              onClick={() => setIsEditing(true)}
              className="toolbar-button flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-semibold"
            >
              ✏️ Edit Node
            </button>
            <button
              onClick={handleNavigate}
              className="toolbar-button flex-1 px-4 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 font-semibold"
            >
              🚀 Navigate
            </button>
          </div>

          <button
            onClick={() => onDelete(node.id)}
            className="toolbar-button w-full px-4 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-200 font-semibold"
          >
            🗑️ Delete Node
          </button>
        </div>
      )}
    </div>
  );
}
