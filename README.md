# عَيْنًا سَلْسَبِيلًا (Ainaa) - Technical Documentation

![Ainaa Screenshot](./public/logo.svg)

## Project Overview

Ainaa is a comprehensive web application designed to provide internet protection and content filtering solutions for families, with a focus on protecting children from inappropriate content. The application offers various protection levels and setup guides for different devices including Windows, Android, and routers.

## Table of Contents

1. [Architecture](#architecture)
2. [Key Features](#key-features)
3. [Project Structure](#project-structure)
4. [Setup and Installation](#setup-and-installation)
5. [Configuration](#configuration)
6. [Protection Levels](#protection-levels)
7. [Device Support](#device-support)
8. [Component Documentation](#component-documentation)
9. [API Reference](#api-reference)
10. [Deployment](#deployment)
11. [collaboration](#collaboration)

## Architecture

Ainaa is built using Next.js 14, React 18, and TypeScript, with Tailwind CSS for styling. The application follows a component-based architecture with a focus on reusability and maintainability.

### Tech Stack

- **Frontend Framework**: Next.js 14.2.5
- **UI Library**: React 18.3.1
- **Styling**: Tailwind CSS 3.4.1
- **Language**: TypeScript
- **Icons**: React Icons, Radix UI Icons
- **Utilities**: clsx, tailwind-merge

## Key Features

- **Multi-level Protection**: Offers different protection levels (low and high) for various filtering needs
- **Multi-device Support**: Provides setup guides for Windows, Android, and router devices
- **DNS-based Filtering**: Uses custom DNS configurations for content filtering
- **Guided Setup**: Step-by-step instructions with embedded videos for easy implementation
- **Arabic Interface**: Fully localized in Arabic to serve the target audience
- **Responsive Design**: Works across mobile, tablet, and desktop devices

## Project Structure

The project follows Next.js App Router structure:

```
ainaa-web/
├── app/                    # Main application code
│   ├── _components/        # Shared components
│   ├── start/              # Device setup guide routes
│   │   └── [device]/       # Device-specific setup guides
│   │       └── [step]/     # Step-by-step instructions
│   ├── setupvalues/        # Protection levels information
│   ├── support/            # Customer support
│   ├── privacy/            # Privacy policy
│   └── layout.tsx          # Root layout
├── public/                 # Static assets
├── utils/                  # Utility functions
└── tailwind.config.ts      # Tailwind configuration
```

## Setup and Installation

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation Steps

1. Clone the repository:
   ```bash
   git clone git@github.com:mafazaa-org/ainaa-web.git
   cd ainaa-web
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Configuration

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
NEXT_PUBLIC_SITE_URL=https://ainaa.mafazaa.com
```

### Tailwind Configuration

The project uses custom colors defined in `tailwind.config.ts`:

```typescript
colors: {
  Red: "#E0462D",
  Red2: "#A73826",
  Text: "#353535",
  dark: "#1E1E1E",
  // Additional custom colors...
}
```

## Protection Levels

Ainaa offers two main protection levels:

### Low Protection

- Blocks basic inappropriate content
- Allows most regular content
- Suitable for adults and older teens
- DNS Configuration:
  - Primary DNS: [16.24.111.209]
  - Secondary DNS: [16.24.202.94]
  - DNS-Over-HTTPS: low.mafazaa.com

### High Protection

- Comprehensive protection against most inappropriate content
- Blocks social media, video platforms, and other potentially harmful content
- Suitable for children and younger teens
- DNS Configuration:
  - Primary DNS: [15.184.147.40]
  - Secondary DNS: [15.184.182.221]
  - DNS-Over-HTTPS: high.mafazaa.com

## Device Support

### Currently Supported Devices

- **Windows**: Full application with DNS configuration
- **Android**: Mobile application with DNS configuration
- **Router**: Network-level protection for all connected devices

### Upcoming Support

- iOS
- Linux

## Component Documentation

### Core Components

#### HeroSection

Displays a full-width hero section with title, description, and call-to-action buttons.

```typescript
<HeroSection
  className="bg-home-hero"
  title="Title text"
  description="Description text"
  button1={{ text: "Button 1", href: "/link" }}
  button2={{ text: "Button 2", handleClick: () => {} }}
/>
```

#### SetupValuesComponent

Displays the available protection levels with their features and DNS configurations.

#### DeviceCard

Displays a card for each supported device with an image and setup link.

#### Explanation

Modal component that shows important information about the protection service.

#### Footer

Contains links to important pages, support, and information about Mafazaa (the parent organization).

## API Reference

The application primarily uses static data defined in TypeScript files:

- `setupValuesData.ts`: Contains DNS configurations and features for each protection level
- `setupGuideData.ts`: Contains device-specific setup information
- `deviceData.ts`: Contains device parameters and embedded video links

## Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

### Deploy on Vercel

The easiest way to deploy the application is using Vercel:

1. Push your code to a Git repository (GitHub)
2. Import the project in Vercel
3. Configure environment variables
4. Deploy

## collaboration

### Development Workflow

1. Create a feature branch from `dev`
2. Make your changes
3. Run tests and ensure the application works correctly
4. Submit a pull request

### Coding Standards

- Follow the existing code style
- Use TypeScript for type safety
- Write meaningful commit messages
- Document new components and features# عَيْنًا سَلْسَبِيلًا (Ainaa) - Technical Documentation
