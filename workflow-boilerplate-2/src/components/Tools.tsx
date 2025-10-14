import React from 'react';
import { Button } from './ui/button';

interface ToolItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
  disabled?: boolean;
}

interface ToolSection {
  title?: string;
  items: ToolItem[];
}

interface ToolsProps {
  sections: ToolSection[];
  className?: string;
  sectionClassName?: string;
  itemClassName?: string;
  spacing?: 'none' | 'sm' | 'md';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const Tools: React.FC<ToolsProps> = ({
  sections,
  className = '',
  sectionClassName = '',
  itemClassName = '',
  spacing = 'md',
  padding = 'md'
}) => {
  const spacingClasses = {
    none: '',
    sm: 'space-y-2',
    md: 'space-y-4'
  };

  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  return (
    <div className={`${spacingClasses[spacing]} ${paddingClasses[padding]} ${className}`}>
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className={sectionClassName}>
          {section.title && (
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              {section.title}
            </h3>
          )}
          <div className="space-y-2">
            {section.items.map((item) => (
              <Button
                key={item.id}
                variant={item.active ? 'default' : 'ghost'}
                className={`
                  w-full justify-start
                  ${item.disabled ? 'opacity-50 cursor-not-allowed' : ''}
                  ${itemClassName}
                `}
                onClick={item.onClick}
                disabled={item.disabled}
              >
                {item.icon && <span className="mr-2">{item.icon}</span>}
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tools;
