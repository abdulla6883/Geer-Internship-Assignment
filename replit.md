# AS Store - E-Commerce Application

## Overview

This is a full-stack e-commerce application built with React (frontend) and Express.js (backend). The application features a modern product catalog with search, filtering, and product management capabilities. It's designed as a monorepo with a clear separation between client-side and server-side code.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (now fully integrated)
- **Storage Layer**: Abstracted storage interface with PostgreSQL database implementation
- **API Design**: RESTful API with clear separation of concerns
- **Development Setup**: Hot reloading with automatic server restart

## Key Components

### Database Schema
The application uses a PostgreSQL database with two main tables:
- **Users**: Basic user authentication with username/password
- **Products**: Complete product catalog with name, description, price, image, category, and stock status

### Storage Layer
- **Interface-based Design**: `IStorage` interface allows for easy switching between storage implementations
- **PostgreSQL Integration**: Full database integration with persistent data storage
- **Production Ready**: Live PostgreSQL database with Drizzle ORM and 8 sample products

### Frontend Features
- **Product Catalog**: Grid-based product display with responsive design
- **Search & Filter**: Real-time search and category/price filtering
- **Product Details**: Detailed product view with modal and dedicated page options
- **Shopping Cart**: Basic cart functionality with toast notifications
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### UI Components
- **Component Library**: Complete set of reusable UI components from shadcn/ui
- **Design System**: Custom color scheme with CSS variables for easy theming
- **Accessibility**: Built on Radix UI primitives for excellent accessibility support

## Data Flow

1. **Client Requests**: Frontend makes API calls through TanStack Query
2. **API Routes**: Express.js routes handle HTTP requests
3. **Storage Layer**: Abstract storage interface processes business logic
4. **Database Operations**: Drizzle ORM handles database interactions
5. **Response Handling**: Structured JSON responses with proper error handling
6. **Client Updates**: TanStack Query manages cache updates and UI re-renders

## External Dependencies

### Database & Storage
- **PostgreSQL**: Primary database (configured but can be added later)
- **Neon Database**: Serverless PostgreSQL driver for production deployment
- **Drizzle ORM**: Type-safe database operations with schema management

### UI & Styling
- **Radix UI**: Headless UI components for accessibility and functionality
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Icon library for consistent iconography

### Development Tools
- **Vite**: Fast build tool with development server
- **TypeScript**: Type safety across the entire application
- **ESBuild**: Fast JavaScript bundler for production builds

## Deployment Strategy

### Development Environment
- **Replit Integration**: Configured for Replit with proper module dependencies
- **Hot Reloading**: Automatic server and client updates during development
- **Port Configuration**: Client on port 5000, properly exposed for external access

### Production Build
- **Static Assets**: Vite builds optimized static files
- **Server Bundle**: ESBuild creates a single server bundle
- **Database Migrations**: Drizzle handles schema migrations
- **Environment Variables**: DATABASE_URL required for production database connection

### Replit Deployment
- **Autoscale Deployment**: Configured for Replit's autoscale deployment target
- **Build Process**: Automated build step before deployment
- **Module Dependencies**: Node.js 20, Web, and PostgreSQL 16 modules

## Changelog

```
Changelog:
- June 20, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```