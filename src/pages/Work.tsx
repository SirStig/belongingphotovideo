import React from 'react';
import { motion } from 'framer-motion';
import { useCMS } from '../contexts/CMSContext';
import AlbumCard from '../components/AlbumCard';

const Work: React.FC = () => {
  const { albums, cmsContent } = useCMS();

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold mb-8 text-charcoal-900 heading-serif"
          >
            {cmsContent.portfolio.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-charcoal-600 max-w-4xl mx-auto leading-relaxed"
          >
            {cmsContent.portfolio.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Albums Grid */}
      <section className="py-24 bg-cream-50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          {albums.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-charcoal-600">No albums available at this time.</p>
            </div>
          ) : (
            // uniform grid: all albums same large size, like paulwashere.com
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-2">
              {albums.map((album, index) => (
                <AlbumCard key={album.id} album={album} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Work;