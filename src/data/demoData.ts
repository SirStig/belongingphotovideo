import type { Album, CMSContent } from '../types/index.js';

export const demoAlbums: Album[] = [
  {
    id: '1',
    title: 'Brand Identity Shoot',
    description: 'Professional branding photography for a modern tech startup',
    coverImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop',
    category: 'branding',
    featured: true,
    createdAt: '2024-01-15',
    updatedAt: '2024-01-15',
    images: [
      {
        id: '1-1',
        url: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop',
        alt: 'Professional headshot',
        width: 800,
        height: 600,
        order: 1,
      },
      {
        id: '1-2',
        url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop',
        alt: 'Corporate portrait',
        width: 600,
        height: 800,
        order: 2,
      },
      {
        id: '1-3',
        url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop',
        alt: 'Team collaboration',
        width: 800,
        height: 500,
        order: 3,
      },
    ],
  },
  {
    id: '2',
    title: 'Product Photography',
    description: 'Elegant product shots for luxury lifestyle brand',
    coverImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
    category: 'commercial',
    featured: true,
    createdAt: '2024-01-10',
    updatedAt: '2024-01-10',
    images: [
      {
        id: '2-1',
        url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
        alt: 'Luxury product display',
        width: 800,
        height: 600,
        order: 1,
      },
      {
        id: '2-2',
        url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&h=700&fit=crop',
        alt: 'Product detail shot',
        width: 700,
        height: 700,
        order: 2,
      },
    ],
  },
  {
    id: '3',
    title: 'Creative Portraits',
    description: 'Artistic portrait session showcasing personality and style',
    coverImage: 'https://images.unsplash.com/photo-1494790108755-2616c6b6b0e0?w=800&h=600&fit=crop',
    category: 'portrait',
    featured: false,
    createdAt: '2024-01-05',
    updatedAt: '2024-01-05',
    images: [
      {
        id: '3-1',
        url: 'https://images.unsplash.com/photo-1494790108755-2616c6b6b0e0?w=800&h=600&fit=crop',
        alt: 'Creative portrait',
        width: 800,
        height: 600,
        order: 1,
      },
      {
        id: '3-2',
        url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=800&fit=crop',
        alt: 'Artistic portrait',
        width: 600,
        height: 800,
        order: 2,
      },
    ],
  },
];

// Hidden wedding albums (not shown in main navigation)
export const demoWeddingAlbums: Album[] = [
  {
    id: 'w1',
    title: 'Sarah & Michael',
    description: 'Romantic garden wedding celebration',
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
    category: 'wedding',
    featured: true,
    createdAt: '2024-01-20',
    updatedAt: '2024-01-20',
    images: [
      {
        id: 'w1-1',
        url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
        alt: 'Wedding ceremony',
        width: 800,
        height: 600,
        order: 1,
      },
      {
        id: 'w1-2',
        url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=600&h=800&fit=crop',
        alt: 'Couple portrait',
        width: 600,
        height: 800,
        order: 2,
      },
    ],
  },
];

export const demoCMSContent: CMSContent = {
  hero: {
    title: 'Capturing Stories That Belong',
    subtitle: 'Professional photography and videography celebrating authentic moments and genuine connections',
    ctaText: 'View Our Work',
    backgroundImage: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1920&h=1080&fit=crop',
  },
  about: {
    title: 'About Belonging Photo + Video',
    description: 'We are Butho and Jenn, a married interracial couple passionate about capturing authentic stories through our lens. Our unique perspective allows us to celebrate diversity, love, and genuine connections in every frame. We specialize in branding photography that showcases the authentic essence of individuals and businesses.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop',
    highlights: [
      'Authentic storytelling through photography',
      'Celebrating diversity and inclusion',
      'Professional branding photography',
      'Husband and wife creative team',
    ],
  },
  portfolio: {
    title: 'Our Work',
    subtitle: 'Discover our portfolio of branding and commercial photography',
  },
  contact: {
    title: 'Let\'s Create Together',
    subtitle: 'Ready to tell your story? We\'d love to hear from you.',
    email: 'hello@belongingphotovideo.com',
    phone: '(555) 123-4567',
    address: 'Los Angeles, CA',
  },
};
