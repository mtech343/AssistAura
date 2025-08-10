import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#2a3747] to-[#ffbe4a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-anton text-4xl md:text-6xl text-white mb-6"
          >
            About AssistAura
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-anton text-xl text-white/90 max-w-3xl mx-auto"
          >
            Your Digital Success Partner
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none"
          >
            <div className="text-center mb-16">
              <h2 className="font-anton text-3xl md:text-4xl text-[#2a3747] mb-8">
                Our Story
              </h2>
              <div className="space-y-6 font-anton text-lg text-gray-700 leading-relaxed">
                <p>
                  At AssistAura, we craft digital experiences that define brands. From e-commerce and 
                  marketplaces to design, CGI, and web development, every detail is built to perform. 
                  Our approach blends strategy, creativity, and technology to deliver measurable growth, 
                  helping ambitious businesses stand out, scale faster, and lead with impact.
                </p>
                <p>
                  We understand that in today's digital landscape, success requires more than just 
                  a presence online. It demands strategic thinking, creative execution, and technical 
                  excellence. That's why we've assembled a team of experts who specialize in every 
                  aspect of digital marketing and development.
                </p>
                <p>
                  From Amazon optimization to Shopify development, from stunning CGI advertisements 
                  to conversion-focused web development, we provide comprehensive solutions that 
                  drive real business results.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-br from-[#ffbe4a]/10 to-[#2a3747]/10 rounded-2xl p-8"
              >
                <h3 className="font-anton text-2xl text-[#2a3747] mb-4">Our Mission</h3>
                <p className="font-anton text-gray-700 leading-relaxed">
                  To empower businesses with cutting-edge digital solutions that not only meet 
                  their current needs but anticipate future challenges. We're committed to 
                  delivering exceptional results through innovation, dedication, and unwavering 
                  attention to detail.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gradient-to-br from-[#2a3747]/10 to-[#ffbe4a]/10 rounded-2xl p-8"
              >
                <h3 className="font-anton text-2xl text-[#2a3747] mb-4">Our Vision</h3>
                <p className="font-anton text-gray-700 leading-relaxed">
                  To be the leading digital agency that transforms businesses through innovative 
                  e-commerce solutions, creative design, and strategic marketing. We envision 
                  a future where every business can achieve its full potential online.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;