import React, { useEffect, useState, useRef } from 'react';

interface GridItemProps {
  children: React.ReactNode;
  cols?: number;
  className?: string;
  background?: 'default' | 'white' | 'transparent';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  border?: boolean;
  canvasResponsive?: boolean;
}

interface GridProps {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4 | 6 | 12;
  gap?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
}

export const GridItem: React.FC<GridItemProps> = ({
  children,
  cols = 12,
  className = '',
  background = 'white',
  padding = 'md',
  border = true,
  canvasResponsive = false
}) => {
  const backgroundClasses = {
    default: 'bg-gray-50 dark:bg-dark-grey',
    white: 'bg-white dark:bg-dark-grey-light',
    transparent: 'bg-transparent'
  };

  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const borderClasses = border 
    ? 'border border-gray-200 dark:border-dark-grey rounded-lg' 
    : '';

  const colSpanClasses = {
    1: 'col-span-1',
    2: 'col-span-2', 
    3: 'col-span-3',
    4: 'col-span-4',
    6: 'col-span-6',
    12: 'col-span-12'
  };

  // Canvas-responsive logic
  const [canvasWidth, setCanvasWidth] = useState(0);
  const gridItemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasResponsive) return;

    const updateCanvasWidth = () => {
      if (gridItemRef.current) {
        const canvas = gridItemRef.current.closest('[data-canvas]') as HTMLElement;
        if (canvas) {
          setCanvasWidth(canvas.offsetWidth);
        }
      }
    };

    updateCanvasWidth();
    window.addEventListener('resize', updateCanvasWidth);
    
    const resizeObserver = new ResizeObserver(updateCanvasWidth);
    if (gridItemRef.current) {
      const canvas = gridItemRef.current.closest('[data-canvas]') as HTMLElement;
      if (canvas) {
        resizeObserver.observe(canvas);
      }
    }

    return () => {
      window.removeEventListener('resize', updateCanvasWidth);
      resizeObserver.disconnect();
    };
  }, [canvasResponsive]);

  // Get responsive classes based on canvas width
  const getCanvasResponsiveClasses = () => {
    if (!canvasResponsive) return '';
    
    if (canvasWidth < 768) {
      return 'col-span-12'; // 1 column on small canvas
    } else if (canvasWidth < 1024) {
      return 'col-span-6'; // 2 columns on medium canvas
    } else {
      return 'col-span-3'; // 4 columns on large canvas
    }
  };

  // Check if responsive classes are provided in className
  const hasResponsiveClasses = className.includes('col-span-');
  
  return (
    <div 
      ref={gridItemRef}
      className={`
        ${hasResponsiveClasses ? '' : (canvasResponsive ? getCanvasResponsiveClasses() : (colSpanClasses[cols as keyof typeof colSpanClasses] || 'col-span-12'))} 
        ${backgroundClasses[background]} 
        ${paddingClasses[padding]} 
        ${borderClasses} 
        ${className}
      `}
    >
      {children}
    </div>
  );
};

const Grid: React.FC<GridProps> = ({
  children,
  cols = 12,
  gap = 'md',
  className = ''
}) => {
  const gapClasses = {
    none: '',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6'
  };

  const gridColsClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3', 
    4: 'grid-cols-4',
    6: 'grid-cols-6',
    12: 'grid-cols-12'
  };

  return (
    <div className={`grid ${gridColsClasses[cols as keyof typeof gridColsClasses] || 'grid-cols-12'} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  );
};

export default Grid;
