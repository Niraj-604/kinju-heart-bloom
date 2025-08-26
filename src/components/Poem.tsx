import React from 'react';
import { motion } from 'framer-motion';

const Poem: React.FC = () => {
  const poemStanzas = [
    [
      "In morning light, your laughter rings",
      "A melody that soothes my soul",
      "With every smile, my heart takes wings",
      "You make my broken spirit whole"
    ],
    [
      "Like roses blooming in the spring",
      "Your kindness paints the world anew", 
      "Each moment shared, a precious thing",
      "My dearest Kinju, I love you"
    ],
    [
      "Through seasons change and years may pass",
      "One truth remains forever bright",
      "Our love will grow, our bond will last",
      "You are my star, my guiding light"
    ],
    [
      "So on this day we celebrate",
      "The gift of you, so rare and true",
      "Happy Birthday, my soulmate",
      "Forever yours, through and through"
    ]
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
        delayChildren: 0.3,
      }
    }
  };

  const stanzaVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      }
    }
  };

  const lineVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="poem" className="py-20 px-6 bg-gradient-dreamy relative overflow-hidden">
      {/* Floating heart animation */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-10 text-6xl text-rose/20 pointer-events-none"
      >
        💝
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl font-bold text-gradient mb-16 text-center"
        >
          A Poem for You 🌸
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {poemStanzas.map((stanza, stanzaIndex) => (
            <motion.div
              key={stanzaIndex}
              variants={stanzaVariants}
              className="glass rounded-2xl p-8 md:p-10 shadow-dreamy text-center relative"
            >
              {/* Decorative elements */}
              {stanzaIndex === 0 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-3xl">🌹</div>
              )}
              {stanzaIndex === poemStanzas.length - 1 && (
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-3xl">💕</div>
              )}

              <div className="space-y-3">
                {stanza.map((line, lineIndex) => (
                  <motion.p
                    key={lineIndex}
                    variants={lineVariants}
                    className="text-lg md:text-xl text-midnight/80 leading-relaxed font-light italic"
                  >
                    {line}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-rose font-medium text-lg italic">
            Written with love, just for you ❤️
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Poem;