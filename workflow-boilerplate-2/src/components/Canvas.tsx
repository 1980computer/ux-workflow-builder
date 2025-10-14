import React from 'react';

interface CanvasProps {
  children?: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  background?: 'default' | 'white' | 'transparent';
}

const Canvas: React.FC<CanvasProps> = ({
  children,
  className = '',
  padding = 'md',
  background = 'default'
}) => {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const backgroundClasses = {
    default: 'bg-gray-50 dark:bg-dark-grey',
    white: 'bg-white dark:bg-dark-grey-light',
    transparent: 'bg-transparent'
  };

  return (
    <div className={`flex-1 flex flex-col ${backgroundClasses[background]} ${className}`} data-canvas>
      <div className={`flex-1 ${paddingClasses[padding]}`}>
        {children}
      </div>
    </div>
  );
};

export default Canvas;
