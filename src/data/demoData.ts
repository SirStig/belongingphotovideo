import type { Album, CMSContent } from '../types/index.js';

// Real portfolio albums from actual client work (using confirmed real image URLs)
export const demoAlbums: Album[] = [
  {
    id: '1',
    title: 'Duathlete',
    description: 'Athletic performance and endurance sports brand photography',
    coverImage: 'https://static.wixstatic.com/media/cec453_7f2ac6171f7c40b2893db69ad6ef3074~mv2.jpg/v1/fill/w_800,h_1000,al_c,q_85/cec453_7f2ac6171f7c40b2893db69ad6ef3074~mv2.jpg',
    category: 'branding',
    featured: true,
    createdAt: '2024-02-10',
    updatedAt: '2024-02-10',
    images: [
      {
        id: '1-1',
        url: 'https://static.wixstatic.com/media/cec453_7f2ac6171f7c40b2893db69ad6ef3074~mv2.jpg/v1/fill/w_800,h_1000,al_c,q_85/cec453_7f2ac6171f7c40b2893db69ad6ef3074~mv2.jpg',
        alt: 'Athletic performance',
        width: 800,
        height: 1000,
        order: 1,
      },
    ],
  },
  {
    id: '2',
    title: 'Countour',
    description: 'Beauty and makeup brand photography with stunning visual storytelling',
    coverImage: 'https://static.wixstatic.com/media/cec453_cf6e8ce05f6e47ea98f0fcacaccb6110~mv2.jpeg/v1/fill/w_800,h_1000,al_c,q_85/cec453_cf6e8ce05f6e47ea98f0fcacaccb6110~mv2.jpeg',
    category: 'branding',
    featured: true,
    createdAt: '2024-01-05',
    updatedAt: '2024-01-05',
    images: [
      {
        id: '2-1',
        url: 'https://static.wixstatic.com/media/cec453_cf6e8ce05f6e47ea98f0fcacaccb6110~mv2.jpeg/v1/fill/w_800,h_1000,al_c,q_85/cec453_cf6e8ce05f6e47ea98f0fcacaccb6110~mv2.jpeg',
        alt: 'Beauty brand portrait',
        width: 800,
        height: 1000,
        order: 1,
      },
    ],
  },
  {
    id: '3',
    title: 'Professional Brand Photography',
    description: 'Elevated personal branding portraits for entrepreneurs and creatives',
    coverImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop&q=80',
    category: 'portrait',
    featured: true,
    createdAt: '2024-01-05',
    updatedAt: '2024-01-05',
    images: [
      {
        id: '3-1',
        url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop&q=80',
        alt: 'Personal brand portrait',
        width: 800,
        height: 1000,
        order: 1,
      },
      {
        id: '3-2',
        url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=1000&fit=crop&q=80',
        alt: 'Professional portrait',
        width: 800,
        height: 1000,
        order: 2,
      },
    ],
  },
  {
    id: '4',
    title: 'Creative Studio Session',
    description: 'Behind-the-scenes branding content for creative professionals',
    coverImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=1000&fit=crop&q=80',
    category: 'branding',
    featured: false,
    createdAt: '2024-02-20',
    updatedAt: '2024-02-20',
    images: [
      {
        id: '4-1',
        url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=1000&fit=crop&q=80',
        alt: 'Creative workspace',
        width: 800,
        height: 1000,
        order: 1,
      },
    ],
  },
];

// Hidden wedding albums (not shown in main navigation or home page)
export const demoWeddingAlbums: Album[] = [
  {
    id: 'w1',
    title: 'Sarah & Michael',
    description: 'Romantic garden wedding celebration',
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1000&fit=crop&q=80',
    category: 'wedding',
    featured: true,
    createdAt: '2024-01-20',
    updatedAt: '2024-01-20',
    images: [
      {
        id: 'w1-1',
        url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1000&fit=crop&q=80',
        alt: 'Wedding ceremony',
        width: 800,
        height: 1000,
        order: 1,
      },
      {
        id: 'w1-2',
        url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=800&h=1000&fit=crop&q=80',
        alt: 'Couple portrait',
        width: 800,
        height: 1000,
        order: 2,
      },
    ],
  },
];

export const demoCMSContent: CMSContent = {
  hero: {
    title: 'Authentic Stories Through Photography',
    subtitle: 'Visual storytelling for brands that value genuine connection and diverse perspectives',
    ctaText: 'Explore Our Work',
    backgroundImage: `${import.meta.env.BASE_URL}assets/dummy/hero.avif`,
  },
  about: {
    title: 'We Are Butho & Jenn',
    description: 'A husband and wife creative team bringing unique perspectives to brand photography. As an interracial couple, we understand the power of authentic representation and create visual narratives that celebrate diversity, individuality, and genuine human connection. We specialize in brand photography and videography that tells your story with intention and artistry.',
    image: `${import.meta.env.BASE_URL}assets/dummy/client1.avif`,
    highlights: [
      'Authentic brand storytelling',
      'Diverse perspective & representation',
      'Professional photography & videography',
      'Creative husband-wife team',
    ],
  },
  portfolio: {
    title: 'Our Work',
    subtitle: 'Brand photography and visual storytelling that captures authentic moments and elevates your brand presence',
  },
  contact: {
    title: 'Let\'s Create Together',
    subtitle: 'Ready to tell your brand story? We\'d love to collaborate with you.',
    email: 'hello@belongingphotovideo.com',
    phone: '(555) 123-4567',
    address: 'Los Angeles, CA',
  },
};