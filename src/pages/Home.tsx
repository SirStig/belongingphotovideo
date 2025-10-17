import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Camera, Users } from 'lucide-react';
import { useCMS } from '../contexts/CMSContext';

const Home: React.FC = () => {
  const { cmsContent, albums } = useCMS();
  const featuredAlbums = albums.filter(album => album.featured).slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Image/Video */}
        <div className="absolute inset-0 z-0">
          <img
            src={cmsContent.hero.backgroundImage}
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            {cmsContent.hero.title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto"
          >
            {cmsContent.hero.subtitle}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/work"
              className="inline-flex items-center bg-white text-neutral-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-neutral-100 transition-colors duration-200 group"
            >
              {cmsContent.hero.ctaText}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-neutral-900">
                {cmsContent.about.title}
              </h2>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                {cmsContent.about.description}
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center">
                  <Heart className="text-primary-500 mr-3" size={24} />
                  <span className="font-medium">Authentic Stories</span>
                </div>
                <div className="flex items-center">
                  <Camera className="text-primary-500 mr-3" size={24} />
                  <span className="font-medium">Professional Quality</span>
                </div>
                <div className="flex items-center">
                  <Users className="text-primary-500 mr-3" size={24} />
                  <span className="font-medium">Diverse Perspectives</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="text-primary-500 mr-3" size={24} />
                  <span className="font-medium">Creative Vision</span>
                </div>
              </div>
              
              <Link
                to="/about"
                className="btn-secondary inline-flex items-center"
              >
                Learn More About Us
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={cmsContent.about.image}
                alt="About Belonging Photo + Video"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-500 text-white p-4 rounded-lg shadow-lg">
                <p className="font-semibold">Butho & Jenn</p>
                <p className="text-sm opacity-90">Creative Partners</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      {featuredAlbums.length > 0 && (
        <section className="py-20 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4 text-neutral-900">
                Featured Work
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Explore some of our favorite projects showcasing authentic branding and storytelling
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredAlbums.map((album, index) => (
                <motion.div
                  key={album.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={`/work/${album.id}`}
                    className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                      <img
                        src={album.coverImage}
                        alt={album.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-neutral-900 group-hover:text-primary-600 transition-colors">
                        {album.title}
                      </h3>
                      <p className="text-neutral-600 mb-4">
                        {album.description}
                      </p>
                      <span className="text-sm font-medium text-primary-600 uppercase tracking-wide">
                        {album.category}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link
                to="/work"
                className="btn-primary inline-flex items-center"
              >
                View All Work
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Tell Your Story?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's create something beautiful together. We'd love to hear about your vision and bring it to life.
            </p>
            <Link
              to="/contact"
              className="btn-primary bg-white text-neutral-900 hover:bg-neutral-100 inline-flex items-center"
            >
              Get In Touch
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
