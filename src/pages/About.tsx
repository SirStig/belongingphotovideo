import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Camera, Users, Award } from 'lucide-react';
import { useCMS } from '../contexts/CMSContext';

const About: React.FC = () => {
  const { cmsContent } = useCMS();

  const values = [
    {
      icon: Heart,
      title: 'Authentic Love',
      description: 'We believe in capturing genuine emotions and real moments that tell your unique story.',
    },
    {
      icon: Users,
      title: 'Diverse Perspectives',
      description: 'As an interracial couple, we bring unique insights to celebrating diversity and inclusion.',
    },
    {
      icon: Camera,
      title: 'Professional Excellence',
      description: 'Years of experience and technical expertise ensure the highest quality results.',
    },
    {
      icon: Award,
      title: 'Creative Vision',
      description: 'We combine artistic vision with storytelling to create compelling visual narratives.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section - Centered Title */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-charcoal-900 heading-serif"
          >
            {cmsContent.about.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed"
          >
            {cmsContent.about.description}
          </motion.p>
        </div>
      </section>

      {/* Large Image Section - Full Screen */}
      <section className="bg-cream-100">
        <div className="relative max-w-full mx-auto px-0 pb-0 h-screen flex items-center justify-center">
          <img
            src={cmsContent.about.image}
            alt="Butho and Jenn - Belonging Photo + Video"
            className="w-full h-full object-cover"
          />
          {/* Text overlay fade into image */}
          <div className="absolute inset-0 bg-gradient-to-b from-cream-100 via-transparent to-transparent pointer-events-none" />
        </div>
      </section>

      {/* About Content - Full Width Sections */}
      <section className="py-32 bg-cream-50">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-8 text-charcoal-900 heading-serif"
            >
              Our Story
            </motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl leading-relaxed text-charcoal-700"
              >
                Belonging Photo + Video was born from our shared passion for storytelling and our unique perspective as a married interracial couple. We understand the importance of representation and the power of authentic imagery in today's world.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl leading-relaxed text-charcoal-700"
              >
                Our journey began when we realized that many brands and individuals were seeking photographers who could capture not just beautiful images, but meaningful stories that resonate with diverse audiences. We saw an opportunity to fill this gap while celebrating the beauty of authentic connections.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section - Full Width */}
      <section className="py-32 bg-cream-100">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4 text-charcoal-900 heading-serif"
            >
              Our Values
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-cream-50 p-8"
              >
              <motion.div
                className="inline-flex items-center justify-center w-14 h-14 bg-accent-500 text-cream-50 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
                viewport={{ once: true }}
              >
                <value.icon size={28} />
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                viewport={{ once: true }}
                className="text-xl font-semibold mb-4 text-charcoal-900"
              >
                {value.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
                className="text-charcoal-600 leading-relaxed"
              >
                {value.description}
              </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 bg-cream-50">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
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
              className="text-4xl md:text-5xl font-bold mb-12 text-charcoal-900 heading-serif"
            >
              Our Experience
            </motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl leading-relaxed text-charcoal-700"
              >
                Today, we specialize in branding photography that goes beyond the surface. We work with businesses and individuals who value authenticity, diversity, and genuine human connection. Every project is an opportunity to showcase the real stories behind the brands we work with.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl leading-relaxed text-charcoal-700"
              >
                While we've shifted our focus to branding content, our experience in wedding photography has taught us the importance of capturing those fleeting, precious moments that tell a complete story. This experience informs every shoot we do, whether it's a corporate headshot or a brand campaign.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section - Full Width */}
      <section className="py-32 bg-cream-100">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4 text-charcoal-900 heading-serif"
            >
              Why Work With Us
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cmsContent.about.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start bg-cream-50 p-8"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.1 }}
                  viewport={{ once: true }}
                  className="w-3 h-3 bg-accent-500 mr-6 flex-shrink-0 mt-2"
                />
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="text-lg md:text-xl text-charcoal-700 leading-relaxed"
                >
                  {highlight}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-charcoal-900 text-cream-50">
        <div className="max-w-6xl mx-auto text-center px-8 sm:px-12 lg:px-16">
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
              className="text-4xl font-bold mb-6 heading-serif"
            >
              Let's Create Something Beautiful Together
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl mb-8 opacity-90"
            >
              We'd love to learn about your story and help you share it with the world through compelling visual content.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-primary bg-cream-50 text-charcoal-900 hover:bg-cream-100"
              >
                Start a Project
              </a>
              <a
                href="/work"
                className="btn-secondary border-cream-50 text-cream-50 hover:bg-cream-50 hover:text-charcoal-900"
              >
                View Our Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
