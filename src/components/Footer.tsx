import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-gradient-to-t from-midnight to-midnight/95 text-soft-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-rose rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Main message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart className="h-8 w-8 text-rose fill-rose" />
            </motion.div>
            
            <h3 className="font-display text-2xl md:text-3xl font-bold text-gradient">
              Hand-crafted for Kinju
            </h3>
            
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Sparkles className="h-8 w-8 text-champagne" />
            </motion.div>
          </div>

          <p className="text-lg md:text-xl text-soft-white/80 leading-relaxed max-w-2xl mx-auto">
            With infinite love and countless hours of coding to make your special day even more magical
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-32 h-px bg-gradient-to-r from-transparent via-rose to-transparent mx-auto mb-6"
        />

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-soft-white/60 text-sm"
        >
          © {currentYear} • Made with React, TypeScript, and endless devotion
        </motion.p>

        {/* Interactive elements */}
        <motion.div
          className="mt-8 flex justify-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          {['💖', '🌸', '✨', '🎂', '🌹'].map((emoji, index) => (
            <motion.span
              key={emoji}
              className="text-2xl cursor-pointer select-none"
              whileHover={{ 
                scale: 1.5, 
                rotate: [0, 10, -10, 0],
                y: -5
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 17 
              }}
              style={{
                filter: 'drop-shadow(0 0 10px rgba(225, 29, 72, 0.5))'
              }}
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Floating hearts in background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`bg-heart-${i}`}
            className="absolute text-rose/10 text-4xl"
            style={{
              left: `${20 + i * 15}%`,
              top: `${20 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          >
            💕
          </motion.div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;