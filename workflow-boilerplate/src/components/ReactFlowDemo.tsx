'use client';

import React, { useState, useCallback } from 'react';
import ReactFlow, {
  Node,
  Edge,
  addEdge,
  Connection,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  MiniMap,
  Panel,
  NodeTypes,
  ReactFlowInstance,
} from 'reactflow';
import 'reactflow/dist/style.css';

import CustomNode from './CustomNode';
import NodeToolbar from './NodeToolbar';
import Sidebar from './Sidebar';

const nodeTypes: NodeTypes = {
  custom: CustomNode,
};

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'custom',
    position: { x: 250, y: 100 },
    data: { 
      label: 'Start Node',
      description: 'This is the starting point',
      color: '#10b981',
      isEditing: false
    },
  },
  {
    id: '2',
    type: 'custom',
    position: { x: 250, y: 300 },
    data: { 
      label: 'Process Node',
      description: 'This node processes data',
      color: '#3b82f6',
      isEditing: false
    },
  },
  {
    id: '3',
    type: 'custom',
    position: { x: 250, y: 500 },
    data: { 
      label: 'End Node',
      description: 'This is the ending point',
      color: '#ef4444',
      isEditing: false
    },
  },
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3', animated: true },
];

export default function ReactFlowDemo() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance | null>(null);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    setSelectedNode(node);
    console.log('Node clicked:', node);
  }, []);

  const onNodeDoubleClick = useCallback((event: React.MouseEvent, node: Node) => {
    setNodes((nds) =>
      nds.map((n) =>
        n.id === node.id
          ? { ...n, data: { ...n.data, isEditing: true } }
          : n
      )
    );
  }, [setNodes]);

  const updateNodeData = useCallback((nodeId: string, newData: Record<string, unknown>) => {
    setNodes((nds) =>
      nds.map((n) =>
        n.id === nodeId
          ? { ...n, data: { ...n.data, ...newData, isEditing: false } }
          : n
      )
    );
  }, [setNodes]);

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();

      const type = event.dataTransfer.getData('application/reactflow');
      const label = event.dataTransfer.getData('application/reactflow-label');
      const color = event.dataTransfer.getData('application/reactflow-color');

      if (typeof type === 'undefined' || !type) {
        return;
      }

      if (reactFlowInstance) {
        const position = reactFlowInstance.screenToFlowPosition({
          x: event.clientX,
          y: event.clientY,
        });

        const newNode: Node = {
          id: `${type}-${Date.now()}`,
          type: 'custom',
          position,
          data: { 
            label: label || 'New Node',
            description: 'Drag me around!',
            color: color || '#6b7280',
            isEditing: false
          },
        };

        setNodes((nds) => nds.concat(newNode));
      }
    },
    [reactFlowInstance, setNodes]
  );

  const onNodeDelete = useCallback((nodeId: string) => {
    setNodes((nds) => nds.filter((n) => n.id !== nodeId));
    setEdges((eds) => eds.filter((e) => e.source !== nodeId && e.target !== nodeId));
  }, [setNodes, setEdges]);

  return (
    <div className="h-full w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        onNodeDoubleClick={onNodeDoubleClick}
        onInit={setReactFlowInstance}
        onDragOver={onDragOver}
        onDrop={onDrop}
        nodeTypes={nodeTypes}
        fitView
        className="bg-gray-50"
      >
        <Controls />
        <Background />
        <MiniMap />
        <Panel position="top-right" className="bg-white p-4 rounded-lg shadow-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Selected Node</h3>
          {selectedNode ? (
            <div className="text-sm text-gray-600">
              <p><strong>ID:</strong> {selectedNode.id}</p>
              <p><strong>Label:</strong> {selectedNode.data.label}</p>
              <p><strong>Description:</strong> {selectedNode.data.description}</p>
            </div>
          ) : (
            <p className="text-sm text-gray-500">No node selected</p>
          )}
        </Panel>
      </ReactFlow>
      
      <Sidebar />
      
      {selectedNode && (
        <NodeToolbar
          node={selectedNode}
          onUpdate={updateNodeData}
          onDelete={onNodeDelete}
          onClose={() => setSelectedNode(null)}
        />
      )}
    </div>
  );
}
