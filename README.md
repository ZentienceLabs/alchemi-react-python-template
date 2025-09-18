# React + FastAPI Monorepo

A modern full-stack monorepo template with React web app and FastAPI API, featuring TypeScript, Tailwind CSS, shadcn/ui components, and VS Code debug configurations.

## 🏗️ Project Structure

```
├── web/                      # React web app with Vite
│   ├── src/
│   │   ├── components/ui/    # shadcn/ui components
│   │   ├── lib/             # Utilities
│   │   └── ...
│   ├── package.json
│   └── vite.config.ts
├── api/                      # FastAPI backend
│   ├── app/                 # Application modules
│   ├── main.py              # FastAPI application
│   └── requirements.txt
├── .vscode/                 # VS Code configuration
│   ├── launch.json          # Debug configurations
│   ├── tasks.json           # Build tasks
│   └── settings.json        # Workspace settings
├── package.json             # Root package.json with workspace scripts
└── monorepo.code-workspace  # VS Code workspace file
```

## 🚀 Quick Start

### Option 1: Using Scripts (Recommended)

**Windows:**
```bash
# Run the development script
./dev.bat
```

**macOS/Linux:**
```bash
# Make script executable and run
chmod +x dev.sh
./dev.sh
```

### Option 2: Manual Setup

1. **Install dependencies:**
   ```bash
   npm run install:all
   ```

2. **Start development servers:**
   ```bash
   npm run dev
   ```

3. **Access the applications:**
   - Web: http://localhost:3000
   - API: http://localhost:8000
   - API Documentation: http://localhost:8000/docs

## 🛠️ Development

### Web (React + Vite)

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite for fast development
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui components
- **Routing:** React Router DOM
- **Linting:** ESLint with TypeScript rules

### API (FastAPI)

- **Framework:** FastAPI with Python
- **Server:** Uvicorn with hot reload
- **Validation:** Pydantic models
- **Documentation:** Automatic OpenAPI/Swagger docs
- **CORS:** Configured for frontend development

### VS Code Integration

- **Debug Configurations:**
  - Debug FastAPI API
  - Debug React Web
  - Debug Full Stack (both simultaneously)

- **Tasks:**
  - Install All Dependencies
  - Start Web Dev Server
  - Start API Dev Server
  - Start Full Stack Dev
  - Build Web
  - Type Check Web

- **Recommended Extensions:**
  - Python support with linting and formatting
  - TypeScript and React development
  - Tailwind CSS IntelliSense
  - ESLint and Prettier

## 📝 Available Scripts

### Root Scripts
```bash
npm run dev                 # Start both web and api
npm run dev:web             # Start only web
npm run dev:api             # Start only api
npm run build              # Build web for production
npm run install:all        # Install all dependencies
npm run type-check         # TypeScript type checking
```

### Web Scripts
```bash
cd web
npm run dev                # Start development server
npm run build              # Build for production
npm run preview            # Preview production build
npm run lint               # Run ESLint
npm run type-check         # TypeScript type checking
```

### API Scripts
```bash
cd api
python main.py             # Start FastAPI server
# or
uvicorn main:app --reload  # Start with uvicorn directly
```

## 🔧 VS Code Debugging

1. **Open the workspace:**
   - Open `monorepo.code-workspace` in VS Code

2. **Debug options:**
   - **F5:** Start "Debug Full Stack" (both web and api)
   - **Ctrl+Shift+P → Debug: Select and Start Debugging**
     - Choose "Debug FastAPI API" for api only
     - Choose "Debug React Web" for web only

3. **Set breakpoints:**
   - Web: Set breakpoints in `.tsx/.ts` files
   - API: Set breakpoints in `.py` files

## 🌐 API Endpoints

The API provides several example endpoints:

- `GET /` - Welcome message
- `GET /hello` - Hello world with timestamp
- `GET /health` - Health check endpoint
- `GET /api/users` - Mock users data

Access interactive API documentation at http://localhost:8000/docs

## 🎨 UI Components

The project includes shadcn/ui components:

- **Button:** Various button variants and sizes
- **Card:** Card layout components
- **Ready to add:** Input, Dialog, Table, Form components

Add more components using:
```bash
cd frontend
npx shadcn-ui@latest add [component-name]
```

## 🔄 Proxy Configuration

The web Vite dev server is configured to proxy API calls to the backend:
- Web API calls to `/api/*` are forwarded to `http://localhost:8000`
- This eliminates CORS issues during development

## 📦 Production Build

```bash
# Build web for production
npm run build

# The built files will be in web/dist/
# Deploy the API as a FastAPI application
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Make your changes
4. Test both web and api
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).