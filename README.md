# ux-workflow-builder (AI)

---

A workflow builder, highly popularized by AI recently, is a visual interface that allows users to create automated processes by connecting steps together, much like building blocks. 

Instead of writing code, users drag and drop nodes—such as triggers, actions, and conditions—onto a canvas and draw connections between them to define how data flows. Each node represents a step in the process, and the branching paths or sequences show the logic of how the workflow should run. The experience feels like sketching out a flowchart, but with interactive parts that actually execute tasks across apps and systems. This makes complex automation intuitive and accessible, empowering users to design and manage processes through a clear, visual map.

![image](https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Agent_chat_818315ae64.webp)

---

#### Reference companies

- [Palantir](https://www.palantir.com/), [ironcladapp](https://rivet.ironcladapp.com/), [flowiseai](https://flowiseai.com/), [n8n](https://n8n.io/), [Microsoft data formulator](https://github.com/microsoft/data-formulator), [Lang flow](https://www.langflow.org/), [pyspur](https://www.pyspur.dev/), [vellum](https://www.vellum.ai/), [Zapier](https://zapier.com/), [Comfy](http://comfy.org/)

#### Reference libraries

- [React Flow](https://reactflow.dev/), [JsPlumb](https://jsplumbtoolkit.com/reactflow-alternative), [JointJS](https://www.jointjs.com/react-flow-alternative), [xyflow](https://xyflow.com/), [Butterfly](https://github.com/xyflow/awesome-node-based-uis), [shadcn](https://ui.shadcn.com/blocks)

#### Reference design systems

- [Simple AI](https://www.simple-ai.dev/ai-agents), [AI SDK](https://ai-sdk.dev/elements/examples/workflow), [Shadcn](https://ui.shadcn.com/blocks), [ShadcnAI](https://www.shadcn.io/ai), [Kata AI](https://kata.ai/), [Ebay GenAI](https://playbook.ebay.com/expressions), [Patternfly](https://www.patternfly.org/patternfly-ai/about-ai/), [IBM Carbon AI](https://carbondesignsystem.com/guidelines/carbon-for-ai/)

#### Demo examples

- [reactflow/showcase](https://reactflow.dev/showcase)
- or use the /workflow-boilerplate in the root directory here

---

## 📦 Available Templates

### 🚀 [Workflow Boilerplate 1 - Next.js Workflow Builder](./workflow-boilerplate-1/)
**AI-Powered Workflow Engine with Real-time Execution**

- **Framework**: Next.js 14 with App Router
- **Features**: AI integration, real-time execution, custom node types
- **Best For**: AI-powered workflows, real-time processing, complex node logic
- **Tech Stack**: Next.js, React Flow, OpenAI API, TypeScript

**Key Features:**
- 🤖 AI-powered text generation with OpenAI
- ⚡ Real-time workflow execution with SSE
- 🎯 Custom node types (Text Input, AI Generation, Visualization)
- 🌙 Dark/Light mode support
- 📱 Responsive design

### 🎨 [Workflow Boilerplate 2 - React Workflow Builder](./workflow-boilerplate-2/)
**Professional Workflow Builder with Floating Panels**

- **Framework**: React 18 with Create React App
- **Features**: Floating panels, node configuration, dark mode default
- **Best For**: Professional workflow builders, business applications, node configuration
- **Tech Stack**: React, React Flow, Tailwind CSS, Bootstrap Icons

**Key Features:**
- 🎨 Floating panels with 12px spacing and rounded corners
- ⚙️ Node configuration system with right panel
- 🌙 Dark mode as default with light mode toggle
- 📱 Responsive design with auto-collapsing panels
- 🎯 E-commerce demo workflow included

## 🚀 Quick Start

### Choose Your Template

1. **For AI-powered workflows**: Use [Workflow Boilerplate 1](./workflow-boilerplate-1/)
2. **For professional workflow builders**: Use [Workflow Boilerplate 2](./workflow-boilerplate-2/)

### Installation

```bash
# Clone the repository
git clone https://github.com/1980computer/ux-workflow-builder.git
cd ux-workflow-builder

# Choose your template
cd workflow-boilerplate-1  # or workflow-boilerplate-2

# Install dependencies
npm install

# Start development server
npm run dev  # or npm start
```

## 🛠 Tech Stack Comparison

| Feature | Boilerplate 1 (Next.js) | Boilerplate 2 (React) |
|---------|-------------------------|----------------------|
| **Framework** | Next.js 14 | React 18 |
| **Routing** | App Router | React Router |
| **AI Integration** | ✅ OpenAI API | ❌ |
| **Real-time Execution** | ✅ SSE | ❌ |
| **Floating Panels** | ❌ | ✅ |
| **Node Configuration** | ❌ | ✅ |
| **Dark Mode Default** | ❌ | ✅ |
| **Bootstrap Icons** | ❌ | ✅ |
| **Production Build** | ✅ | ✅ |

## 🎯 Use Cases

### Workflow Boilerplate 1 - Next.js
- **AI-powered workflows** with OpenAI integration
- **Real-time processing** with streaming responses
- **Complex node logic** with custom processors
- **Server-side rendering** for better SEO
- **API routes** for workflow execution

### Workflow Boilerplate 2 - React
- **Professional workflow builders** for business applications
- **Node configuration systems** with property editing
- **Floating panel interfaces** with modern design
- **Client-side applications** with fast loading
- **E-commerce workflows** and business processes

## 📚 Documentation

Each template includes comprehensive documentation:

- **Setup Instructions** - Quick start guides
- **Tech Stack Details** - Complete technology breakdown
- **API Documentation** - Endpoint specifications
- **Customization Guides** - How to extend and modify
- **Deployment Instructions** - Production deployment
- **Contributing Guidelines** - How to contribute

## 🚀 Deployment

### Netlify (Recommended)
Both templates are optimized for Netlify deployment with included `netlify.toml` configuration files.

### Vercel
Workflow Boilerplate 1 is optimized for Vercel deployment with Next.js integration.

### Docker
Both templates include Docker support for containerized deployment.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

---

**Ready to build amazing workflows?** Choose your template and start building! 🚀
