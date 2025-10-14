# Workflow Boilerplate 2 - React Workflow Builder

A modern React template for building professional workflow applications with React Flow integration, floating panels, dark mode, and comprehensive node configuration.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd workflow-boilerplate-2

# Install dependencies
npm install

# Start development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🛠 Tech Stack

### Core Framework
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development
- **Create React App** - Zero-config React setup

### Workflow Engine
- **React Flow** - Interactive node-based workflow builder
- **Custom Node Types** - Start, End, Action, Decision, Loop nodes
- **Node Configuration** - Real-time node property editing
- **Workflow Management** - Add, delete, duplicate, reset workflows

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Bootstrap Icons** - Professional icon set
- **Dark Mode Default** - Modern dark theme with light mode toggle

### Layout System
- **Floating Panels** - 12px spacing with rounded corners and shadows
- **Responsive Design** - Auto-collapse panels on mobile
- **Global Header** - 48px height with branding and user menu
- **Three-Panel Layout** - Left controls, center canvas, right configuration

### Development Tools
- **ESLint** - Code linting and formatting
- **TypeScript** - Type checking and IntelliSense
- **PostCSS** - CSS processing
- **Hot Reload** - Development experience

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                      # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── ...
│   ├── GlobalHeader.tsx         # Header with branding and user menu
│   ├── Layout.tsx               # Main layout orchestrator
│   ├── Panel.tsx                # Collapsible side panels
│   ├── WorkflowBuilder.tsx      # React Flow workflow builder
│   ├── WorkflowControls.tsx     # Left panel workflow controls
│   ├── NodeConfiguration.tsx    # Right panel node configuration
│   └── Canvas.tsx               # Main content area
├── lib/
│   └── utils.ts                 # Utility functions
├── types/
│   └── workflow.ts              # TypeScript definitions
├── App.tsx                      # Main application component
├── index.tsx                    # React entry point
└── index.css                    # Global styles and dark mode
```

## 🔧 Setup Information

### Environment Variables

Create a `.env` file in the root directory (optional):

```env
REACT_APP_API_URL=your_api_url_here
REACT_APP_VERSION=1.0.0
```

### Development Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Run linting
npm run lint

# Type checking
npm run type-check
```

### Build Output

```bash
# Create production build
npm run build

# Serve production build locally
npx serve -s build
```

## 🎯 Features

### Workflow Builder
- **Interactive Canvas** - Full-screen React Flow workflow builder
- **Node Types** - Start, End, Action, Decision, Loop nodes
- **Drag & Drop** - Intuitive node creation and positioning
- **Node Connections** - Visual edges with proper handles
- **Zoom & Pan** - Built-in navigation controls
- **MiniMap** - Overview of entire workflow

### Panel System
- **Floating Design** - 12px spacing from browser edges
- **Rounded Corners** - Modern card-like appearance
- **Shadows** - Subtle depth and elevation
- **Collapsible** - 300px expanded, 32px collapsed
- **Responsive** - Auto-collapse on mobile devices

### Node Configuration
- **Click to Configure** - Click any node to open configuration
- **Real-time Updates** - Changes apply immediately
- **Type-specific Fields** - Different options per node type
- **Visual Hierarchy** - Node type above label display
- **Theme Aware** - Adapts to dark/light mode

### Dark Mode
- **Default Theme** - Dark mode by default
- **Light Mode Toggle** - Switch in user menu
- **Theme Persistence** - Remembers user preference
- **Icon Colors** - White icons in dark mode
- **Node Styling** - Theme-aware node colors

## 🎨 Customization

### Adding New Node Types
1. Create a new node component in `WorkflowBuilder.tsx`
2. Add the node type to the node factory
3. Update the node configuration panel
4. Add type-specific styling

### Styling Customization
- Modify `src/index.css` for global styles
- Use Tailwind classes for component styling
- Customize dark mode colors in CSS variables
- Update panel spacing and shadows

### Theme Customization
- Update colors in `tailwind.config.js`
- Modify dark mode variables in `index.css`
- Customize component themes
- Add new color schemes

## 🚀 Production Deployment

### Build Optimization
- Automatic code splitting
- Asset optimization
- Bundle analysis
- Performance monitoring

### Deployment Options

#### Netlify (Recommended)
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy automatically

#### Vercel
1. Import your GitHub repository
2. Set framework preset to Create React App
3. Deploy automatically

#### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📱 Responsive Design

### Breakpoints
- **Desktop (1024px+)** - Full panel layout
- **Tablet (768px-1023px)** - Collapsed panels
- **Mobile (<768px)** - Auto-collapsed panels

### Panel Behavior
- **Always Visible** - Panels never completely hidden
- **Auto-collapse** - Collapse when browser < 1024px
- **Manual Control** - Users can toggle panels
- **Floating Design** - Consistent spacing on all devices

## 🔌 API Integration

### Workflow Execution
```typescript
// Example workflow execution
const executeWorkflow = async (nodes: Node[], edges: Edge[]) => {
  const response = await fetch('/api/workflow/execute', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nodes, edges })
  });
  return response.json();
};
```

### Node Configuration
```typescript
// Example node configuration
const updateNode = (nodeId: string, updates: Partial<Node>) => {
  setNodes(nodes => nodes.map(node => 
    node.id === nodeId ? { ...node, ...updates } : node
  ));
};
```

## 🎯 Demo Workflow

The template includes a pre-built e-commerce order processing workflow:

1. **Start** - Customer places order
2. **Action** - Validate order details
3. **Decision** - In stock? (Yes/No paths)
4. **Action** - Process & ship (Yes path)
5. **Action** - Notify out of stock (No path)
6. **End** - Complete

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [React Flow Documentation](https://reactflow.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [shadcn/ui Components](https://ui.shadcn.com/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Ready to build professional workflows?** Start with `npm start` and create amazing workflow applications! 🚀
