import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useCMS } from '../contexts/CMSContext';
import AlbumCard from '../components/AlbumCard';

const Home: React.FC = () => {
  const { cmsContent, albums } = useCMS();
  const featuredAlbums = albums.filter(album => album.featured).slice(0, 4);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={cmsContent.hero.backgroundImage}
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-cream-50 max-w-5xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight heading-serif"
          >
            {cmsContent.hero.title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-10 opacity-95 max-w-3xl mx-auto font-light"
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
              className="inline-flex items-center bg-cream-50 text-charcoal-900 px-10 py-5 rounded-full font-semibold text-lg hover:bg-cream-100 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              {cmsContent.hero.ctaText}
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" size={22} />
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-11 border-2 border-cream-50/60 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-3 bg-cream-50/80 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* About Preview Section - Minimal with Image */}
      <section className="py-0 bg-cream-100">
        {/* Blended hero-to-about gradient */}
        <div className="h-20 bg-gradient-to-b from-charcoal-900/20 to-cream-100" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-6 text-charcoal-900 heading-serif"
              >
                Who We Are
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg text-charcoal-700 mb-8 leading-relaxed"
              >
                {cmsContent.about.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Link
                  to="/about"
                  className="inline-flex items-center btn-secondary"
                >
                  Learn Our Full Story
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://static.wixstatic.com/media/cec453_4f647a43bbcb4e58a90ef6b8499bf8ba~mv2.jpg/v1/crop/x_0,y_38,w_2316,h_2579/fill/w_842,h_938,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2135C048-A781-4412-8FCD-F78D9ABDC2EA-3.jpg"
                alt="Belonging Photo + Video"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-24 bg-cream-50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold mb-6 text-charcoal-900 heading-serif"
            >
              Recent Work
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-charcoal-600 max-w-3xl mx-auto"
            >
              Explore our latest brand photography projects showcasing authentic storytelling and creative vision
            </motion.p>
          </motion.div>

          {/* Featured Albums Grid - Exact match to Work page */}
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-2 mb-16">
            {featuredAlbums.map((album, index) => (
              <AlbumCard key={album.id} album={album} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              to="/work"
              className="inline-flex items-center btn-primary"
            >
              View All Work
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-24 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold mb-6 text-charcoal-900 heading-serif"
            >
              Follow Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-charcoal-600 max-w-3xl mx-auto mb-8"
            >
              Stay connected for daily inspiration and behind-the-scenes content
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              href="https://www.instagram.com/belongingphotovideo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center btn-secondary text-charcoal-900 border-charcoal-900 hover:bg-charcoal-900 hover:text-cream-50"
            >
              Visit @belongingphotovideo
              <ArrowRight className="ml-2" size={18} />
            </motion.a>
          </motion.div>

          {/* Instagram Feed */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, index) => (
              <motion.a
                key={index}
                href="https://www.instagram.com/belongingphotovideo"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="aspect-square bg-charcoal-900/5 hover:bg-charcoal-900/10 transition-all duration-300 rounded-sm flex items-center justify-center group"
              >
                <div className="text-center">
                  <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">📸</div>
                  <p className="text-sm text-charcoal-600">See on Instagram</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-charcoal-900 text-cream-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 heading-serif">
              Ready to Tell Your Brand Story?
            </h2>
            <p className="text-xl md:text-2xl mb-10 opacity-90 font-light leading-relaxed">
              Let's create something beautiful together. We'd love to hear about your vision and bring it to life through authentic visual storytelling.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-cream-50 text-charcoal-900 px-10 py-5 rounded-full font-semibold text-lg hover:bg-cream-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get In Touch
              <ArrowRight className="ml-3" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;