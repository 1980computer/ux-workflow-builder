# AI Workflow Builder

A sophisticated AI workflow builder built with Next.js, React Flow, and modern design systems. This project provides a professional interface for creating, editing, and executing AI-powered workflows with drag-and-drop functionality, real-time execution, and beautiful UI.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Groq API key (for AI functionality)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd workflow-boilerplate
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   GROQ_API_KEY=your_groq_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🚀 Features

- **Interactive Workflow Builder** - Drag-and-drop interface for creating AI workflows
- **Real-time Execution** - Execute workflows with live status updates
- **Dark Mode Support** - Beautiful dark and light theme switching
- **Professional UI** - Clean, modern design inspired by Simple AI
- **Node Types** - Multiple AI node types (Text Input, Generate Text, Prompt Crafter, Visualize Text)
- **Responsive Design** - Works seamlessly on desktop and mobile
- **TypeScript** - Full type safety throughout the application

## 🛠 Tech Stack

### Core Framework
- **Next.js 15.5.2** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type-safe development

### Workflow Engine
- **@xyflow/react** - React Flow library for node-based editors
- **Zustand** - State management for workflow execution
- **Server-Sent Events (SSE)** - Real-time workflow execution updates

### UI & Design System
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Lucide React** - Beautiful icon library
- **next-themes** - Dark mode support

### AI Integration
- **Vercel AI SDK** - AI model integration
- **Groq API** - LLM provider (requires API key)
- **React Markdown** - Markdown rendering for AI outputs

### Development Tools
- **Turbopack** - Fast bundler for development
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 🎨 Design System

### Typography
- **Font**: Inter (Google Fonts)
- **Font Features**: OpenType features for improved readability
- **Font Smoothing**: Optimized text rendering

### Color Palette
The design system uses CSS custom properties for consistent theming:

```css
/* Light Mode */
--background: oklch(1 0 0);
--foreground: oklch(0.129 0.042 264.695);
--primary: oklch(0.208 0.042 265.755);
--secondary: oklch(0.968 0.007 247.896);

/* Dark Mode */
--background: oklch(0.129 0.042 264.695);
--foreground: oklch(0.984 0.003 247.858);
--primary: oklch(0.929 0.013 255.508);
--secondary: oklch(0.279 0.041 260.031);
```

### Component Styling
- **Rounded Corners**: Consistent border radius (0.625rem)
- **Shadows**: Subtle shadows for depth and hierarchy
- **Transitions**: Smooth animations (200ms duration)
- **Backdrop Blur**: Modern glassmorphism effects

## 📁 Project Structure

```
workflow-boilerplate/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with theme provider
│   │   ├── page.tsx            # Home page (redirects to workflow)
│   │   ├── workflow/
│   │   │   └── page.tsx        # Main workflow interface
│   │   ├── globals.css         # Global styles and CSS variables
│   │   └── api/
│   │       └── workflow/
│   │           └── execute/
│   │               └── route.ts # Workflow execution API
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── flow/               # React Flow components
│   │   │   ├── base-node.tsx   # Base node component
│   │   │   ├── nodes-panel.tsx # Node toolbar
│   │   │   ├── node-header.tsx # Node header components
│   │   │   └── ...            # Other flow components
│   │   ├── theme-toggle.tsx    # Dark mode toggle
│   │   ├── theme-provider.tsx  # Theme context provider
│   │   └── error-indicator.tsx # Error display component
│   ├── lib/
│   │   ├── workflow.ts         # Workflow types and utilities
│   │   ├── workflow-execution-engine.ts # Execution logic
│   │   └── generate-ai-text.ts # AI text generation
│   └── hooks/
│       └── use-workflow.ts     # Workflow state management
├── public/                     # Static assets
├── package.json               # Dependencies and scripts
└── README.md                  # This file
```

## 🎯 Usage

### Creating Workflows

1. **Add Nodes**: Drag nodes from the top toolbar to the canvas
2. **Connect Nodes**: Click and drag from node handles to create connections
3. **Configure Nodes**: Click on nodes to edit their properties
4. **Execute Workflow**: Click "Run Flow" to execute the workflow

### Node Types

- **Text Input**: Add text content or prompts
- **Generate Text**: AI text generation with configurable models
- **Prompt Crafter**: Create and manage AI prompts
- **Visualize Text**: Display and format text outputs

### Theme Switching

Click the sun/moon icon in the top-right corner to switch between:
- **Light Mode**: Clean, bright interface
- **Dark Mode**: Professional dark theme
- **System**: Follows your OS preference

## 🎨 Customization

### Styling Components

The project uses Tailwind CSS with custom CSS variables. To customize:

1. **Colors**: Modify CSS variables in `src/app/globals.css`
2. **Components**: Edit shadcn/ui components in `src/components/ui/`
3. **Nodes**: Customize node styling in `src/components/flow/`

### Adding New Node Types

1. Create a new node component in `src/components/flow/`
2. Add the node type to the `nodeTypes` object in `src/app/workflow/page.tsx`
3. Update the `NodesPanel` component to include the new node type

### Custom Workflows

1. Define workflow structure in `src/lib/`
2. Add workflow execution logic
3. Update the workflow initialization in the main page

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GROQ_API_KEY` | Groq API key for AI functionality | Yes |
| `NEXT_PUBLIC_APP_URL` | Application URL for production | No |

### Tailwind Configuration

The project uses a custom Tailwind configuration with:
- Custom color palette
- Extended spacing and typography
- Custom animations and transitions

### TypeScript Configuration

Strict TypeScript configuration with:
- Strict mode enabled
- Path mapping for clean imports
- Custom type definitions for workflow components

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on push

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Simple AI** - Design inspiration and workflow patterns
- **shadcn/ui** - High-quality component library
- **React Flow** - Powerful node-based editor
- **Vercel AI SDK** - AI integration tools

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](../../issues) page
2. Create a new issue with detailed information
3. Include steps to reproduce the problem

---

**Built with ❤️ using Next.js, React Flow, and modern web technologies**
