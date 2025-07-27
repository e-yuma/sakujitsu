# Sakujitsu Portfolio

A high-performance, modern portfolio website built with Next.js 15, React 19, and TypeScript. Optimized for mobile performance and SEO.

## 🚀 Features

- **High Performance**: Optimized for Core Web Vitals
- **Mobile-First**: Responsive design with touch gestures
- **SEO Optimized**: Structured data, meta tags, and sitemap
- **LLMO Ready**: Semantic HTML and structured data
- **Modern UI/UX**: Smooth animations and interactions
- **TypeScript**: Full type safety
- **Accessibility**: WCAG compliant

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion + React Spring
- **Gestures**: @use-gesture/react
- **Icons**: Lucide React
- **Performance**: Core Web Vitals monitoring

## 📦 Performance Optimizations

- **Image Optimization**: WebP/AVIF formats with blur placeholders
- **Font Loading**: Optimized Google Fonts with display=swap
- **Code Splitting**: Automatic component-level splitting
- **Bundle Optimization**: Tree shaking and minification
- **Caching**: Static assets with long-term caching
- **Lazy Loading**: Intersection Observer for animations

## 🏗 Project Structure

```
sakujitsu/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main page component
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Works.tsx         # Works section
│   ├── Music.tsx         # Music section
│   └── [subcomponents]/  # Component-specific files
├── hooks/                # Custom React hooks
│   ├── useDrag.ts        # Drag functionality
│   ├── useSwipeNavigation.ts # Swipe navigation
│   └── useWindowSize.ts  # Window size management
├── data/                 # Static data
│   ├── social.ts         # Social media accounts
│   ├── projects.ts       # Project data
│   ├── skills.ts         # Skills data
│   └── tracks.ts         # Music tracks
├── types/                # TypeScript definitions
├── utils/                # Utility functions
│   ├── animations.ts     # Animation configurations
│   └── fonts.ts          # Font configurations
└── public/               # Static assets
    ├── assets/           # Images and media
    ├── robots.txt        # SEO robots file
    └── sitemap.xml       # SEO sitemap
```

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/sakujitsu.git
   cd sakujitsu
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📊 Performance Metrics

- **LCP**: < 2.5s (Largest Contentful Paint)
- **FID**: < 100ms (First Input Delay)
- **CLS**: < 0.1 (Cumulative Layout Shift)
- **Bundle Size**: < 200KB (gzipped)
- **Lighthouse Score**: 95+ (Performance, Accessibility, SEO, Best Practices)

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues

### Code Quality

- **ESLint**: Next.js recommended configuration
- **TypeScript**: Strict mode enabled
- **Prettier**: Code formatting
- **Husky**: Git hooks for quality checks

## 🌐 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables if needed
3. Deploy automatically on push to main branch

### Other Platforms

The app is optimized for any Node.js hosting platform:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📱 Mobile Optimization

- **Touch Gestures**: Swipe navigation between sections
- **Responsive Design**: Mobile-first approach
- **Performance**: Optimized for low-end devices
- **Accessibility**: Touch-friendly interface

## 🔍 SEO & LLMO Features

- **Structured Data**: JSON-LD for search engines
- **Meta Tags**: Open Graph and Twitter Cards
- **Sitemap**: XML sitemap for crawlers
- **Robots.txt**: Search engine directives
- **Semantic HTML**: Proper heading hierarchy
- **Alt Text**: Descriptive image alt attributes

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Contact

- **Portfolio**: [sakujitsu.com](https://sakujitsu.com)
- **Instagram**: [@sakujitsu\_](https://instagram.com/sakujitsu_)
- **X**: [@saku*jitsu*](https://x.com/saku_jitsu_)
- **TikTok**: [@sakujitu](https://tiktok.com/@sakujitu)
