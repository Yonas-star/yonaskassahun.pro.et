# 🚀 Next.js 14 + Three.js + Tailwind CSS Starter

A clean, production-ready starter template for interactive 3D web experiences.

## 📦 What's Included

- **Framework:** Next.js 14 (App Router) + React 18 + TypeScript
- **3D Engine:** Three.js + `@react-three/fiber` + `@react-three/drei`
- **Styling:** Tailwind CSS + PostCSS + Autoprefixer
- **UI & Animation:** Lucide React + Framer Motion
- **Starter Canvas:** `src/components/canvas/Scene3D.tsx` (Interactive 3D WebGL scene with mouse tracking)

## 🛠️ Quick Start

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── globals.css      # Base Tailwind styles
│   │   ├── layout.tsx       # Root HTML layout
│   │   └── page.tsx         # Main entry page
│   └── components/
│       └── canvas/
│           └── Scene3D.tsx  # Starter Three.js interactive canvas
├── next.config.mjs          # Next.js configuration (Three.js transpiled)
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json
```
