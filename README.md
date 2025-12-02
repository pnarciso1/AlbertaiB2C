# Albert.ai Consumer Website

A responsive, conversion-optimized consumer-facing website for Albert.ai, built with React, Vite, and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with breakpoints for all screen sizes
- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **Component Library**: Custom UI components with Shadcn/ui integration
- **Firebase Hosting**: Configured for easy deployment
- **Accessibility**: WCAG 2.1 AA compliant design
- **Performance**: Optimized for fast loading and smooth interactions

## Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer, Layout wrapper
│   ├── home/            # Homepage sections
│   ├── assessment/      # Interactive assessment tool
│   ├── dashboard/       # User dashboard components
│   ├── shared/          # Reusable components
│   └── ui/              # Shadcn/ui components
├── pages/               # Route components
├── data/                # Mock data and content
├── utils/               # Utility functions
└── styles/              # Global styles and Tailwind config
```

## Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

The build output will be in the `dist` directory.

### Firebase Deployment

Firebase CLI is already installed as a dev dependency. Follow the detailed setup guide:

1. **Login to Firebase:**
   ```bash
   npm run firebase:login
   ```

2. **Initialize Firebase hosting:**
   ```bash
   npm run firebase:init
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

📖 **See [FIREBASE_SETUP.md](./FIREBASE_SETUP.md) for complete setup instructions.**

## Key Pages

- **Homepage**: Hero section, trust indicators, problem/solution sections, social proof
- **How It Works**: Interactive timeline, data sources diagram, privacy information
- **Aging In Place Score™**: Score explanation, visual scale, score ranges, case studies
- **Pricing**: Monthly subscription ($19.99/month), value comparison, FAQ
- **Resources**: Article library with 5 comprehensive articles, markdown content
- **About**: Company story, team bios, mission & values, awards & recognition
- **Support**: FAQ, support options, contact information, resource links
- **Privacy**: Privacy Policy and Terms of Service
- **Request Score**: Form to request an Aging In Place Score™ with Firestore integration

## Key Features

### Interactive Assessment Tool
- Multi-step questionnaire (7 steps)
- Progress tracking and validation
- Mock scoring algorithm
- Results display with recommendations
- Mobile-responsive design

### User Dashboard (Mock)
- Current score display with trends
- Interactive charts and metrics
- Alert center and notifications
- Data source status indicators
- Care team coordination tools

### Trust Elements
- HIPAA compliance badges
- Social proof and testimonials
- Real-time activity feed
- Media mentions and awards

## Styling

The project uses Tailwind CSS with a custom design system:

- **Primary Colors**: Orange (#f27607) for CTAs and highlights
- **Secondary Colors**: Teal (#14b8a6) for accents
- **Score Colors**: Green, yellow, orange, red for score ranges
- **Typography**: Inter font family
- **Spacing**: Consistent spacing scale
- **Animations**: Framer Motion for smooth interactions

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Build and deploy to Firebase

### Code Style

- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Component-based architecture
- Custom hooks for state management

## Current Status

The Albert.ai consumer website is now **LIVE AND DEPLOYED** with:

- ✅ **Complete Homepage** - Hero, Trust Indicators, Problem/Solution, Social Proof, CTA
- ✅ **Responsive Layout System** - Header, Footer, Navigation
- ✅ **Firebase Hosting LIVE** - Project: `albertai-dev`, Directory: `dist`
- ✅ **Professional Design System** - Tailwind CSS with custom colors and components
- ✅ **Build System Working** - TypeScript, Vite, successful builds
- ✅ **Hero Image Updated** - Perfect intergenerational family photo
- ✅ **All Core Pages Complete** - Home, How It Works, Aging In Place Score, Pricing, Resources, About, Support, Privacy
- ✅ **Request Score Page** - Form with Firestore integration for capturing score requests
- ✅ **Firebase Integration** - Firestore configured for form submissions
- ✅ **Updated CTAs** - All buttons now say "Request An Aging In Place Score"
- ✅ **DEPLOYMENT COMPLETE** - Website tested and live

## 🚀 LIVE WEBSITE

**Live URL**: `https://albertai-dev.web.app` ✅ **DEPLOYED & TESTED**

### Key URLs:
- Homepage: `https://albertai-dev.web.app/`
- Request Score: `https://albertai-dev.web.app/request-score`
- How It Works: `https://albertai-dev.web.app/how-it-works`
- Pricing: `https://albertai-dev.web.app/pricing`
- Resources: `https://albertai-dev.web.app/resources`
- Privacy: `https://albertai-dev.web.app/privacy`

The project is configured for Firebase Hosting with:

- SPA routing (all routes redirect to index.html)
- Build output in `dist` directory
- Firebase Firestore integration for form submissions
- Environment-specific configurations
- CDN for fast global delivery

### Firebase Configuration

- **Project**: `albertai-dev`
- **Firestore**: Enabled in production mode
- **Collection**: `scoreRequests` (stores form submissions)
- **Config**: Located in `src/config/firebase.ts`

📖 See [FIREBASE_SETUP.md](./FIREBASE_SETUP.md) for Firestore security rules and setup details.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary software for Albert.ai.