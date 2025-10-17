import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useCMS } from '../contexts/CMSContext';

const Weddings: React.FC = () => {
  const { weddingAlbums } = useCMS();

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
            Wedding Photography
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8"
          >
            While we've shifted our focus to branding content, we still capture beautiful wedding moments for select clients. 
            Our experience as a married interracial couple brings a unique perspective to celebrating love in all its forms.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/contact"
              state={{ from: 'weddings' }}
              className="btn-primary inline-flex items-center"
            >
              Inquire About Wedding Photography
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Wedding Albums Grid */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {weddingAlbums.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-neutral-600 mb-8">
                Wedding portfolio coming soon. Contact us to discuss your special day.
              </p>
              <Link
                to="/contact"
                state={{ from: 'weddings' }}
                className="btn-primary"
              >
                Get In Touch
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {weddingAlbums.map((album, index) => (
                <motion.div
                  key={album.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <Link
                    to={`/weddings/${album.id}`}
                    className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {/* Album Cover */}
                    <div className="relative aspect-w-4 aspect-h-3 overflow-hidden">
                      <img
                        src={album.coverImage}
                        alt={album.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      {/* Hover Overlay */}
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
            </div>
          )}
        </div>
      </section>

      {/* Wedding Services Info */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-neutral-900">
              Wedding Photography Services
            </h2>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Our wedding photography approach focuses on authentic moments and genuine emotions. 
              As a married couple ourselves, we understand the importance of your special day and 
              work to capture the love, joy, and unique story of your celebration.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <h3 className="font-semibold text-neutral-900 mb-2">Engagement Sessions</h3>
                <p className="text-neutral-600 text-sm">
                  Get comfortable with us before your big day with a relaxed engagement shoot.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-neutral-900 mb-2">Full Day Coverage</h3>
                <p className="text-neutral-600 text-sm">
                  From getting ready to the last dance, we'll capture every important moment.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-neutral-900 mb-2">Diverse Celebrations</h3>
                <p className="text-neutral-600 text-sm">
                  We celebrate all types of love and are experienced with multicultural weddings.
                </p>
              </div>
            </div>
            
            <Link
              to="/contact"
              state={{ from: 'weddings' }}
              className="btn-primary inline-flex items-center"
            >
              Discuss Your Wedding
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Weddings;
