# Belonging Photo + Video Website

A modern, professional website for Belonging Photo + Video - a photography and videography business specializing in branding content and authentic storytelling.

## Features

### 🎨 Modern Design
- Clean, professional aesthetic
- Responsive design for all devices
- Smooth animations with Framer Motion
- Optimized for performance and SEO

### 📸 Portfolio Management
- Dynamic album/portfolio system
- Masonry grid layout for images
- Lightbox gallery with navigation
- Category filtering (branding, commercial, portrait)

### 🔒 Content Management System (CMS)
- Demo mode with sample content
- Admin panel for content editing
- Album management with drag-and-drop (planned)
- SEO meta tag management

### 🎯 Business Focus
- Emphasis on branding photography
- Hidden wedding portfolio pages (`/weddings`)
- Contact forms tailored by service type
- Authentic storytelling approach

### 🌈 Inclusive Design
- Celebrates diversity and authentic connections
- Showcases the unique perspective of an interracial couple
- Professional yet personal branding

## Technology Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **State Management**: React Context API

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd belongingphotovideo
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   ├── Layout.tsx      # Main layout wrapper
│   └── SEOHead.tsx     # SEO meta tag management
├── pages/              # Page components
│   ├── Home.tsx        # Homepage with hero section
│   ├── About.tsx       # About page
│   ├── Work.tsx        # Portfolio/work page
│   ├── AlbumDetail.tsx # Individual album view
│   ├── Contact.tsx     # Contact form
│   ├── Weddings.tsx    # Hidden wedding portfolio
│   ├── Admin.tsx       # Admin panel
│   └── NotFound.tsx    # 404 page
├── contexts/           # React contexts
│   └── CMSContext.tsx  # Content management state
├── data/               # Demo data and content
│   └── demoData.ts     # Sample albums and content
├── types/              # TypeScript type definitions
│   └── index.ts        # All type definitions
├── utils/              # Utility functions
└── hooks/              # Custom React hooks
```

## Key Features

### Demo Mode
The application includes a demo mode that showcases the design and functionality with sample data. This allows clients to see the website in action before adding their real content.

### Hidden Routes
Wedding portfolios are accessible via direct URLs (`/weddings`) but are not linked in the main navigation, allowing the business to focus on branding while still showcasing wedding work to interested clients.

### Responsive Design
The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

### SEO Optimization
- Dynamic meta tags for each page
- Open Graph and Twitter Card support
- Semantic HTML structure
- Optimized images with alt text
- Clean URLs and proper heading hierarchy

## Admin Panel

Access the admin panel at `/admin` to:
- View dashboard statistics
- Manage content (demo)
- View album management interface
- Toggle between demo and production modes

**Note**: In production, this would integrate with Google OAuth for secure authentication.

## Future Enhancements

- Google OAuth integration for admin authentication
- Cloud image storage and upload functionality
- Advanced album management with drag-and-drop
- Email contact form integration
- Analytics and performance tracking
- Blog/news section
- Client gallery access with password protection

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

This is a custom website for Belonging Photo + Video. For any issues or feature requests, please contact the development team.

## License

Private project - All rights reserved.