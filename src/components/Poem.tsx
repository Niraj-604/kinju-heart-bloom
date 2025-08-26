import React from 'react';
import { motion } from 'framer-motion';

const Poem: React.FC = () => {
  const poemStanzas = [
    [
      "In gardens where the roses bloom,",
      "And morning light dispels the gloom,",
      "There walks a soul so bright and true,",
      "My dearest love, that soul is you."
    ],
    [
      "Your laughter rings like silver bells,",
      "Your kindness every story tells,",
      "Of grace that flows from heart to heart,",
      "You've been my light right from the start."
    ],
    [
      "Today we celebrate your birth,",
      "The day that blessed this grateful earth,",
      "With presence warm and spirit free,",
      "You're everything you're meant to be."
    ],
    [
      "So here's to you on this sweet day,",
      "May joy and wonder come your way,",
      "My birthday wish, my heart's delight—",
      "You make the whole world shine more bright."
    ]
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 1
      }
    }
  };

  const stanzaVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-blush relative overflow-hidden">
      {/* Background heart animation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="text-9xl text-rose/5"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ❤️
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-gradient mb-4">
            A Poem for You
          </h2>
          <p className="text-lg text-foreground/70 font-body">
            Words woven with love, just for your special day
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {poemStanzas.map((stanza, stanzaIndex) => (
              <motion.div
                key={stanzaIndex}
                className="glass rounded-2xl p-8 relative"
                variants={stanzaVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="space-y-4">
                  {stanza.map((line, lineIndex) => (
                    <motion.p
                      key={lineIndex}
                      className="text-lg leading-relaxed text-foreground font-body italic"
                      variants={lineVariants}
                    >
                      {line}
                    </motion.p>
                  ))}
                </div>

                {/* Decorative element */}
                <motion.div
                  className="absolute top-4 right-4 text-rose/20 text-2xl"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  ✨
                </motion.div>

                {/* Page corner effect */}
                <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-rose/20 to-transparent rounded-tl-2xl" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Floating petals */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 6 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute text-rose/30 text-xl"
              initial={{
                x: Math.random() * window.innerWidth,
                y: -50,
                rotate: 0
              }}
              animate={{
                y: window.innerHeight + 50,
                rotate: 360,
                x: Math.random() * window.innerWidth
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 8
              }}
            >
              🌸
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Poem;