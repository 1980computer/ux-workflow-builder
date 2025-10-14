# Workflow Canvas - Workflow Builder

A modern React template using shadcn/ui components with a professional 3-panel layout system and integrated React Flow workflow builder.

## ✨ Features

- **Global Header**: 48px height, dark background in dark mode, "Workflow" branding
- **Left Panel**: Workflow controls with node creation and actions (300px expanded, 32px collapsed) - Always visible on all screen sizes
- **Right Panel**: Expandable/collapsible tools (300px expanded, 32px collapsed) - Always visible on all screen sizes
- **Canvas**: Full-screen React Flow workflow builder with interactive node-based editor
- **Workflow Builder**: Complete React Flow integration with drag-and-drop, node creation, connections, and editing
- **Node Types**: Start, End, Action, Decision, and Loop nodes with distinct visual styling
- **Workflow Controls**: Left panel contains "ADD NODES" and "ACTIONS" sections with workflow management tools
- **Dark Mode**: Default dark theme with toggle to light mode available in user menu
- **Responsive Design**: 
  - **Panels**: Auto-collapse when browser < 1024px (lg breakpoint) - Always visible but collapsed
  - **Canvas**: Full-screen workflow builder with React Flow controls
- **Reusable Components**: Modular architecture with GlobalHeader, Panel, Canvas, WorkflowBuilder, and WorkflowControls components

## 🛠 Tech Stack

- **React 18** with TypeScript
- **React Flow** (@xyflow/react) for workflow builder functionality
- **shadcn/ui** components (Button, Card, Input, Separator, Select, DropdownMenu, Popover, Sheet)
- **Tailwind CSS** with standard 12-column responsive grid
- **Lucide React** icons
- **Local Storage** for theme persistence

## 📐 Layout Specifications

### Global Header
- 100% width, 48px height
- White background, #E5E7EB bottom border
- "Workflow" title (17px font, no icon)
- Action icons: notification bell (20x20px, white in dark mode)
- User avatar with person-circle icon (20x20px, white in dark mode)
- No tenant selector
- Dark mode toggle in user menu
- Popovers for Help and Notification icons (titles only for demo)
- **Sheet Menu**: Waffle icon opens 300px wide sheet from left with navigation buttons
- **Search Experience**: Search icon opens 300px max width, 34px high search input aligned with the icon. Only search input and close button are visible when open.
- **Autopilot Panel**: Autopilot icon opens a 440px wide panel from the right. Global header remains fixed, content area shifts left by 440px. Panel has white background, 1px border, and an 'X' close button in the top-right. **Hidden by default** - only appears when autopilot icon is clicked.

### Panels (Left & Right)
- **Expanded**: 300px width
- **Collapsed**: 32px width
- **Visibility**: Always visible on all screen sizes (desktop, tablet, mobile)
- **User Control**: Users can manually collapse/expand panels using floating arrow buttons
- White background, #E5E7EB border (right border for left panel, left border for right panel)
- 28px × 28px floating toggle arrows
- Smooth 300ms transitions
- **Full Vertical Height**: Panels use entire vertical space with flexbox layout
- **Left Panel**: Workflow controls with 8px top padding (pt-2) for "ADD NODES" and "ACTIONS" sections
- **Right Panel**: 24px content padding (p-6)

### Canvas
- **Full-screen React Flow workflow builder** with interactive node-based editor
- **React Flow Integration**: Complete workflow builder with drag-and-drop functionality
- **Node Creation**: Add Start, End, Action, Decision, and Loop nodes via left panel controls
- **Node Connections**: Visual edges connecting workflow nodes with proper handles
- **Workflow Management**: Delete, duplicate, and reset workflow functionality
- **Zoom Controls**: Built-in React Flow zoom, pan, and fit-to-view controls
- **MiniMap**: Overview of entire workflow in bottom-right corner
- **Background Grid**: Dotted background pattern for visual alignment
- **Node Styling**: White backgrounds with colored type indicators and consistent borders

## 🔧 Workflow Builder Specifications

### Node Types
- **Start Node**: Green circle indicator, source handle on right, triggers workflow
- **End Node**: Red circle indicator, target handle on left, workflow termination
- **Action Node**: Blue circle indicator, handles on left/right, process execution
- **Decision Node**: Yellow circle indicator, handles on left/right/bottom, conditional logic
- **Loop Node**: Purple circle indicator, handles on left/right, iterative processes

