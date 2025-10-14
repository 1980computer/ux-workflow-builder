import React, { useCallback, forwardRef, useImperativeHandle, useState } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Node,
  NodeTypes,
  EdgeTypes,
  BackgroundVariant,
  NodeResizer,
  Handle,
  Position,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

// Custom Node Types
const StartNode = ({ data, selected }: { data: any; selected: boolean }) => (
  <div className={`px-4 py-2 shadow-md rounded-md bg-white dark:bg-dark-grey-light border border-gray-200 dark:border-dark-grey ${selected ? 'ring-2 ring-blue-500' : ''}`}>
    <Handle type="source" position={Position.Right} id="right" />
    <div className="flex">
      <div className="rounded-full w-3 h-3 bg-green-500 mt-1 mr-2"></div>
      <div>
        <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">Start</div>
        <div className="text-lg font-bold text-gray-900 dark:text-white">{data.label}</div>
      </div>
    </div>
    <NodeResizer color="#ff0071" isVisible={selected} minWidth={100} minHeight={30} />
  </div>
);

const EndNode = ({ data, selected }: { data: any; selected: boolean }) => (
  <div className={`px-4 py-2 shadow-md rounded-md bg-white dark:bg-dark-grey-light border border-gray-200 dark:border-dark-grey ${selected ? 'ring-2 ring-blue-500' : ''}`}>
    <Handle type="target" position={Position.Left} id="left" />
    <div className="flex">
      <div className="rounded-full w-3 h-3 bg-red-500 mt-1 mr-2"></div>
      <div>
        <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">End</div>
        <div className="text-lg font-bold text-gray-900 dark:text-white">{data.label}</div>
      </div>
    </div>
    <NodeResizer color="#ff0071" isVisible={selected} minWidth={100} minHeight={30} />
  </div>
);

const ActionNode = ({ data, selected }: { data: any; selected: boolean }) => (
  <div className={`px-4 py-2 shadow-md rounded-md bg-white dark:bg-dark-grey-light border border-gray-200 dark:border-dark-grey ${selected ? 'ring-2 ring-blue-500' : ''}`}>
    <Handle type="target" position={Position.Left} id="left" />
    <Handle type="source" position={Position.Right} id="right" />
    <div className="flex">
      <div className="rounded-full w-3 h-3 bg-blue-500 mt-1 mr-2"></div>
      <div>
        <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">Action</div>
        <div className="text-lg font-bold text-gray-900 dark:text-white">{data.label}</div>
      </div>
    </div>
    <NodeResizer color="#ff0071" isVisible={selected} minWidth={100} minHeight={30} />
  </div>
);

const DecisionNode = ({ data, selected }: { data: any; selected: boolean }) => (
  <div className={`px-4 py-2 shadow-md rounded-md bg-white dark:bg-dark-grey-light border border-gray-200 dark:border-dark-grey ${selected ? 'ring-2 ring-blue-500' : ''}`}>
    <Handle type="target" position={Position.Left} id="left" />
    <Handle type="source" position={Position.Right} id="right" />
    <Handle type="source" position={Position.Bottom} id="bottom" />
    <div className="flex">
      <div className="rounded-full w-3 h-3 bg-yellow-500 mt-1 mr-2"></div>
      <div>
        <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">Decision</div>
        <div className="text-lg font-bold text-gray-900 dark:text-white">{data.label}</div>
      </div>
    </div>
    <NodeResizer color="#ff0071" isVisible={selected} minWidth={100} minHeight={30} />
  </div>
);

const LoopNode = ({ data, selected }: { data: any; selected: boolean }) => (
  <div className={`px-4 py-2 shadow-md rounded-md bg-white dark:bg-dark-grey-light border border-gray-200 dark:border-dark-grey ${selected ? 'ring-2 ring-blue-500' : ''}`}>
    <Handle type="target" position={Position.Left} id="left" />
    <Handle type="source" position={Position.Right} id="right" />
    <div className="flex">
      <div className="rounded-full w-3 h-3 bg-purple-500 mt-1 mr-2"></div>
      <div>
        <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">Loop</div>
        <div className="text-lg font-bold text-gray-900 dark:text-white">{data.label}</div>
      </div>
    </div>
    <NodeResizer color="#ff0071" isVisible={selected} minWidth={100} minHeight={30} />
  </div>
);

const nodeTypes: NodeTypes = {
  start: StartNode,
  end: EndNode,
  action: ActionNode,
  decision: DecisionNode,
  loop: LoopNode,
};

const edgeTypes: EdgeTypes = {};

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'start',
    position: { x: 100, y: 250 },
    data: { label: 'Customer places order' },
  },
  {
    id: '2',
    type: 'action',
    position: { x: 400, y: 250 },
    data: { label: 'Check inventory' },
  },
  {
    id: '3',
    type: 'decision',
    position: { x: 700, y: 250 },
    data: { label: 'In stock?' },
  },
  {
    id: '4',
    type: 'action',
    position: { x: 1000, y: 150 },
    data: { label: 'Process & ship' },
  },
  {
    id: '5',
    type: 'action',
    position: { x: 1000, y: 350 },
    data: { label: 'Notify out of stock' },
  },
  {
    id: '6',
    type: 'end',
    position: { x: 1300, y: 250 },
    data: { label: 'Complete' },
  },
];

