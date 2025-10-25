import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone } from 'lucide-react';
import { useCMS } from '../contexts/CMSContext';

const Footer: React.FC = () => {
  const { cmsContent } = useCMS();

  return (
    <footer className="bg-cream-100 text-charcoal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Brand + Logo */}
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={`${import.meta.env.BASE_URL}assets/logo.png`}
                alt="Belonging Photo + Video"
                className="h-12 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>

            <p className="text-charcoal-700 mb-4">Capturing authentic brand stories through photography and videography.</p>

            <div className="flex space-x-4">
              <a
                href="https://instagram.com/belongingphotovideo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal-700 hover:text-accent-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={`mailto:${cmsContent.contact.email}`}
                className="text-charcoal-700 hover:text-accent-600 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href={`tel:${cmsContent.contact.phone}`}
                className="text-charcoal-700 hover:text-accent-600 transition-colors"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 heading-serif">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-charcoal-700 hover:text-accent-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-charcoal-700 hover:text-accent-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-charcoal-700 hover:text-accent-600 transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-charcoal-700 hover:text-accent-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 heading-serif">Get In Touch</h4>
            <div className="space-y-2 text-charcoal-700">
              <p>{cmsContent.contact.email}</p>
              <p>{cmsContent.contact.phone}</p>
              <p>{cmsContent.contact.address}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-cream-200 mt-8 pt-8 text-center text-charcoal-600">
          <p>&copy; {new Date().getFullYear()} Belonging Photo + Video. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
