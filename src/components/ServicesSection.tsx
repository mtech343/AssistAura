import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  Store, 
  Facebook, 
  Globe, 
  Zap, 
  Palette 
} from 'lucide-react';

const ServicesSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: 'Amazon Services',
      description: 'Complete Amazon marketplace solutions',
      features: [
        'Product Listing Creation',
        'Listing Optimization', 
        'PPC Campaign Management',
        'Account Management'
      ],
      link: '/amazon-services',
      color: 'from-orange-400 to-orange-600'
    },
    {
      icon: <Store className="w-12 h-12" />,
      title: 'Shopify Services',
      description: 'Professional Shopify store development',
      features: [
        'Shopify Store Creation',
        'Shopify Account Management'
      ],
      link: '/shopify-services',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: <Facebook className="w-12 h-12" />,
      title: 'Meta Ads',
      description: 'Facebook & Instagram advertising',
      features: [
        'Facebook & Instagram Ad Campaigns',
        'Targeting & Audience Setup',
        'Creative Optimization'
      ],
      link: '/meta-ads',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Web Development',
      description: 'Custom web solutions',
      features: [
        'Business Websites',
        'Landing Pages',
        'Admin Panels'
      ],
      link: '/web-development',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'CGI Ads',
      description: '3D animations and visual effects',
      features: [
        'Realistic 3D product animations',
        'Custom brand avatars for campaigns',
        'Full sound design for maximum impact',
        'Real-world lighting and textures'
      ],
      link: '/cgi-ads',
      color: 'from-red-400 to-red-600'
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'Graphic Design',
      description: 'Creative visual solutions',
      features: [
        'Logo & brand identity design',
        'Social media graphics & ad creatives',
        'Marketing and promotional materials',
        'Custom visuals for product launches'
      ],
      link: '/graphic-design',
      color: 'from-pink-400 to-pink-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-anton text-4xl md:text-5xl text-[#2a3747] mb-6">
            Our Services
          </h2>
          <p className="font-anton text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions to grow your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Link
                to={service.link}
                className="block group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full"
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="font-anton text-2xl text-[#2a3747] mb-4 group-hover:text-[#ffbe4a] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="font-anton text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="font-anton text-sm text-gray-700 flex items-center">
                      <div className="w-2 h-2 bg-[#ffbe4a] rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 flex items-center text-[#ffbe4a] font-anton group-hover:translate-x-2 transition-transform duration-300">
                  Learn More →
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;