# AS Store - E-Commerce Application

A modern full-stack e-commerce application built with React and Express.js, featuring a complete product catalog with search, filtering, and shopping cart functionality.

## 🚀 Tech Stack

### Frontend
- **React 18** - Modern UI library with hooks
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server
- **Wouter** - Lightweight client-side routing
- **TanStack Query** - Server state management and caching
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern UI component library built on Radix UI
- **Radix UI** - Accessible headless UI components
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icon library
- **React Hook Form** - Form state management
- **Zod** - Schema validation

### Backend
- **Express.js** - Fast Node.js web framework
- **TypeScript** - Type-safe server development
- **Drizzle ORM** - Type-safe database operations
- **PostgreSQL** - Robust relational database
- **Neon Database** - Serverless PostgreSQL platform
- **Zod** - Runtime schema validation
- **dotenv** - Environment variable management

### Development Tools
- **tsx** - TypeScript execution environment
- **ESBuild** - Fast JavaScript bundler
- **Drizzle Kit** - Database migration tool
- **Hot Module Replacement** - Development experience enhancement

### Deployment & Infrastructure
- **Replit** - Cloud development and deployment platform
- **Node.js 20** - JavaScript runtime environment
- **PostgreSQL 16** - Database server

## 📋 Prerequisites

Before running this project on Windows, ensure you have:

- **Node.js 18 or 20** - Download from [nodejs.org](https://nodejs.org)
- **Git** (optional) - For version control
- **A code editor** - VS Code recommended
- **PostgreSQL database** - Local installation or cloud service

## 🔧 Installation & Setup (Windows)

### Step 1: Download the Project
```cmd
# If using Git
git clone [repository-url]
cd as-store

# Or download ZIP file and extract to desired location
# Navigate to project directory
cd C:\path\to\your\project
```

### Step 2: Install Dependencies
```cmd
# Install all required packages
npm install

# This installs both frontend and backend dependencies
```

### Step 3: Database Setup

#### Option A: Cloud Database (Recommended - Easier)
1. Visit [console.neon.tech](https://console.neon.tech)
2. Create a free account
3. Create a new project/database
4. Copy the connection string (format: `postgresql://user:pass@host/db?sslmode=require`)

#### Option B: Local PostgreSQL
1. Download PostgreSQL from [postgresql.org/download/windows](https://www.postgresql.org/download/windows/)
2. Install with default settings (remember the password)
3. Open SQL Shell (psql) from Start menu
4. Create database:
```sql
CREATE DATABASE as_store_db;
\q
```

### Step 4: Environment Configuration
Create a `.env` file in the project root:

```env
# For Neon Cloud Database
DATABASE_URL=postgresql://username:password@ep-xyz.us-east-1.aws.neon.tech/dbname?sslmode=require

# For Local PostgreSQL
DATABASE_URL=postgresql://postgres:yourpassword@localhost:5432/as_store_db
```

### Step 5: Database Schema Setup
```cmd
# Push database schema and create tables with sample data
npm run db:push
```

### Step 6: Start Development Server
```cmd
# Start both frontend and backend servers
npm run dev

# The application will be available at http://localhost:5000
```

## 🖥️ Available Scripts

```cmd
npm run dev         # Start development server (frontend + backend)
npm run build       # Build for production
npm run start       # Start production server
npm run db:push     # Update database schema
npm run check       # TypeScript type checking
```

## 🌐 Accessing the Application

1. **Development**: Open `http://localhost:5000` in your browser
2. **API Endpoints**: Available at `http://localhost:5000/api/*`
   - `GET /api/products` - Get all products
   - `GET /api/products?search=query` - Search products
   - `GET /api/products?category=electronics` - Filter by category
   - `GET /api/products/:id` - Get single product

## 📁 Project Structure

```
as-store/
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Application pages/routes
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions and configs
│   │   └── main.tsx        # Application entry point
│   └── index.html          # HTML template
├── server/                 # Express.js backend
│   ├── index.ts            # Server entry point
│   ├── routes.ts           # API route definitions
│   ├── storage.ts          # Database operations layer
│   ├── db.ts               # Database connection setup
│   └── vite.ts             # Vite integration for development
├── shared/                 # Shared types and schemas
│   └── schema.ts           # Database schema and types
├── package.json            # Dependencies and scripts
├── vite.config.ts          # Vite build configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── drizzle.config.ts       # Database migration configuration
└── .env                    # Environment variables (create this)
```

## ✨ Features

### User Interface
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Dark Mode Support** - Toggle between light and dark themes
- **Product Catalog** - Grid-based product display
- **Search Functionality** - Real-time product search
- **Category Filtering** - Filter products by category and price
- **Product Details** - Detailed product view with modal/page options
- **Shopping Cart** - Add products to cart with toast notifications
- **Loading States** - Skeleton loaders for better UX

### Backend Features
- **RESTful API** - Clean, organized API endpoints
- **Database Integration** - PostgreSQL with Drizzle ORM
- **Type Safety** - Full TypeScript support throughout
- **Error Handling** - Comprehensive error management
- **Data Validation** - Zod schema validation
- **Development Tools** - Hot reload, logging, debugging

## 🔧 Windows-Specific Troubleshooting

### Node.js Commands Not Working
```cmd
# Ensure Node.js is in PATH during installation
# Or manually add to system PATH: C:\Program Files\nodejs\
# Restart Command Prompt after PATH changes
```

### Port 5000 Already in Use
```cmd
# Check what's using the port
netstat -ano | findstr :5000

# Kill the process (replace PID with actual number)
taskkill /PID [PID_NUMBER] /F
```

### Database Connection Issues
```cmd
# For local PostgreSQL, ensure service is running
# Windows + R, type "services.msc"
# Find "postgresql-x64-xx" service and start it

# Test connection
psql -U postgres -h localhost -d as_store_db
```

### Permission Errors
- Run Command Prompt as Administrator
- Or use PowerShell with elevated permissions

## 🚀 Deployment

### Production Build
```cmd
# Build the application
npm run build

# Start production server
npm run start
```

### Replit Deployment
This project is configured for Replit's autoscale deployment:
- Automatic build process
- Environment variable management
- PostgreSQL database integration
- Custom domain support

## 📝 Extra Notes

### Security
- ✅ **Vite Security**: Updated to version 5.4.15 (patched CVE-2025-30208)
- ✅ **Environment Variables**: Secure handling via dotenv
- ✅ **Input Validation**: Zod schema validation on all inputs
- ✅ **SQL Injection Protection**: Drizzle ORM parameterized queries

### Performance
- **Caching**: TanStack Query for intelligent data caching
- **Code Splitting**: Vite automatic code splitting
- **Lazy Loading**: Component-level lazy loading
- **Optimized Assets**: Automatic image optimization via Unsplash

### Development Experience
- **Hot Reload**: Instant updates during development
- **Type Safety**: Full TypeScript coverage
- **Error Handling**: Runtime error modal in development
- **Debugging**: Comprehensive logging and error tracking

### Sample Data
The database includes 8 sample products across categories:
- Electronics (headphones, smartphone, watch, camera)
- Clothing (jacket, shoes, backpack)
- Home (coffee maker)

### Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🤝 Support

For issues or questions:
1. Check the troubleshooting section above
2. Verify all prerequisites are installed
3. Ensure DATABASE_URL is correctly configured
4. Check browser console for error messages

## 📄 License

MIT License - Feel free to use this project for learning and development purposes.