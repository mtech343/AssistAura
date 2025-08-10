import React from 'react';
import { motion } from 'framer-motion';
import { Globe, FileText, Shield } from 'lucide-react';

const WebDevelopment: React.FC = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Business Websites',
      description: 'Professional business websites designed to establish your online presence'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Landing Pages',
      description: 'High-converting landing pages optimized for specific campaigns and goals'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Admin Panels',
      description: 'Custom admin panels and dashboards for efficient business management'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-anton text-4xl md:text-6xl text-center mb-6"
          >
            Web Development Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-anton text-xl text-center max-w-3xl mx-auto"
          >
            Custom web solutions that drive business growth
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center text-white mb-6">
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
            Why Choose Our Web Development?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              'Modern, responsive design',
              'SEO-optimized development',
              'Fast loading performance'
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

export default WebDevelopment;