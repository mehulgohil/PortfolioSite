# Portfolio Web Application

## Overview

This is a modern full-stack portfolio website built with React, TypeScript, and Express.js. The application showcases a developer's professional profile with sections for about, skills, projects, experience, and contact information. It features a contact form that allows visitors to send messages, which are stored and can be retrieved for administrative purposes.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible design
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **State Management**: TanStack Query (React Query) for server state management and API interactions
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for REST API endpoints
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Validation**: Zod schemas for request validation and type inference
- **Storage**: Dual storage implementation with in-memory storage for development and database storage for production
- **Session Management**: Express sessions with PostgreSQL session store

### Database Schema
- **Users Table**: Basic user authentication structure with username and password fields
- **Contact Messages Table**: Stores visitor inquiries with personal details, subject, message content, and timestamps
- **Schema Management**: Drizzle migrations for version-controlled database changes

### Development Setup
- **Monorepo Structure**: Shared schema definitions between client and server for consistent typing
- **Development Server**: Vite dev server with HMR (Hot Module Replacement) for frontend development
- **API Integration**: Custom fetch wrapper with error handling and authentication support
- **TypeScript Configuration**: Unified TypeScript setup with path mapping for clean imports

### Build and Deployment
- **Frontend Build**: Vite builds the React application to static assets
- **Backend Build**: esbuild bundles the Express server for production deployment
- **Environment Configuration**: Environment-based configuration for development and production modes

## External Dependencies

### Core Technologies
- **@neondatabase/serverless**: Neon database driver for PostgreSQL connectivity
- **drizzle-orm**: Type-safe ORM for database operations and migrations
- **@tanstack/react-query**: Server state management and data fetching library
- **wouter**: Lightweight routing library for React applications

### UI and Styling
- **@radix-ui/react-***: Collection of unstyled, accessible UI primitives
- **tailwindcss**: Utility-first CSS framework for rapid UI development
- **class-variance-authority**: Utility for creating variant-based component APIs
- **cmdk**: Command palette component for enhanced user interactions

### Development Tools
- **vite**: Build tool and development server with fast HMR
- **typescript**: Type checking and enhanced developer experience
- **esbuild**: Fast JavaScript bundler for production builds
- **@replit/vite-plugin-***: Replit-specific development plugins for enhanced debugging

### Form and Validation
- **react-hook-form**: Performant forms library with minimal re-renders
- **@hookform/resolvers**: Integration between react-hook-form and validation libraries
- **zod**: Schema validation library for type-safe data validation
- **zod-validation-error**: User-friendly error formatting for Zod validation failures

### Utilities
- **date-fns**: Modern JavaScript date utility library
- **lucide-react**: Icon library with React components
- **clsx**: Utility for constructing className strings conditionally