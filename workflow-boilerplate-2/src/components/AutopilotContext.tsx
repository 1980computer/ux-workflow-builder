import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AutopilotContextType {
  isOpen: boolean;
  openAutopilot: () => void;
  closeAutopilot: () => void;
}

const AutopilotContext = createContext<AutopilotContextType | undefined>(undefined);

export const AutopilotProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openAutopilot = () => {
    setIsOpen(true);
  };

  const closeAutopilot = () => {
    setIsOpen(false);
  };

  return (
    <AutopilotContext.Provider value={{ isOpen, openAutopilot, closeAutopilot }}>
      {children}
    </AutopilotContext.Provider>
  );
};

export const useAutopilot = () => {
  const context = useContext(AutopilotContext);
  if (context === undefined) {
    throw new Error('useAutopilot must be used within an AutopilotProvider');
  }
  return context;
};
