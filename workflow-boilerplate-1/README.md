# Workflow Boilerplate 1 - Next.js Workflow Builder

A modern Next.js template for building AI-powered workflow applications with React Flow integration, real-time execution, and comprehensive node management.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd workflow-boilerplate-1

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🛠 Tech Stack

### Core Framework
- **Next.js 14** - React framework with App Router
- **React 18** - UI library with hooks and concurrent features
- **TypeScript** - Type-safe development

### Workflow Engine
- **React Flow** - Interactive node-based workflow builder
- **Custom Node Types** - Text input, AI generation, visualization nodes
- **Real-time Execution** - SSE-based workflow processing
- **Node Management** - Add, edit, delete, and configure nodes

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Lucide React** - Beautiful icons
- **Dark/Light Mode** - Theme switching support

### AI Integration
- **OpenAI API** - AI text generation
- **Custom Processors** - Node-specific AI processing
- **Streaming Responses** - Real-time AI output

### Development Tools
- **ESLint** - Code linting
- **TypeScript** - Type checking
- **PostCSS** - CSS processing
- **Hot Reload** - Development experience

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── api/workflow/execute/     # Workflow execution API
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   └── workflow/page.tsx        # Workflow builder page
├── components/
│   ├── flow/                    # React Flow components
│   │   ├── base-node.tsx        # Base node component
│   │   ├── text-input-node.tsx  # Text input node
│   │   ├── generate-text-node.tsx # AI generation node
│   │   └── visualize-text-node.tsx # Visualization node
│   ├── ui/                      # shadcn/ui components
│   └── CustomNode.tsx           # Custom node wrapper
├── hooks/
│   └── flow/use-workflow.ts     # Workflow state management
├── lib/
│   ├── flow/                    # Workflow engine
│   │   ├── workflow-execution-engine.ts
│   │   ├── sse-workflow-execution-engine.ts
│   │   └── node-factory.ts
│   └── utils.ts                 # Utility functions
└── types/                       # TypeScript definitions
```

## 🔧 Setup Information

### Environment Variables

Create a `.env.local` file in the root directory:

```env
OPENAI_API_KEY=your_openai_api_key_here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Type checking
npm run type-check
```

### Deployment

#### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

#### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify
3. Configure environment variables

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

## 🎯 Features

### Workflow Builder
- **Drag & Drop Interface** - Intuitive node creation
- **Multiple Node Types** - Text input, AI generation, visualization
- **Real-time Execution** - Live workflow processing
- **Node Configuration** - Customize node properties
- **Connection Management** - Link nodes with edges

### AI Integration
- **OpenAI Integration** - GPT-powered text generation
- **Streaming Responses** - Real-time AI output
- **Custom Processors** - Node-specific AI logic
- **Error Handling** - Robust error management

### User Experience
- **Dark/Light Mode** - Theme switching
- **Responsive Design** - Mobile-friendly interface
- **Real-time Updates** - Live workflow status
- **Node Management** - Add, edit, delete nodes

## 🔌 API Endpoints

### POST `/api/workflow/execute`
Execute a workflow with real-time streaming.

**Request Body:**
```json
{
  "nodes": [...],
  "edges": [...],
  "workflowId": "unique-id"
}
```

**Response:** Server-Sent Events stream with execution updates.

## 🎨 Customization

### Adding New Node Types
1. Create a new node component in `src/components/flow/`
2. Add the node type to the node factory
3. Implement the node processor in `src/lib/flow/`
4. Update the workflow execution engine

### Styling
- Modify `src/app/globals.css` for global styles
- Use Tailwind classes for component styling
- Customize shadcn/ui components in `src/components/ui/`

### Theme Customization
- Update theme colors in `tailwind.config.js`
- Modify dark/light mode styles in `globals.css`
- Customize component themes in individual files

## 🚀 Production Deployment

### Build Optimization
- Automatic code splitting
- Image optimization
- Bundle analysis
- Performance monitoring

### Environment Setup
- Configure production environment variables
- Set up monitoring and logging
- Configure CDN for static assets
- Set up error tracking

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Flow Documentation](https://reactflow.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
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

**Ready to build amazing workflows?** Start with `npm run dev` and explore the possibilities! 🚀