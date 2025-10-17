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
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold mb-6 text-neutral-900">
                {cmsContent.about.title}
              </h1>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                {cmsContent.about.description}
              </p>
              
              <div className="space-y-4">
                {cmsContent.about.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="flex items-center"
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-4" />
                    <span className="text-neutral-700">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src={cmsContent.about.image}
                alt="Butho and Jenn - Belonging Photo + Video"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-neutral-900 text-white p-6 rounded-lg shadow-lg">
                <p className="font-semibold text-lg">Butho & Jenn</p>
                <p className="text-sm opacity-90">Creative Partners in Life & Work</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-neutral-900">
              Our Values
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              These core values guide everything we do, from the way we approach each project to how we connect with our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                  <value.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-neutral-900">
                  {value.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6 text-neutral-900">
              Our Story
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="prose prose-lg mx-auto text-neutral-600"
          >
            <p>
              Belonging Photo + Video was born from our shared passion for storytelling and our unique perspective as a married interracial couple. We understand the importance of representation and the power of authentic imagery in today's world.
            </p>
            
            <p>
              Our journey began when we realized that many brands and individuals were seeking photographers who could capture not just beautiful images, but meaningful stories that resonate with diverse audiences. We saw an opportunity to fill this gap while celebrating the beauty of authentic connections.
            </p>
            
            <p>
              Today, we specialize in branding photography that goes beyond the surface. We work with businesses and individuals who value authenticity, diversity, and genuine human connection. Every project is an opportunity to showcase the real stories behind the brands we work with.
            </p>
            
            <p>
              While we've shifted our focus to branding content, our experience in wedding photography has taught us the importance of capturing those fleeting, precious moments that tell a complete story. This experience informs every shoot we do, whether it's a corporate headshot or a brand campaign.
            </p>
          </motion.div>
        </div>
      </section>

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
              Let's Create Something Beautiful Together
            </h2>
            <p className="text-xl mb-8 opacity-90">
              We'd love to learn about your story and help you share it with the world through compelling visual content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-primary bg-white text-neutral-900 hover:bg-neutral-100"
              >
                Start a Project
              </a>
              <a
                href="/work"
                className="btn-secondary border-white text-white hover:bg-white hover:text-neutral-900"
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
