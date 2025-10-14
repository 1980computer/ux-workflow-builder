import React from 'react';
import { X } from 'lucide-react';

interface AutopilotPanelProps {
  onClose?: () => void;
  className?: string;
}

const AutopilotPanel: React.FC<AutopilotPanelProps> = ({ 
  onClose,
  className = '' 
}) => {
  return (
    <div className={`w-[440px] h-full bg-white dark:bg-dark-grey-light border-l border-gray-200 dark:border-dark-grey flex flex-col ${className}`}>
      {/* Header with Title and Close Button */}
      <div className="flex items-center justify-between p-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Autopilot
        </h2>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 dark:hover:bg-dark-grey rounded transition-colors flex items-center justify-center"
        >
          <X className="h-5 w-5 text-gray-700 dark:text-gray-200" />
        </button>
      </div>
      
      {/* Content Area */}
      <div className="flex-1 p-6">
        {/* Content can be added here */}
      </div>
    </div>
  );
};

export default AutopilotPanel;
