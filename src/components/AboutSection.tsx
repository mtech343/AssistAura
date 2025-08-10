import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedCounter from './AnimatedCounter';

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { number: 10, suffix: '+', label: 'Online Stores Launched' },
    { number: 25, suffix: '+', label: 'Ad Campaigns Managed' },
    { number: 100, suffix: '%', label: 'Client Satisfaction' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-anton text-4xl md:text-5xl text-[#2a3747] mb-8">
            Who We Are
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="font-anton text-lg md:text-xl text-gray-700 leading-relaxed">
              At AssistAura, we craft digital experiences that define brands. From e-commerce and 
              marketplaces to design, CGI, and web development, every detail is built to perform. 
              Our approach blends strategy, creativity, and technology to deliver measurable growth, 
              helping ambitious businesses stand out, scale faster, and lead with impact.
            </p>
          </div>
        </motion.div>

        {/* Animated Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center bg-gradient-to-br from-[#ffbe4a]/10 to-[#2a3747]/10 rounded-3xl p-8 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-5xl md:text-6xl font-anton text-[#ffbe4a] mb-2">
                <AnimatedCounter 
                  end={stat.number} 
                  duration={2000}
                  suffix={stat.suffix}
                  inView={inView}
                />
              </div>
              <p className="font-anton text-lg text-[#2a3747]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;