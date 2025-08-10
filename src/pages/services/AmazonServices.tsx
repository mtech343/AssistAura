import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, TrendingUp, Target, Settings } from 'lucide-react';

const AmazonServices: React.FC = () => {
  const services = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: 'Product Listing Creation',
      description: 'Professional product listings optimized for maximum visibility and conversions'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Listing Optimization',
      description: 'Enhance existing listings with SEO-optimized titles, descriptions, and keywords'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'PPC Campaign Management',
      description: 'Strategic advertising campaigns to increase product visibility and sales'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Account Management',
      description: 'Complete Amazon seller account management and optimization'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" 
              alt="Amazon" 
              className="h-16 bg-white px-4 py-2 rounded-lg"
            />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-anton text-4xl md:text-6xl text-center mb-6"
          >
            Amazon Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-anton text-xl text-center max-w-3xl mx-auto"
          >
            Maximize your Amazon success with our comprehensive marketplace solutions
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center text-white mb-6">
                  {service.icon}
                </div>
                <h3 className="font-anton text-2xl text-[#2a3747] mb-4">
                  {service.title}
                </h3>
                <p className="font-anton text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-anton text-3xl md:text-4xl text-[#2a3747] mb-12"
          >
            Why Choose Our Amazon Services?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              'Increase product visibility and rankings',
              'Optimize for higher conversion rates',
              'Strategic PPC campaign management'
            ].map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <p className="font-anton text-lg text-[#2a3747]">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AmazonServices;