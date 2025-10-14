import React from 'react';
import { Button } from './ui/button';

interface WorkflowControlsProps {
  onAddNode: (type: string) => void;
  onDeleteSelected: () => void;
  onDuplicateSelected: () => void;
  onResetWorkflow: () => void;
}

export const WorkflowControls: React.FC<WorkflowControlsProps> = ({
  onAddNode,
  onDeleteSelected,
  onDuplicateSelected,
  onResetWorkflow
}) => {
  return (
    <div className="space-y-6 pt-2">
      {/* Add Nodes Section */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white px-6" style={{ fontSize: '15px' }}>
          ADD NODES
        </h3>
        <div className="space-y-1">
          <Button
            onClick={() => onAddNode('start')}
            variant="ghost"
            className="w-full justify-start h-10 text-sm font-normal hover:bg-gray-100 dark:hover:bg-dark-grey px-6"
            style={{ height: '40px', fontSize: '14px' }}
          >
            Start Node
          </Button>
          <Button
            onClick={() => onAddNode('action')}
            variant="ghost"
            className="w-full justify-start h-10 text-sm font-normal hover:bg-gray-100 dark:hover:bg-dark-grey px-6"
            style={{ height: '40px', fontSize: '14px' }}
          >
            Action Node
          </Button>
          <Button
            onClick={() => onAddNode('decision')}
            variant="ghost"
            className="w-full justify-start h-10 text-sm font-normal hover:bg-gray-100 dark:hover:bg-dark-grey px-6"
            style={{ height: '40px', fontSize: '14px' }}
          >
            Decision Node
          </Button>
          <Button
            onClick={() => onAddNode('loop')}
            variant="ghost"
            className="w-full justify-start h-10 text-sm font-normal hover:bg-gray-100 dark:hover:bg-dark-grey px-6"
            style={{ height: '40px', fontSize: '14px' }}
          >
            Loop Node
          </Button>
          <Button
            onClick={() => onAddNode('end')}
            variant="ghost"
            className="w-full justify-start h-10 text-sm font-normal hover:bg-gray-100 dark:hover:bg-dark-grey px-6"
            style={{ height: '40px', fontSize: '14px' }}
          >
            End Node
          </Button>
        </div>
      </div>

      {/* Actions Section */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white px-6" style={{ fontSize: '15px' }}>
          ACTIONS
        </h3>
        <div className="space-y-1">
          <Button
            onClick={onDeleteSelected}
            variant="ghost"
            className="w-full justify-start h-10 text-sm font-normal hover:bg-gray-100 dark:hover:bg-dark-grey px-6"
            style={{ height: '40px', fontSize: '14px' }}
          >
            Delete Selected
          </Button>
          <Button
            onClick={onDuplicateSelected}
            variant="ghost"
            className="w-full justify-start h-10 text-sm font-normal hover:bg-gray-100 dark:hover:bg-dark-grey px-6"
            style={{ height: '40px', fontSize: '14px' }}
          >
            Duplicate Selected
          </Button>
          <Button
            onClick={onResetWorkflow}
            variant="ghost"
            className="w-full justify-start h-10 text-sm font-normal hover:bg-gray-100 dark:hover:bg-dark-grey px-6"
            style={{ height: '40px', fontSize: '14px' }}
          >
            Reset Workflow
          </Button>
        </div>
      </div>
    </div>
  );
};
