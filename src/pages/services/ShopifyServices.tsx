import React from 'react';
import { motion } from 'framer-motion';
import { Store, Settings } from 'lucide-react';

const ShopifyServices: React.FC = () => {
  const services = [
    {
      icon: <Store className="w-8 h-8" />,
      title: 'Shopify Store Creation',
      description: 'Custom Shopify stores designed for maximum conversions and user experience'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Shopify Account Management',
      description: 'Complete store management including updates, maintenance, and optimization'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-[#95BF47] rounded-lg p-4">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.337 2.367c-.332-.066-.664-.066-.996 0-1.328.266-2.656.797-3.652 1.594-.664.531-1.328 1.328-1.66 2.125-.332-.133-.664-.199-.996-.199-.996 0-1.992.531-2.656 1.328-.664.797-1.062 1.859-1.062 2.922 0 .133 0 .266.066.398L2.05 12.867c-.133.133-.199.332-.199.531v7.969c0 .398.332.664.664.664h18.969c.398 0 .664-.332.664-.664v-7.969c0-.199-.066-.398-.199-.531l-2.324-2.324c.066-.133.066-.266.066-.398 0-1.062-.398-2.125-1.062-2.922-.664-.797-1.66-1.328-2.656-1.328-.332 0-.664.066-.996.199-.332-.797-.996-1.594-1.66-2.125-.996-.797-2.324-1.328-3.652-1.594zm-.332 1.328c1.062.199 2.125.664 2.922 1.328.531.398.996.996 1.195 1.66-.133.066-.266.133-.398.266-.531.398-.996.996-1.195 1.66-.199-.066-.398-.133-.664-.133-.531 0-1.062.199-1.461.531-.398.332-.664.797-.664 1.328 0 .133.066.266.133.398-.133.066-.266.199-.398.332-.398.398-.664.996-.664 1.594 0 .199.066.398.133.531-.066.066-.133.199-.199.332-.199.398-.266.863-.266 1.328v.133c-.066-.066-.133-.199-.199-.332-.199-.398-.266-.863-.266-1.328 0-.531.133-1.062.398-1.527.266-.465.664-.863 1.129-1.129.465-.266.996-.398 1.527-.398.133 0 .266 0 .398.066.066-.133.199-.266.332-.332.398-.398.996-.664 1.594-.664.199 0 .398.066.531.133.066-.133.199-.266.332-.332.398-.398.996-.664 1.594-.664.199 0 .398.066.531.133.066-.133.199-.266.332-.332.398-.398.996-.664 1.594-.664.531 0 1.062.199 1.461.531.398.332.664.797.664 1.328 0 .133-.066.266-.133.398.133.066.266.199.398.332.398.398.664.996.664 1.594 0 .199-.066.398-.133.531.066.066.133.199.199.332.199.398.266.863.266 1.328v.133l1.992 1.992v7.305H3.047v-7.305l1.992-1.992v-.133c0-.465.066-.93.266-1.328.066-.133.133-.266.199-.332-.066-.133-.133-.332-.133-.531 0-.598.266-1.195.664-1.594.133-.133.266-.266.398-.332-.066-.133-.133-.266-.133-.398 0-.531.266-.996.664-1.328.398-.332.93-.531 1.461-.531.266 0 .465.066.664.133-.199-.664-.664-1.262-1.195-1.66-.133-.133-.266-.199-.398-.266.199-.664.664-1.262 1.195-1.66.797-.664 1.859-1.129 2.922-1.328z"/>
              </svg>
            </div>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-anton text-4xl md:text-6xl text-center mb-6"
          >
            Shopify Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-anton text-xl text-center max-w-3xl mx-auto"
          >
            Professional Shopify development and management solutions
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center text-white mb-6">
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
            Why Choose Our Shopify Services?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              'Mobile-responsive design',
              'SEO optimized structure',
              'Conversion-focused layouts'
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

export default ShopifyServices;