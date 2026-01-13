# LaunchLink

A showcase project for a blockchain-based platform connecting traders, developers, and promoters in the crypto launch ecosystem.

## Overview

LaunchLink is a Next.js application designed to demonstrate a platform where:
- **Traders** can discover pre-launch projects before they go live
- **Developers** can find marketers and launch their projects
- **Promoters** can build their reputation and connect with developers

## Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons, Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
launchlink/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Main landing page
│   ├── layout.tsx          # Root layout
│   └── [routes]/          # Additional pages
├── components/             # React components
│   ├── Footer.tsx         # Site footer
│   ├── NavBar.tsx         # Navigation bar
│   ├── HowItWorks/        # Interactive demo components
│   └── ui/                # UI components
├── lib/                   # Utility functions and actions
└── public/                # Static assets
```

## Features

- Interactive "How It Works" demonstrations
- User profile tabs for different user types
- Staking calculator
- Waitlist functionality
- Responsive design
- Modern UI with smooth animations

## Important Notice

⚠️ **This project is not currently being maintained and is not kept up-to-date.**

This project was originally developed for a client. This repository is now for showcase purposes only. The codebase may contain outdated dependencies, security vulnerabilities, or deprecated patterns. Use at your own discretion.

**Note**: The waitlist functionality will not work in the live demo site as the MongoDB database connection is not available. The waitlist form is displayed for visual purposes only.

## License

This project is for showcase purposes only.
