import React from 'react';
import GlobalHeader from './GlobalHeader';
import Panel from './Panel';
import Canvas from './Canvas';
import AutopilotPanel from './AutopilotPanel';
import { useAutopilot } from './AutopilotContext';

interface LayoutProps {
  children?: React.ReactNode;
  header?: React.ReactNode;
  leftPanel?: {
    content: React.ReactNode;
    show?: boolean;
  };
  rightPanel?: {
    content: React.ReactNode;
    show?: boolean;
  };
  canvas?: {
    padding?: 'none' | 'sm' | 'md' | 'lg';
    background?: 'default' | 'white' | 'transparent';
  };
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children,
  header,
  leftPanel = { content: null, show: true },
  rightPanel = { content: null, show: true },
  canvas = { padding: 'md', background: 'default' },
  className = ''
}) => {
  const { isOpen: isAutopilotPanelOpen, closeAutopilot } = useAutopilot()
  return (
    <div className={`h-screen flex flex-col bg-gray-50 dark:bg-dark-grey ${className}`}>
      {/* Global Header */}
      {header || <GlobalHeader />}
      
      {/* Main Content Area */}
      <div className="flex-1 flex p-3">
        {/* Left Panel - Always collapsed by default */}
        {leftPanel.show && (
          <div className="ml-0">
            <Panel side="left" isCollapsed={true} className="block">
              {leftPanel.content}
            </Panel>
          </div>
        )}

        {/* Canvas - Main Workspace */}
        <Canvas padding={canvas.padding} background={canvas.background}>
          {children}
        </Canvas>

        {/* Right Panel - Always collapsed by default */}
        {rightPanel.show && (
          <div className="mr-0">
            <Panel side="right" isCollapsed={true} className="block">
              {rightPanel.content}
            </Panel>
          </div>
        )}

            {/* Autopilot Panel - Conditionally Visible */}
            {isAutopilotPanelOpen && (
              <AutopilotPanel onClose={closeAutopilot} />
            )}
      </div>
      
    </div>
  );
};

export default Layout;
