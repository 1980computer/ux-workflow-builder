import React, { useRef, useState } from 'react';
import Layout from './components/Layout';
import GlobalHeader from './components/GlobalHeader';
import { WorkflowBuilder } from './components/WorkflowBuilder';
import { WorkflowControls } from './components/WorkflowControls';
import NodeConfiguration from './components/NodeConfiguration';
import { AutopilotProvider } from './components/AutopilotContext';
import { ReactFlowProvider, Node } from '@xyflow/react';
import { User, Settings, LogOut } from 'lucide-react';
import './index.css';

function App() {
  const workflowBuilderRef = useRef<any>(null);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);

  // Workflow control handlers
  const handleAddNode = (type: string) => {
    if (workflowBuilderRef.current) {
      workflowBuilderRef.current.addNode(type);
    }
  };

  const handleDeleteSelected = () => {
    if (workflowBuilderRef.current) {
      workflowBuilderRef.current.deleteSelectedNodes();
    }
  };

  const handleDuplicateSelected = () => {
    if (workflowBuilderRef.current) {
      workflowBuilderRef.current.duplicateSelectedNodes();
    }
  };

  const handleResetWorkflow = () => {
    if (workflowBuilderRef.current) {
      workflowBuilderRef.current.resetWorkflow();
    }
  };

  const handleNodeSelect = (node: Node | null) => {
    setSelectedNode(node);
  };

  const handleUpdateNode = (nodeId: string, updates: Partial<Node>) => {
    // This would typically update the node in the workflow
    // For now, we'll just log the update
    console.log('Updating node:', nodeId, updates);
  };

  // Right panel content - Node Configuration
  const rightPanelContent = (
    <NodeConfiguration 
      node={selectedNode} 
      onUpdateNode={handleUpdateNode} 
    />
  );

  // Custom header configuration
  const headerConfig = {
    branding: {
      logo: '',
      title: 'Workflow',
      logoSize: { width: 0, height: 0 }
    },
    actions: [
      { icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiBjbGFzcz0iYmkgaWstYmVsbC1maWxsIiB2aWV3Qm94PSIwIDAgMTYgMTYiPgogIDxwYXRoIGQ9Ik04IDE2YTIgMiAwIDAgMCAyLTJINmEyIDIgMCAwIDAgMiAyem0uOTk1LTE0LjkwMWExIDEgMCAxIDAtMS45OSAwQTUgNSAwIDAgMCAzIDZjMCAxLjA5OC0uNSA2LTIgN2gxNGMtMS41LTEtMi01LjkwMi0yLTcgMC0yLjQyLTEuNzItNC40NC00LjAwNS00LjkwMSIvPgo8L3N2Zz4=', alt: 'Notification' }
    ],
    tenant: undefined,
    user: {
      avatar: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiBjbGFzcz0iYmkgaWstcGVyc29uLWNpcmNsZSIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTEgNmEzIDMgMCAxIDEtNiAwIDMgMyAwIDAgMSA2IDB6Ii8+CiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMCA4YTggOCAwIDEgMSAxNiAwQTggOCAwIDAgMSAwIDhtOC03YTcgNyAwIDAgMC01LjQ2OCAxMS4zN0MzLjI0MiAxMS4yMjYgNC44MDUgMTAgOCAxMHM0Ljc1NyAxLjIyNSA1LjQ2OCAyLjM3QTcgNyAwIDAgMCA4IDF6Ii8+Cjwvc3ZnPg==',
      menuItems: [
        { icon: <User className="mr-2 h-4 w-4" />, label: 'Profile', onClick: () => {} },
        { icon: <Settings className="mr-2 h-4 w-4" />, label: 'Settings', onClick: () => {} },
        { icon: <LogOut className="mr-2 h-4 w-4" />, label: 'Logout', onClick: () => {} }
      ]
    },
    showThemeToggle: true
  };

  return (
    <AutopilotProvider>
      <div className="App">
        <Layout
          header={<GlobalHeader {...headerConfig} />}
          leftPanel={{
            content: (
              <WorkflowControls
                onAddNode={handleAddNode}
                onDeleteSelected={handleDeleteSelected}
                onDuplicateSelected={handleDuplicateSelected}
                onResetWorkflow={handleResetWorkflow}
              />
            ),
            show: true
          }}
          rightPanel={{
            content: rightPanelContent,
            show: true
          }}
          canvas={{
            padding: 'none',
            background: 'default'
          }}
        >
          <ReactFlowProvider>
            <WorkflowBuilder
              ref={workflowBuilderRef}
              onAddNode={handleAddNode}
              onDeleteSelected={handleDeleteSelected}
              onDuplicateSelected={handleDuplicateSelected}
              onResetWorkflow={handleResetWorkflow}
              onNodeSelect={handleNodeSelect}
            />
          </ReactFlowProvider>
        </Layout>
      </div>
    </AutopilotProvider>
  );
}

export default App;
