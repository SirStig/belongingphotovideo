import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone } from 'lucide-react';
import { useCMS } from '../contexts/CMSContext';

const Footer: React.FC = () => {
  const { cmsContent } = useCMS();

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Belonging Photo + Video</h3>
            <p className="text-neutral-300 mb-4">
              Capturing authentic stories and celebrating genuine connections through photography and videography.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/belongingphotovideo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={`mailto:${cmsContent.contact.email}`}
                className="text-neutral-300 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href={`tel:${cmsContent.contact.phone}`}
                className="text-neutral-300 hover:text-white transition-colors"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-neutral-300 hover:text-white transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-neutral-300">
              <p>{cmsContent.contact.email}</p>
              <p>{cmsContent.contact.phone}</p>
              <p>{cmsContent.contact.address}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-400">
          <p>&copy; {new Date().getFullYear()} Belonging Photo + Video. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
