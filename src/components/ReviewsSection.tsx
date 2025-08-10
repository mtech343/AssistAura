import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const ReviewsSection: React.FC = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      name: 'Sarah Johnson',
      comment: 'AssistAura transformed our Amazon store completely. Sales increased by 300% in just 3 months!',
      rating: 5,
      business: 'E-commerce Store Owner'
    },
    {
      name: 'Mike Chen',
      comment: 'Their Shopify development skills are outstanding. Our new store looks professional and converts amazingly well.',
      rating: 5,
      business: 'Retail Business'
    },
    {
      name: 'Emma Rodriguez',
      comment: 'The CGI ads they created for our product launch were absolutely stunning. Best investment we ever made.',
      rating: 5,
      business: 'Tech Startup'
    },
    {
      name: 'David Thompson',
      comment: 'Professional web development with amazing attention to detail. Our website perfectly represents our brand.',
      rating: 5,
      business: 'Service Company'
    },
    {
      name: 'Lisa Park',
      comment: 'Their Meta ads campaigns delivered incredible results. ROI exceeded our expectations by far.',
      rating: 5,
      business: 'Fashion Brand'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-anton text-4xl md:text-5xl text-[#2a3747] mb-6">
            What Our Clients Say
          </h2>
          <p className="font-anton text-lg text-gray-600">
            Real feedback from real businesses
          </p>
        </motion.div>

        <div className="relative h-80 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border max-w-2xl text-center">
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(reviews[currentReview].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-[#ffbe4a] fill-current" />
                  ))}
                </div>
                
                {/* Comment */}
                <p className="font-anton text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                  "{reviews[currentReview].comment}"
                </p>
                
                {/* Author */}
                <div>
                  <h4 className="font-anton text-xl text-[#2a3747] mb-1">
                    {reviews[currentReview].name}
                  </h4>
                  <p className="font-anton text-[#ffbe4a]">
                    {reviews[currentReview].business}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-3 mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentReview(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentReview 
                  ? 'bg-[#ffbe4a] scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;