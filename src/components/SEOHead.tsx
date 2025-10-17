import React from 'react';
import { useLocation } from 'react-router-dom';
import { useCMS } from '../contexts/CMSContext';

const SEOHead: React.FC = () => {
  const location = useLocation();
  const { cmsContent } = useCMS();

  const getPageSEO = () => {
    const baseUrl = 'https://belongingphotovideo.com';
    
    switch (location.pathname) {
      case '/':
        return {
          title: 'Belonging Photo + Video - Professional Photography & Videography',
          description: 'Professional photography and videography celebrating authentic moments and genuine connections. Specializing in branding content and commercial photography.',
          keywords: ['photography', 'videography', 'branding', 'commercial photography', 'professional photographer'],
          canonicalUrl: baseUrl,
        };
      case '/about':
        return {
          title: 'About Us - Belonging Photo + Video',
          description: 'Meet Butho and Jenn, a married interracial couple passionate about capturing authentic stories through photography and videography.',
          keywords: ['about', 'photographers', 'interracial couple', 'authentic photography'],
          canonicalUrl: `${baseUrl}/about`,
        };
      case '/work':
        return {
          title: 'Our Work - Belonging Photo + Video Portfolio',
          description: 'Explore our portfolio of professional branding photography, commercial work, and authentic storytelling through images.',
          keywords: ['portfolio', 'photography portfolio', 'branding photography', 'commercial photography'],
          canonicalUrl: `${baseUrl}/work`,
        };
      case '/contact':
        return {
          title: 'Contact - Belonging Photo + Video',
          description: 'Ready to tell your story? Contact Belonging Photo + Video for professional photography and videography services.',
          keywords: ['contact', 'photography services', 'hire photographer', 'branding photography'],
          canonicalUrl: `${baseUrl}/contact`,
        };
      default:
        return {
          title: 'Belonging Photo + Video',
          description: 'Professional photography and videography services',
          keywords: ['photography', 'videography'],
          canonicalUrl: baseUrl,
        };
    }
  };

  const seo = getPageSEO();

  React.useEffect(() => {
    // Update document title
    document.title = seo.title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', seo.description);

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', seo.keywords.join(', '));

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', seo.canonicalUrl);

    // Update Open Graph tags
    const ogTags = [
      { property: 'og:title', content: seo.title },
      { property: 'og:description', content: seo.description },
      { property: 'og:url', content: seo.canonicalUrl },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Belonging Photo + Video' },
    ];

    ogTags.forEach(({ property, content }) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute('content', content);
    });

    // Update Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: seo.title },
      { name: 'twitter:description', content: seo.description },
    ];

    twitterTags.forEach(({ name, content }) => {
      let twitterTag = document.querySelector(`meta[name="${name}"]`);
      if (!twitterTag) {
        twitterTag = document.createElement('meta');
        twitterTag.setAttribute('name', name);
        document.head.appendChild(twitterTag);
      }
      twitterTag.setAttribute('content', content);
    });
  }, [location.pathname, seo]);

  return null;
};

export default SEOHead;
