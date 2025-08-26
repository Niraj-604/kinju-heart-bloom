import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useTypewriter } from '@/hooks/useTypewriter';
import { useConfetti } from '@/hooks/useConfetti';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  const { displayedText } = useTypewriter(
    "You make ordinary moments feel like miracles.",
    80,
    1000
  );
  
  const { celebrate } = useConfetti();

  useEffect(() => {
    // Easter egg: heart key triggers confetti
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === '❤' || e.key === '♥') {
        celebrate();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [celebrate]);

  return (
    <motion.section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ y, opacity }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-romantic" />
      
      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <motion.h1 
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Happy Birthday, Kinju ✨
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl font-light mb-12 min-h-[2rem] font-body"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {displayedText}
          <span className="animate-pulse">|</span>
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => {
              celebrate();
              onNavigate('countdown');
            }}
            className="group"
          >
            <motion.span
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              🎉
            </motion.span>
            Play Surprise
          </Button>
          
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => onNavigate('poem')}
            className="group"
          >
            <motion.span
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              💝
            </motion.span>
            Open Poem
          </Button>
          
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => onNavigate('memories')}
            className="group"
          >
            <motion.span
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              📸
            </motion.span>
            Memory Lane
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm opacity-75">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;