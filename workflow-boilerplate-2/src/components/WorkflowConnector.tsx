import React from 'react';
import { Connection, WorkflowNodeData } from '../types/workflow';

interface WorkflowConnectorProps {
  connection: Connection;
  nodes: WorkflowNodeData[];
  onDelete: (connectionId: string) => void;
}

export const WorkflowConnector: React.FC<WorkflowConnectorProps> = ({
  connection,
  nodes,
  onDelete
}) => {
  const fromNode = nodes.find(node => node.id === connection.fromNodeId);
  const toNode = nodes.find(node => node.id === connection.toNodeId);

  if (!fromNode || !toNode) {
    return null;
  }

  // Calculate connection path
  const fromX = fromNode.position.x + 120; // Node width + port offset
  const fromY = fromNode.position.y + 40; // Node height / 2
  const toX = toNode.position.x;
  const toY = toNode.position.y + 40;

  // Create smooth bezier curve
  const controlPoint1X = fromX + 50;
  const controlPoint1Y = fromY;
  const controlPoint2X = toX - 50;
  const controlPoint2Y = toY;

  const pathData = `M ${fromX} ${fromY} C ${controlPoint1X} ${controlPoint1Y}, ${controlPoint2X} ${controlPoint2Y}, ${toX} ${toY}`;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete(connection.id);
  };

  return (
    <g>
      {/* Connection line */}
      <path
        d={pathData}
        stroke="#6b7280"
        strokeWidth="2"
        fill="none"
        className="cursor-pointer hover:stroke-blue-500 transition-colors"
        onClick={handleClick}
      />
      
      {/* Arrow head */}
      <polygon
        points={`${toX-8},${toY-4} ${toX},${toY} ${toX-8},${toY+4}`}
        fill="#6b7280"
        className="hover:fill-blue-500 transition-colors"
        onClick={handleClick}
      />
      
      {/* Connection label (optional) */}
      <text
        x={(fromX + toX) / 2}
        y={(fromY + toY) / 2 - 5}
        textAnchor="middle"
        className="text-xs fill-gray-600 dark:fill-gray-400 pointer-events-none"
      >
        {connection.fromPort} → {connection.toPort}
      </text>
    </g>
  );
};