const initialEdges: Edge[] = [
  {
    id: 'e1-2',
    source: '1',
    sourceHandle: 'right',
    target: '2',
    targetHandle: 'left',
    type: 'default',
    style: { stroke: '#e5e7eb', strokeWidth: 2 },
  },
  {
    id: 'e2-3',
    source: '2',
    sourceHandle: 'right',
    target: '3',
    targetHandle: 'left',
    type: 'default',
    style: { stroke: '#e5e7eb', strokeWidth: 2 },
  },
  {
    id: 'e3-4',
    source: '3',
    sourceHandle: 'right',
    target: '4',
    targetHandle: 'left',
    type: 'default',
    label: 'Yes',
    style: { stroke: '#10b981', strokeWidth: 2 },
  },
  {
    id: 'e3-5',
    source: '3',
    sourceHandle: 'bottom',
    target: '5',
    targetHandle: 'top',
    type: 'default',
    label: 'No',
    style: { stroke: '#ef4444', strokeWidth: 2 },
  },
  {
    id: 'e4-6',
    source: '4',
    sourceHandle: 'right',
    target: '6',
    targetHandle: 'left',
    type: 'default',
    style: { stroke: '#10b981', strokeWidth: 2 },
  },
  {
    id: 'e5-6',
    source: '5',
    sourceHandle: 'right',
    target: '6',
    targetHandle: 'left',
    type: 'default',
    style: { stroke: '#e5e7eb', strokeWidth: 2 },
  },
];

interface WorkflowBuilderProps {
  onAddNode?: (type: string) => void;
  onDeleteSelected?: () => void;
  onDuplicateSelected?: () => void;
  onResetWorkflow?: () => void;
  onNodeSelect?: (node: Node | null) => void;
}

export const WorkflowBuilder = forwardRef<any, WorkflowBuilderProps>(({
  onAddNode: _onAddNode,
  onDeleteSelected: _onDeleteSelected,
  onDuplicateSelected: _onDuplicateSelected,
  onResetWorkflow: _onResetWorkflow,
  onNodeSelect
}, ref) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_selectedNode, setSelectedNode] = useState<Node | null>(null);

  // Debug: Log edges to console
  console.log('Edges:', edges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    event.stopPropagation();
    setSelectedNode(node);
    onNodeSelect?.(node);
  }, [onNodeSelect]);

  const onPaneClick = useCallback(() => {
    setSelectedNode(null);
    onNodeSelect?.(null);
  }, [onNodeSelect]);

  const addNode = useCallback(
    (type: string) => {
      const newNode: Node = {
        id: `${nodes.length + 1}`,
        type,
        position: { x: Math.random() * 500, y: Math.random() * 500 },
        data: { label: `${type.charAt(0).toUpperCase() + type.slice(1)} Node` },
      };
      setNodes((nds) => [...nds, newNode]);
    },
    [nodes.length, setNodes]
  );

  const deleteSelectedNodes = useCallback(() => {
    setNodes((nds) => nds.filter((node) => !node.selected));
    setEdges((eds) => eds.filter((edge) => !edge.selected));
  }, [setNodes, setEdges]);

  const duplicateSelectedNodes = useCallback(() => {
    const selectedNodes = nodes.filter((node) => node.selected);
    const newNodes = selectedNodes.map((node) => ({
      ...node,
      id: `${Date.now()}-${Math.random()}`,
      position: { x: node.position.x + 50, y: node.position.y + 50 },
      selected: false,
    }));
    setNodes((nds) => [...nds, ...newNodes]);
  }, [nodes, setNodes]);

  const resetWorkflow = useCallback(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [setNodes, setEdges]);

  // Expose methods to parent component
  useImperativeHandle(ref, () => ({
    addNode,
    deleteSelectedNodes,
    duplicateSelectedNodes,
    resetWorkflow
  }));

  return (
    <div className="w-full h-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        onPaneClick={onPaneClick}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        attributionPosition="bottom-left"
      >
        <Controls 
          className="react-flow__controls dark:bg-dark-grey-light dark:border-dark-grey"
          style={{
            backgroundColor: 'var(--controls-bg, white)',
            border: '1px solid var(--controls-border, #e5e7eb)',
          }}
        />
        <MiniMap
          className="react-flow__minimap dark:bg-dark-grey-light dark:border-dark-grey"
          style={{
            backgroundColor: 'var(--minimap-bg, white)',
            border: '1px solid var(--minimap-border, #e5e7eb)',
          }}
          nodeStrokeColor={(n) => {
            if (n.type === 'start') return '#10b981';
            if (n.type === 'end') return '#ef4444';
            if (n.type === 'decision') return '#f59e0b';
            if (n.type === 'loop') return '#8b5cf6';
            return '#3b82f6';
          }}
          nodeColor={(n) => {
            if (n.type === 'start') return '#10b981';
            if (n.type === 'end') return '#ef4444';
            if (n.type === 'decision') return '#f59e0b';
            if (n.type === 'loop') return '#8b5cf6';
            return '#3b82f6';
          }}
          nodeBorderRadius={2}
          maskColor="rgba(0, 0, 0, 0.1)"
        />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />

      </ReactFlow>
    </div>
  );
});
