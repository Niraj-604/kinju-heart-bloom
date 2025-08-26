import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const NepaliLetter: React.FC = () => {
  const [showFireflies, setShowFireflies] = useState(false);

  const nepaliText = [
    "प्रिय किँजु,",
    "जन्मदिनको धेरै–धेरै शुभकामना! तिमी मेरो दिनको उज्यालो र रातको शान्त चन्द्रमा हौ।",
    "तिमी सँग बिताएका साना–साना क्षणहरूले मेरो संसार अझै सुन्दर बनाएका छन्।",
    "आजको दिन तिमीलाई हाँसो, शान्ति र प्रेमले भरिएको रहोस्।",
    "तिमी जस्तो अद्भुत मान्छेसँग जीवन हिँड्न पाउनु मेरो लागि सबैभन्दा ठूलो उपहार हो।",
    "म तिमीलाई हिजोभन्दा बढी, भोलिभन्दा कम माया गर्छु। ❤️"
  ];

  const fireflies = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
  }));

  return (
    <section id="nepali-letter" className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl font-bold text-gradient mb-12 text-center"
        >
          Love Letter 💌
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 md:p-12 shadow-romantic relative overflow-hidden"
          onMouseEnter={() => setShowFireflies(true)}
          onMouseLeave={() => setShowFireflies(false)}
        >
          {/* Decorative corner hearts */}
          <div className="absolute top-4 right-4 text-rose/20 text-2xl">💖</div>
          <div className="absolute bottom-4 left-4 text-champagne/30 text-xl">✨</div>

          <div className="space-y-6 text-center">
            {nepaliText.map((line, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`${
                  index === 0 
                    ? "text-2xl md:text-3xl font-bold text-rose" 
                    : "text-lg md:text-xl text-midnight/80"
                } leading-relaxed ${index === nepaliText.length - 1 ? "text-rose font-semibold" : ""}`}
              >
                {line}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Button
              onClick={() => setShowFireflies(!showFireflies)}
              variant="outline"
              className="glass border-rose/30 text-rose hover:bg-rose/10 hover:scale-105 transition-all duration-300 px-8 py-3 rounded-2xl"
            >
              {showFireflies ? 'Hide Magic ✨' : 'Reveal Magic ✨'}
            </Button>
          </motion.div>

          {/* Fireflies Animation */}
          <AnimatePresence>
            {showFireflies && (
              <div className="absolute inset-0 pointer-events-none">
                {fireflies.map((firefly) => (
                  <motion.div
                    key={firefly.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: [0, 1, 0.5, 1, 0],
                      scale: [0, 1, 0.8, 1, 0],
                      x: [firefly.x + '%', (firefly.x + 20) + '%', firefly.x + '%'],
                      y: [firefly.y + '%', (firefly.y - 30) + '%', firefly.y + '%'],
                    }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{
                      duration: firefly.duration,
                      delay: firefly.delay,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute w-2 h-2 bg-champagne rounded-full shadow-glow"
                  />
                ))}
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default NepaliLetter;