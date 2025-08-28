'use client';

import React from 'react';
import { BaseEdge, EdgeLabelRenderer, getBezierPath, Position } from '@xyflow/react';

interface StatusEdgeData {
  status?: 'pending' | 'running' | 'completed' | 'error';
  label?: string;
}

interface StatusEdgeProps {
  id: string;
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
  sourcePosition?: Position;
  targetPosition?: Position;
  data?: StatusEdgeData;
  selected?: boolean;
}

export function StatusEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  data,
  selected,
}: StatusEdgeProps) {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const getEdgeColor = () => {
    switch (data?.status) {
      case 'running':
        return '#3b82f6';
      case 'completed':
        return '#10b981';
      case 'error':
        return '#ef4444';
      case 'pending':
      default:
        return '#6b7280';
    }
  };

  const getEdgeWidth = () => {
    return selected ? 3 : 2;
  };

  return (
    <>
      <BaseEdge
        id={id}
        path={edgePath}
        style={{
          stroke: getEdgeColor(),
          strokeWidth: getEdgeWidth(),
          transition: 'stroke 0.3s ease, stroke-width 0.3s ease',
        }}
      />
      {data?.label && (
        <EdgeLabelRenderer>
          <div
            style={{
              position: 'absolute',
              transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
              fontSize: 12,
              fontWeight: 500,
              pointerEvents: 'all',
              backgroundColor: 'white',
              padding: '2px 6px',
              borderRadius: 4,
              border: `1px solid ${getEdgeColor()}`,
              color: getEdgeColor(),
            }}
            className="nodrag nopan"
          >
            {data.label}
          </div>
        </EdgeLabelRenderer>
      )}
    </>
  );
}
