export interface Album {
  id: string;
  title: string;
  description?: string;
  coverImage: string;
  images: AlbumImage[];
  category: 'branding' | 'wedding' | 'portrait' | 'commercial';
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AlbumImage {
  id: string;
  url: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
  order: number;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  message: string;
  serviceType: 'branding' | 'wedding' | 'other';
  budget?: string;
  eventDate?: string;
  location?: string;
}

export interface CMSContent {
  hero: {
    title: string;
    subtitle: string;
    ctaText: string;
    backgroundImage: string;
    backgroundVideo?: string;
  };
  about: {
    title: string;
    description: string;
    image: string;
    highlights: string[];
  };
  portfolio: {
    title: string;
    subtitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    address: string;
  };
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'editor';
}

export interface AppMode {
  isDemo: boolean;
  isAuthenticated: boolean;
  user?: User;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonicalUrl?: string;
}