### Node Styling
- **Background**: White (`bg-white`) for all node types
- **Borders**: Gray-200 (`border-gray-200`) matching global header
- **Type Indicators**: Colored circles (3px diameter) for visual identification
- **Node Display Format**: Node type above label (e.g., "Start" above "Customer places order")
- **Text Hierarchy**: Node type (smaller, semibold) above main label (larger, bold)
- **Handles**: Proper connection points for edge creation
- **Resizing**: NodeResizer component for manual size adjustment
- **Selection**: Blue ring highlight when selected

### Edge Styling
- **Color**: Gray-200 (`#e5e7eb`) matching global header borders
- **Width**: 2px stroke width for clean appearance
- **Style**: Solid lines (no animation) for professional look
- **Labels**: "Yes" and "No" labels on decision branches
- **Connections**: Proper source/target handle mapping

### Left Panel Controls
- **ADD NODES Section**:
  - Title: "ADD NODES" (15px, all caps, 24px padding alignment)
  - Start Node button
  - Action Node button  
  - Decision Node button
  - Loop Node button
  - End Node button
- **ACTIONS Section**:
  - Title: "ACTIONS" (15px, all caps, 24px padding alignment)
  - Delete Selected button
  - Duplicate Selected button
  - Reset Workflow button
- **Button Styling**: 40px height, 14px font, ghost variant, 24px padding alignment

### Workflow Features
- **Drag & Drop**: Create nodes by clicking left panel buttons
- **Node Connections**: Click and drag between node handles to create edges
- **Node Selection**: Click nodes to select, supports multi-selection
- **Node Configuration**: Click on node text to open configuration panel in right side
- **Node Deletion**: Delete selected nodes via left panel or keyboard
- **Node Duplication**: Duplicate selected nodes with offset positioning
- **Workflow Reset**: Reset to initial state with sample workflow
- **Zoom Controls**: Built-in React Flow zoom in/out and fit-to-view
- **Pan Navigation**: Click and drag canvas to navigate large workflows
- **MiniMap**: Overview of entire workflow in bottom-right corner

### Initial Workflow
- **Sample Process**: E-commerce order processing workflow with realistic business logic
- **Node Layout**: Left-to-right flow with proper spacing (300px between nodes)
- **Decision Branching**: Inventory check with "Yes" and "No" paths
- **Edge Labels**: Clear path labeling for decision outcomes
- **Professional Appearance**: Clean, business-ready workflow example

## 🔧 Node Configuration System

### Node Configuration Panel
- **Right Panel Integration**: Node configuration appears in the right panel when a node is selected
- **Click to Configure**: Click on any node text to open its configuration panel
- **Canvas Click**: Click on empty canvas to close configuration panel
- **Real-time Updates**: Changes are logged and ready for backend integration

### Configuration Features
- **Node Information**: Displays node type, icon, color, and description
- **Editable Label**: Users can change the node's display text
- **Node Properties**: Shows ID, position, and type-specific fields
- **Type-Specific Fields**: 
  - Decision nodes: Logic description textarea
  - Action nodes: Action details textarea
- **Theme Aware**: Adapts to dark/light mode automatically

### Visual Design
- **Professional Layout**: Clean, organized configuration panel
- **Color Coded**: Node types have distinct colors and icons
- **Responsive**: Works well in the floating right panel
- **Bootstrap Icons**: Uses Bootstrap Icons for consistent iconography

### Canvas Node Display
- **Two-Line Format**: Node type above node label for clear hierarchy
- **Text Styling**: Node type (smaller, semibold) above main content (larger, bold)
- **Visual Hierarchy**: Type is secondary, label is primary information
- **Consistent Format**: All node types (Start, Action, Decision, Loop, End) follow same pattern
- **Example Display**:
  ```
  Start
  Customer places order
  ```

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
    ├── components/
    │   ├── ui/                    # shadcn/ui components
    │   │   ├── button.tsx
    │   │   ├── card.tsx
    │   │   ├── input.tsx
    │   │   ├── separator.tsx
    │   │   ├── select.tsx
    │   │   ├── dropdown-menu.tsx
    │   │   ├── popover.tsx
    │   │   └── sheet.tsx
    │   ├── GlobalHeader.tsx       # Header with branding, icons, user menu
    │   ├── Panel.tsx              # Collapsible left/right panels
    │   ├── Canvas.tsx             # Main content area
    │   ├── WorkflowBuilder.tsx    # React Flow workflow builder component
    │   ├── WorkflowControls.tsx   # Left panel workflow controls
    │   ├── NodeConfiguration.tsx  # Node configuration panel component
    │   ├── AutopilotPanel.tsx    # Reusable autopilot chat panel
    │   ├── AutopilotContext.tsx  # React Context for autopilot state management
    │   └── Layout.tsx             # Main layout orchestrator
