# 🎂 Kinju's Birthday Microsite

A stunning, romantic birthday celebration website built with love using React, TypeScript, and Framer Motion.

## ✨ Features

- **Romantic Design**: Rose, blush, and champagne color palette with elegant typography
- **Smooth Animations**: Framer Motion powered interactions and page transitions
- **Interactive Elements**: 
  - Confetti celebrations and fireworks
  - Typewriter effects and floating hearts
  - Smooth scrolling with Lenis
  - Music toggle with visual effects
- **Sections**:
  - Hero with animated greeting
  - Birthday countdown timer
  - Nepali love letter with floating fireflies
  - Animated poem with staggered reveals
  - Memory lane photo gallery with timeline
  - Interactive wish wall with local storage
- **Responsive**: Mobile-first design that works beautifully on all devices
- **Performance**: Optimized with lazy loading and efficient animations

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repository-url>
cd kinju-birthday

# Install dependencies
npm install

# Start development server
npm run dev
```

### Dependencies Installation (Alternative)
If starting from scratch:

```bash
npm create vite@latest kinju-birthday -- --template react-ts
cd kinju-birthday
npm i
npm i -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm i framer-motion canvas-confetti lenis lottie-react react-use
npm run dev
```

## 🎨 Design System

### Color Palette
- **Rose**: `#E11D48` - Primary romantic accent
- **Blush**: `#FCE7F3` - Soft pink backgrounds
- **Champagne**: `#F5E6C8` - Warm golden accents
- **Midnight**: `#0F172A` - Deep text color
- **Soft White**: `#FFFFFF` - Clean backgrounds

### Typography
- **Display Font**: Playfair Display (headings)
- **Body Font**: Inter (body text)

### Key Design Elements
- Glassmorphism cards with backdrop blur
- Romantic gradients and soft shadows
- Floating animations and particle effects
- Rounded corners (rounded-2xl) throughout
- Subtle grain texture overlay

## 🎯 Key Components

### Hero Section
- Full-screen gradient background with floating elements
- Typewriter effect for romantic subtitle
- CTA buttons with smooth scroll navigation
- Parallax effects and confetti triggers

### Countdown Timer
- Animated flip digits showing time until birthday
- Fireworks mode when it's the actual birthday
- Celebration button with canvas-confetti effects

### Nepali Love Letter
- Glass card with traditional Nepali birthday message
- Interactive fireflies animation on hover
- Elegant typography with cultural sensitivity

### Poem Section
- Staggered animation reveals for each stanza
- Floating heart decorations
- Page-turn style transitions

### Memory Lane
- Photo gallery with hover effects
- Timeline showing daily moments
- Masonry layout with smooth animations

### Wish Wall
- Interactive form for adding birthday wishes
- Local storage persistence
- Spring physics animations for new wishes
- Colorful sticky note design

## 🎵 Music Integration

The site includes a discrete music player:
- Auto-muted on load (respecting user preferences)
- Visual sound waves when playing
- Volume controls with localStorage persistence
- Fallback tone generation if audio files unavailable

## 🎨 Animations & Effects

### Framer Motion Variants
- Orchestrated section reveals with `staggerChildren`
- Hover effects and micro-interactions
- Page transition animations
- Spring physics for natural movement

### Canvas Confetti
- Multiple confetti styles (standard, hearts, fireworks)
- Celebration triggers throughout the site
- Performance-optimized particle effects

### Easter Eggs
- Press 'h' key for surprise heart burst
- Hidden animations on component interactions
- Sparkle effects on various elements

## 📱 Responsive Design

- Mobile-first approach with Tailwind CSS
- Breakpoint-specific layouts and typography
- Touch-friendly interactions
- Optimized performance across devices

## ⚡ Performance

- Lazy loading for images and components
- Efficient animation scheduling
- Minimal bundle size with tree-shaking
- Lighthouse score target: 95+ across all metrics

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel via CLI or GitHub integration
```

### Other Platforms
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## 🎁 Customization

To customize for different occasions:

1. **Colors**: Update CSS variables in `src/index.css`
2. **Content**: Modify text in component files
3. **Images**: Replace images in `src/assets/`
4. **Animations**: Adjust Framer Motion variants
5. **Typography**: Change font imports in `index.html`

## 💖 Love Notes

This site was hand-crafted with infinite love and attention to detail. Every animation, color choice, and interaction was designed to create a magical birthday experience that feels like a digital keepsake.

The Nepali text is included with cultural respect and authenticity, celebrating the beautiful tradition of expressing love in one's native language.

## 🔧 Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion, CSS transitions
- **Effects**: Canvas Confetti, Lenis smooth scroll
- **Storage**: LocalStorage via react-use
- **Icons**: Lucide React
- **Build**: Vite with optimizations

## 🤝 Contributing

This is a personal project, but feel free to use it as inspiration for your own romantic web creations!

## 📄 License

Created with ❤️ for Kinju. Use with love and attribution.

---

*"You make ordinary moments feel like miracles."* ✨