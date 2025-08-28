import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FloatingText {
  id: string;
  x: number;
  y: number;
  scale: number;
  opacity: number;
}

const FloatingILoveYou: React.FC = () => {
  const [texts, setTexts] = useState<FloatingText[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newText: FloatingText = {
        id: Date.now().toString(),
        x: Math.random() * (window.innerWidth - 100),
        y: Math.random() * (window.innerHeight - 100),
        scale: 0.8 + Math.random() * 0.4,
        opacity: 0.1 + Math.random() * 0.2,
      };

      setTexts(prev => [...prev, newText]);

      // Remove after animation
      setTimeout(() => {
        setTexts(prev => prev.filter(text => text.id !== newText.id));
      }, 6000);
    }, 3000); // Every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      <AnimatePresence>
        {texts.map((text) => (
          <motion.div
            key={text.id}
            className="absolute font-display text-rose/20 font-bold select-none"
            style={{
              left: text.x,
              top: text.y,
              fontSize: `${1 + text.scale}rem`,
              opacity: text.opacity,
            }}
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ 
              opacity: text.opacity, 
              scale: text.scale,
              rotate: 0,
              y: -50
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.3,
              y: -100
            }}
            transition={{ 
              duration: 6,
              ease: "easeOut"
            }}
          >
            I love you ❤️
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FloatingILoveYou;