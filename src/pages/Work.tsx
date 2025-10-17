import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCMS } from '../contexts/CMSContext';

const Work: React.FC = () => {
  const { albums, cmsContent } = useCMS();
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { key: 'all', label: 'All Work' },
    { key: 'branding', label: 'Branding' },
    { key: 'commercial', label: 'Commercial' },
    { key: 'portrait', label: 'Portrait' },
  ];

  const filteredAlbums = filter === 'all' 
    ? albums 
    : albums.filter(album => album.category === filter);

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-6 text-neutral-900"
          >
            {cmsContent.portfolio.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-neutral-600 max-w-3xl mx-auto"
          >
            {cmsContent.portfolio.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-neutral-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setFilter(category.key)}
                className={`
                  px-6 py-3 rounded-full font-medium transition-all duration-200
                  ${filter === category.key
                    ? 'bg-neutral-900 text-white'
                    : 'bg-white text-neutral-600 hover:bg-neutral-100'
                  }
                `}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Albums Grid */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredAlbums.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-neutral-600">
                No albums found for the selected category.
              </p>
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredAlbums.map((album, index) => (
                <motion.div
                  key={album.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Link
                    to={`/work/${album.id}`}
                    className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {/* Album Cover with Hover Effect */}
                    <div className="relative aspect-w-4 aspect-h-3 overflow-hidden">
                      <img
                        src={album.coverImage}
                        alt={album.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      {/* Hover Overlay with Additional Images */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="flex space-x-2">
                            {album.images.slice(1, 4).map((image, imgIndex) => (
                              <div
                                key={image.id}
                                className={`w-12 h-12 rounded overflow-hidden border-2 border-white ${
                                  imgIndex === 0 ? 'hover-image-stack-1' : 
                                  imgIndex === 1 ? 'hover-image-stack-2' : 
                                  'hover-image-stack-3'
                                }`}
                              >
                                <img
                                  src={image.url}
                                  alt=""
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-white bg-opacity-90 text-neutral-900 px-3 py-1 rounded-full text-sm font-medium">
                          {album.category}
                        </span>
                      </div>
                      
                      {/* Featured Badge */}
                      {album.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Album Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-neutral-900 group-hover:text-primary-600 transition-colors">
                        {album.title}
                      </h3>
                      <p className="text-neutral-600 mb-4 line-clamp-2">
                        {album.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-neutral-500">
                          {album.images.length} {album.images.length === 1 ? 'image' : 'images'}
                        </span>
                        <span className="text-sm font-medium text-primary-600 group-hover:text-primary-700 transition-colors">
                          View Album →
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Work;
