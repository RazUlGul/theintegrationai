# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Development server**: `npm run dev` - Starts Next.js development server with Turbopack for faster builds
- **Build**: `npm run build` - Creates optimized production build
- **Start**: `npm run start` - Starts production server
- **Lint**: `npm run lint` - Runs Next.js built-in ESLint configuration
- **Install dependencies**: `npm install`

## Architecture

This is a **Next.js 15 + React 19 + TypeScript** AI integrations company website with the following structure:

### Core Stack
- **Framework**: Next.js 15 with App Router
- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4 with custom CSS modules
- **Build Tool**: Turbopack (Next.js native)
- **HTTP Client**: Axios for API requests
- **Icons**: React Icons
- **Animations**: React Spring
- **Video**: Cloudflare Stream React component

### Directory Structure
```
app/
├── api/                 # Next.js API routes
│   ├── book/           # Cal.com booking integration
│   ├── cal/            # Calendar API endpoints
│   ├── pandadoc/       # PandaDoc integration
│   ├── plan/           # Subscription/plan management
│   └── voiceflow/      # Voiceflow chatbot integration
├── fonts/              # Custom Agrandir font family
├── globals.css         # Global styles and Tailwind config
├── layout.tsx          # Root layout component
└── page.tsx            # Homepage component

components/
├── footer/             # Footer component with styles
├── form/               # Booking form components
├── hero/               # Hero section with interactive elements
│   ├── chat.tsx        # Chat interface component
│   ├── nova.tsx        # Nova AI assistant sections
│   └── vanishinput.tsx # Animated input component
└── nav/                # Navigation component

public/                 # Static assets (logos, images, robots)
```

### Key Features
- **AI-Focused Landing Page**: Promotes "Nova" AI assistant for business automation
- **Multiple Integrations**: Cal.com, PandaDoc, Voiceflow APIs
- **Custom Design System**: Agrandir font family with custom CSS modules
- **Interactive Elements**: Animated inputs, chat interfaces, spring animations
- **Booking System**: Integrated appointment scheduling with Cal.com
- **Modern Performance**: Next.js 15 with Turbopack, React 19

### API Integrations
- **Cal.com**: `/api/book` and `/api/cal` for appointment scheduling
- **PandaDoc**: `/api/pandadoc` for document automation
- **Voiceflow**: `/api/voiceflow` for conversational AI
- **Custom Plans**: `/api/plan` for subscription management

### Business Focus
This is a **business automation platform** that positions AI agents as solutions for:
- Cost reduction and time savings
- Business scaling through automation
- Meaningful, measurable results beyond simple task completion
- Integration with existing business tools (calendars, documents, chat)

## Development Notes

- Uses Next.js App Router (not Pages Router)
- Turbopack enabled for faster development builds
- React 19 features available (concurrent features, automatic batching)
- Tailwind CSS 4 with PostCSS configuration
- Custom font loading with `next/font` optimization
- Component-scoped CSS modules alongside Tailwind
- TypeScript strict mode with Next.js configuration