import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const sparkles = Array.from({ length: 8 }, (_, i) => i);

  return (
    <footer className="py-16 bg-gradient-to-t from-midnight to-background text-white relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3 
            className="font-display text-2xl md:text-3xl font-bold mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            Hand‑crafted for Kinju with infinite love
          </motion.h3>
          
          <motion.p 
            className="text-lg text-white/80 mb-8 font-body"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Every pixel, every animation, every word — created just for you ✨
          </motion.p>

          <motion.div
            className="flex justify-center space-x-2 text-3xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            {['❤️', '🎂', '🎉', '💕', '✨'].map((emoji, i) => (
              <motion.span
                key={i}
                className="cursor-pointer"
                whileHover={{ 
                  scale: 1.3,
                  rotate: [0, -10, 10, 0],
                  y: -10 
                }}
                whileTap={{ scale: 0.8 }}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  y: {
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }
                }}
              >
                {emoji}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            className="mt-12 text-sm text-white/60 font-body"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
          >
            Made with React, Framer Motion, and lots of love 💖
            <br />
            {new Date().getFullYear()} • A birthday gift from the heart
          </motion.div>
        </motion.div>

        {/* Floating sparkles */}
        <div className="absolute inset-0 pointer-events-none">
          {sparkles.map((i) => (
            <motion.div
              key={i}
              className="absolute text-yellow-300 text-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut"
              }}
            >
              ✨
            </motion.div>
          ))}
        </div>

        {/* Interactive heart on hover */}
        <motion.div
          className="absolute top-8 left-1/2 transform -translate-x-1/2 text-6xl cursor-pointer"
          whileHover={{
            scale: [1, 1.2, 1.1, 1.3, 1],
            rotate: [0, -5, 5, -5, 0],
          }}
          transition={{ duration: 0.6 }}
        >
          💖
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;