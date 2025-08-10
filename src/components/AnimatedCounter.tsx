import React, { useState, useEffect } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration: number;
  suffix?: string;
  inView: boolean;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  end, 
  duration, 
  suffix = '', 
  inView 
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(startValue + (end - startValue) * easeOutCubic);
      
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, inView]);

  return <span>{count}{suffix}</span>;
};

export default AnimatedCounter;