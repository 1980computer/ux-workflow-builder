import React from 'react';
import { Button } from './ui/button';

interface NavigationItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
  disabled?: boolean;
}

interface NavigationProps {
  items: NavigationItem[];
  className?: string;
  itemClassName?: string;
  spacing?: 'none' | 'sm' | 'md';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const Navigation: React.FC<NavigationProps> = ({
  items,
  className = '',
  itemClassName = '',
  spacing = 'sm',
  padding = 'md'
}) => {
  const spacingClasses = {
    none: '',
    sm: 'space-y-1',
    md: 'space-y-2'
  };

  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  return (
    <nav className={`${spacingClasses[spacing]} ${paddingClasses[padding]} pt-2 ${className}`}>
      {items.map((item) => (
        <Button
          key={item.id}
          variant={item.active ? 'default' : 'ghost'}
          className={`
            w-full justify-start h-10 text-sm font-normal 
            hover:bg-gray-100 dark:hover:bg-dark-grey
            ${item.disabled ? 'opacity-50 cursor-not-allowed' : ''}
            ${itemClassName}
          `}
          style={{ height: '40px', fontSize: '14px' }}
          onClick={item.onClick}
          disabled={item.disabled}
        >
          {item.icon && <span className="mr-2">{item.icon}</span>}
          {item.label}
        </Button>
      ))}
    </nav>
  );
};

export default Navigation;
