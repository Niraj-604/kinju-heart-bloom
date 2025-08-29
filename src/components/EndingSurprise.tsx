import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useConfetti } from '@/hooks/useConfetti';

const EndingSurprise = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  const { celebrate } = useConfetti();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          
          // Sequence of animations
          setTimeout(() => setShowText(true), 1000);
          setTimeout(() => {
            setShowFireworks(true);
            triggerFireworks();
          }, 3000);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('ending-surprise');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const triggerFireworks = () => {
    // Multiple confetti bursts
    const colors = ['#E11D48', '#FCE7F3', '#F5E6C8', '#FFB6C1', '#DDA0DD'];
    
    // First burst
    celebrate({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6, x: 0.3 },
      colors
    });

    // Second burst
    setTimeout(() => {
      celebrate({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6, x: 0.7 },
        colors
      });
    }, 200);

    // Heart-shaped confetti
    setTimeout(() => {
      celebrate({
        particleCount: 100,
        spread: 120,
        origin: { y: 0.7 },
        shapes: ['circle', 'square'],
        colors: ['#E11D48', '#FFB6C1']
      });
    }, 400);

    // Continue fireworks for a while
    const interval = setInterval(() => {
      celebrate({
        particleCount: 50,
        spread: 60,
        origin: { 
          y: 0.6 + (Math.random() - 0.5) * 0.4,
          x: 0.2 + Math.random() * 0.6 
        },
        colors
      });
    }, 800);

    setTimeout(() => clearInterval(interval), 5000);
  };

  const FloatingHeart = ({ delay = 0 }) => (
    <motion.div
      className="absolute text-6xl opacity-80"
      style={{
        left: `${Math.random() * 80 + 10}%`,
        top: `${Math.random() * 60 + 20}%`,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: [0, 1.2, 0.8, 1],
        opacity: [0, 0.8, 0.6, 0.4],
        y: [0, -30, -60, -100],
        rotate: [0, 15, -15, 0]
      }}
      transition={{
        duration: 4,
        delay: delay,
        ease: "easeOut"
      }}
    >
      💖
    </motion.div>
  );

  return (
    <section 
      id="ending-surprise"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="absolute inset-0 bg-midnight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showText && (
          <>
            <motion.div
              className="relative z-10 text-center px-6 max-w-4xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 2,
                ease: "easeOut"
              }}
            >
              <motion.h1
                className="font-display text-3xl md:text-5xl lg:text-7xl text-white mb-8 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1.5,
                  delay: 0.5,
                  ease: "easeOut"
                }}
              >
                <motion.span
                  className="inline-block"
                  animate={{
                    textShadow: [
                      "0 0 10px #E11D48",
                      "0 0 20px #E11D48, 0 0 30px #E11D48",
                      "0 0 10px #E11D48"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  This website is just a glimpse…
                </motion.span>
              </motion.h1>

              <motion.h2
                className="font-display text-2xl md:text-4xl lg:text-5xl text-rose mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1.5,
                  delay: 1.5,
                  ease: "easeOut"
                }}
              >
                <motion.span
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  but my love for you is endless. 💕
                </motion.span>
              </motion.h2>

              <motion.div
                className="text-lg md:text-xl text-champagne/80 space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                  duration: 1,
                  delay: 2.5 
                }}
              >
                <p>Happy Birthday, my dearest Baulai! 🎂</p>
                <p>May every moment of your special day be filled with</p>
                <p>the same joy you bring to my life every day. ✨</p>
              </motion.div>
            </motion.div>

            {/* Floating hearts */}
            {showFireworks && (
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                  <FloatingHeart key={i} delay={i * 0.3} />
                ))}
              </div>
            )}

            {/* Sparkles */}
            {showFireworks && (
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-white/60"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      fontSize: `${0.8 + Math.random() * 1.5}rem`,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 3,
                      delay: Math.random() * 2,
                      repeat: Infinity,
                      repeatDelay: Math.random() * 3 + 2,
                    }}
                  >
                    ✨
                  </motion.div>
                ))}
              </div>
            )}
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EndingSurprise;