import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useCMS } from '../contexts/CMSContext';

interface HeaderProps {
  transparent?: boolean;
}

const Header: React.FC<HeaderProps> = ({ transparent = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useCMS();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    if (transparent) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [transparent]);

  const headerClasses = `
    fixed top-0 left-0 right-0 z-50 transition-all duration-300
    ${transparent && !isScrolled
      ? 'bg-transparent'
      : // if on the About or Work page, match the page cream so header blends seamlessly; no shadow or border
        (location.pathname.startsWith('/work') || location.pathname.startsWith('/about') ? 'bg-cream-100' : 'bg-cream-50')
    }
  `;

  const textClasses = `
    transition-colors duration-300
    ${transparent && !isScrolled
      ? 'text-cream-50'
      : 'text-charcoal-900'
    }
  `;

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Work', href: '/work' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header className={headerClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={`${import.meta.env.BASE_URL}assets/logo.png`}
              alt="Belonging Photo + Video" 
              className="h-12 w-auto"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'block';
              }}
            />
            <span className={`hidden text-xl font-bold heading-serif ${textClasses}`}>
              Belonging Photo + Video
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`
                  font-medium transition-colors duration-200 relative
                  ${textClasses}
                  ${isActiveLink(item.href) 
                    ? 'opacity-100' 
                    : 'opacity-70 hover:opacity-100'
                  }
                `}
              >
                {item.name}
                {isActiveLink(item.href) && (
                  <motion.div
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                      transparent && !isScrolled ? 'bg-cream-50' : 'bg-accent-500'
                    }`}
                    layoutId="activeLink"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${textClasses}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden ${location.pathname.startsWith('/work') || location.pathname.startsWith('/about') ? 'bg-cream-100' : 'bg-cream-50'}`}
          >
            <div className="px-4 py-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`
                    block font-medium text-charcoal-900 transition-colors duration-200
                    ${isActiveLink(item.href) 
                      ? 'opacity-100 text-accent-600' 
                      : 'opacity-70 hover:opacity-100'
                    }
                  `}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
