import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import type { Album } from '../types/index.js';

interface AlbumCardProps {
  album: Album;
  index?: number;
  className?: string;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ album, index = 0, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isHovered && album.images.length > 1) {
      // slower slide for a calmer, more premium feel
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % album.images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
    // reset to cover when not hovered
    setCurrentImageIndex(0);
  }, [isHovered, album.images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className={`group ${className}`}
    >
      <Link
        to={`/work/${album.id}`}
        className="block relative overflow-hidden hover:shadow-lg transition-all duration-500 aspect-[16/9]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={album.title}
      >
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            {isHovered ? (
              <motion.div
                key={currentImageIndex}
                // intentionally larger x values and longer duration for a slower, more cinematic slide
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 1.9, ease: 'easeInOut' }}
                className="w-full h-full"
              >
                <img
                  src={album.images[currentImageIndex]?.url || album.coverImage}
                  alt={album.images[currentImageIndex]?.alt || album.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ) : (
              <motion.img
                key="cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
                src={album.coverImage}
                alt={album.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-900"
              />
            )}
          </AnimatePresence>
        </div>

        {/* Dark overlay + centered title */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className={`absolute inset-0 transition-opacity duration-300 ${isHovered ? 'bg-black/55' : 'bg-black/40'}`}
          />
          <h3 className="relative text-2xl md:text-3xl font-bold text-cream-50 text-center px-6 heading-serif">
            {album.title}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
};

export default AlbumCard;
