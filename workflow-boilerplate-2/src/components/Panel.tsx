import React, { useState } from 'react';

interface PanelProps {
  side: 'left' | 'right';
  children?: React.ReactNode;
  className?: string;
  isCollapsed?: boolean;
  isClosed?: boolean;
}

const Panel: React.FC<PanelProps> = ({ side, children, className = '', isCollapsed = false, isClosed = false }) => {
  const [isExpanded, setIsExpanded] = useState(!isCollapsed && !isClosed);

  const togglePanel = () => {
    setIsExpanded(!isExpanded);
  };

  // If closed, don't render the panel at all
  if (isClosed && !isExpanded) {
    return null;
  }

  const panelWidth = isExpanded ? 'w-[300px]' : 'w-8';

  const borderClass = 'border border-gray-200 dark:border-dark-grey';
  
  return (
    <div className={`relative bg-white dark:bg-dark-grey-light ${borderClass} transition-all duration-300 ${panelWidth} h-full flex flex-col rounded-lg shadow-lg ${className}`}>
      {/* Panel Header with Arrow */}
      <div className="flex items-center justify-center h-12 border-b border-gray-200 dark:border-dark-grey">
        <button
          onClick={togglePanel}
          className={`w-7 h-7 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-dark-grey transition-colors z-10 rounded ${
            isExpanded 
              ? (side === 'left' ? 'ml-auto mr-2' : 'mr-auto ml-2')
              : 'mx-auto'
          }`}
        >
          {side === 'left' ? (
            <i className="bi bi-layout-text-window-reverse text-lg text-gray-600 dark:text-gray-300"></i>
          ) : (
            <i className="bi bi-layout-text-window text-lg text-gray-600 dark:text-gray-300"></i>
          )}
        </button>
      </div>
      
      {/* Panel Content */}
      <div className={`flex-1 ${isExpanded ? 'p-0' : 'p-0'}`}>
        {isExpanded && children}
      </div>
    </div>
  );
};

export default Panel;