├── lib/
│   └── utils.ts               # Utility functions
├── App.tsx                    # Main application component
└── index.css                  # Global styles and dark mode utilities
```

## 🎯 Usage

- **Left Panel**: Workflow controls with "ADD NODES" and "ACTIONS" sections for workflow management
- **Right Panel**: Node configuration panel - click on any node to configure its properties
- **Canvas**: Full-screen React Flow workflow builder with interactive node-based editor
- **Header**: "Workflow" branding, notification icon, user avatar with dropdown menu
- **No Waffle Icon**: Waffle icon has been removed from the header
- **No Sheet Menu**: Sheet menu functionality has been removed
- **Autopilot Panel**: Autopilot icon opens a 440px wide panel from the right. Global header remains fixed, content area shifts left by 440px. Panel has white background, 1px border, and an 'X' close button in the top-right. **Hidden by default** - only appears when autopilot icon is clicked.
- **Dark Mode**: Toggle available in user menu with system preference detection
- **Popovers**: Help and Notification icons display popovers with titles only
- **Panel Control**: Users can collapse/expand panels manually using floating arrow buttons
- **Workflow Builder**: Create, connect, and manage workflow nodes with drag-and-drop functionality
- **Node Configuration**: Click on any node to open its configuration panel in the right side

## 📏 Spacing Specifications

- **Left Panel**: 8px top padding (pt-2) for workflow controls sections
- **Right Panel**: 24px content padding (p-6)
- **Canvas**: Full-screen React Flow workflow builder (no padding)
- **Workflow Controls**: 40px button height, 14px font size, 24px padding alignment
- **Node Spacing**: 250px horizontal spacing between workflow nodes
- **Button Heights**: 40px for workflow control buttons
- **Font Sizes**: 17px for header text, 15px for section titles (all caps), 14px for buttons
- **Icon Sizes**: 16x16px waffle icon, 20x20px action icons, 3px node type indicators
- **Workflow Controls**: **8px top padding (pt-2) for left panel workflow sections - CRITICAL**
- **Section Titles**: "ADD NODES" and "ACTIONS" in 15px all caps with 24px padding alignment
- **Node Layout**: Left-to-right flow with proper vertical spacing for decision branches
- **No Sheet Menu**: Sheet menu has been removed
- **No Search Input**: Search functionality has been removed
- **Autopilot Panel**: 440px width, 1px border, **hidden by default**, toggleable via autopilot icon

## 🎨 Dark Mode Specifications

- **Primary Dark Color**: #0a0a0a (bg-dark-grey) - Very dark black
- **Secondary Dark Color**: #1a1a1a (bg-dark-grey-light) - Dark grey for cards/panels
- **Border Color**: #2a2a2a (border-dark-grey) - Dark grey for borders
- **Default Theme**: Dark mode is the default theme for all new users
- **Local Storage**: Theme preference persists across browser sessions
- **Toggle Location**: Available in user dropdown menu in global header
- **Icon Colors**: White icons in dark mode, dark gray icons in light mode
- **Color Scheme**: Much darker black-based theme for dramatic appearance

## 📱 Responsive Breakpoints

### Panel Responsiveness (Browser-Based)
- **Desktop (1024px+)**: Panels expanded (300px width)
- **Mobile/Tablet (< 1024px)**: Panels auto-collapsed (32px width)
- **Panel Behavior**: Always visible but auto-collapse on smaller screens

### Grid Responsiveness (Canvas-Based)
- **Small Canvas (< 768px)**: 1 column layout (`col-span-12`)
- **Medium Canvas (768px - 1023px)**: 2 columns per row (`col-span-6`)
- **Large Canvas (1024px+)**: 4 columns per row (`col-span-3`)
- **Grid Classes**: Dynamic based on canvas width using ResizeObserver
- **Grid Responsiveness**: Grid columns automatically adjust based on canvas size, not browser size
- **Implementation**: `canvasResponsive={true}` prop on GridItem components
- **Detection**: Canvas element has `data-canvas` attribute for ResizeObserver targeting

## 🔧 Component Architecture

### Reusable Components
- **GlobalHeader**: Configurable header with props for branding, icons, user menu, popovers, sheet menu, search experience
- **Panel**: Collapsible side panels with configurable content, full vertical height, always visible
- **Canvas**: Main content area with configurable padding and background
- **Grid**: Canvas-responsive grid system with ResizeObserver and explicit Tailwind class mappings
- **Navigation**: Left panel navigation with configurable items and spacing
- **Tools**: Right panel content with configurable sections
- **Popover**: Interactive popover components for help and notification icons
- **Sheet**: Slide-out menu component triggered by waffle icon with navigation buttons
- **Search**: Interactive search component with input field and close functionality
- **AutopilotPanel**: Reusable chat-style panel component (440px wide, toggleable, **hidden by default**)

### Props Interface
All components accept comprehensive props for customization:
- Content configuration
- Styling options
- Responsive behavior
- Theme support

### Canvas-Responsive Implementation
- **GridItem Component**: Enhanced with `canvasResponsive` prop
- **ResizeObserver**: Monitors canvas element for real-time width changes
- **Dynamic Classes**: Applies responsive Tailwind classes based on canvas width
- **Canvas Detection**: Uses `data-canvas` attribute to identify canvas element
- **Performance**: Efficient ResizeObserver implementation with proper cleanup

### Autopilot State Management
- **React Context**: Simple state management using `AutopilotContext`
- **Direct Access**: Components use `useAutopilot()` hook for state access
- **No Prop Drilling**: Eliminates complex prop passing between components
- **Simple API**: `openAutopilot()` and `closeAutopilot()` functions
- **Global State**: Available throughout the entire application

### ⚠️ Critical Navigation Spacing
**IMPORTANT**: The left panel navigation MUST have 8px top padding (`pt-2` class) applied to the `<nav>` element. This is implemented in the `Navigation.tsx` component and should never be removed.

## 🧹 Code Cleanup & Final State

### Cleanup Completed
- ✅ **Removed all console.log statements** - No debugging output in production
- ✅ **Cleaned up unused parameters** - All parameters properly prefixed with underscore
- ✅ **Removed debugging code** - Clean, production-ready codebase
- ✅ **Fixed infinite loop issues** - WorkflowBuilder methods properly isolated
- ✅ **Fixed linter warnings** - No ESLint errors or warnings
- ✅ **Updated documentation** - Specs.md reflects current project state

### Production Ready Features
- **Header Height Fixed**: Header maintains 48px height regardless of window resizing
- **Dark Mode Default**: Always opens in dark mode, respects user choice
- **Autopilot Panel**: Hidden by default, opens on autopilot icon click
- **Workflow Builder**: Complete React Flow integration with all features working
- **Panel Auto-Collapse**: Panels automatically collapse when browser < 1024px
- **Clean Codebase**: No console.log statements or debugging code
- **Responsive Design**: Works on all screen sizes with proper breakpoints
- **Accessibility**: Proper ARIA labels and semantic HTML
- **Workflow Controls**: Left panel fully functional with node creation and management

### Workflow Builder Features
- ✅ **React Flow Integration**: Complete @xyflow/react implementation
- ✅ **Node Types**: Start, End, Action, Decision, Loop nodes with proper styling
- ✅ **Edge Connections**: Visual connections with proper handles and styling
- ✅ **Left Panel Controls**: "ADD NODES" and "ACTIONS" sections fully functional
- ✅ **Node Management**: Create, delete, duplicate, and reset workflow functionality
- ✅ **Node Configuration**: Click on any node to open configuration panel in right side
- ✅ **Professional Styling**: White nodes with colored indicators, consistent borders
- ✅ **Sample Workflow**: E-commerce order processing workflow as initial example
- ✅ **Zoom Controls**: Built-in React Flow zoom, pan, and fit-to-view
- ✅ **MiniMap**: Overview of entire workflow in bottom-right corner

### Deployment Status
- ✅ **Build Ready**: `npm run build` produces optimized production build
- ✅ **Netlify Compatible**: Configured for automatic deployment
- ✅ **GitHub Repository**: All changes committed and pushed
- ✅ **Documentation**: Complete and up-to-date specifications
- ✅ **Workflow Builder**: Fully functional React Flow integration

---

*Ready for production deployment with complete workflow builder functionality.*