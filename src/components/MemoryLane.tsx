import React from 'react';
import { motion } from 'framer-motion';

const MemoryLane: React.FC = () => {
  const memories = [
    {
      date: 'January 2024',
      caption: 'Our first coffee together ☕',
      emoji: '☕',
      color: 'from-amber-200 to-orange-200'
    },
    {
      date: 'March 2024', 
      caption: 'That beautiful sunset walk 🌅',
      emoji: '🌅',
      color: 'from-orange-200 to-pink-200'
    },
    {
      date: 'June 2024',
      caption: 'Dancing in the rain 💃',
      emoji: '💃',
      color: 'from-blue-200 to-indigo-200'
    },
    {
      date: 'August 2024',
      caption: 'Our camping adventure 🏕️',
      emoji: '🏕️',
      color: 'from-green-200 to-emerald-200'
    },
    {
      date: 'October 2024',
      caption: 'Pumpkin picking together 🎃',
      emoji: '🎃',
      color: 'from-orange-200 to-red-200'
    },
    {
      date: 'December 2024',
      caption: 'And today we celebrate you! 🎂',
      emoji: '🎂',
      color: 'from-rose-200 to-pink-300'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blush to-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-gradient mb-4">
            Memory Lane
          </h2>
          <p className="text-lg text-foreground/70 font-body">
            A journey through our beautiful moments together
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-rose to-champagne rounded-full" />

          <div className="space-y-16">
            {memories.map((memory, index) => (
              <motion.div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="w-1/2 px-6">
                  <motion.div
                    className="glass rounded-2xl p-6 relative overflow-hidden"
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    {/* Memory content */}
                    <div className="relative z-10">
                      <div className="text-sm text-foreground/60 font-body mb-2">
                        {memory.date}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-4 font-display">
                        {memory.caption}
                      </h3>
                      
                      {/* Placeholder image */}
                      <div className={`w-full h-40 bg-gradient-to-br ${memory.color} rounded-xl flex items-center justify-center text-4xl mb-4`}>
                        {memory.emoji}
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <motion.div
                      className="absolute -top-2 -right-2 w-16 h-16 bg-rose/10 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <div className="relative z-20">
                  <motion.div
                    className="w-8 h-8 bg-rose rounded-full border-4 border-white shadow-lg"
                    whileHover={{ scale: 1.5 }}
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(225, 29, 72, 0.7)",
                        "0 0 0 10px rgba(225, 29, 72, 0)",
                        "0 0 0 0 rgba(225, 29, 72, 0)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  />
                </div>

                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Photo gallery grid */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {Array.from({ length: 6 }, (_, i) => (
            <motion.div
              key={i}
              className="aspect-square bg-gradient-to-br from-blush to-champagne rounded-2xl flex items-center justify-center text-3xl cursor-pointer"
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
                rotateX: 10
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {['📸', '💕', '🌟', '🎈', '🌺', '✨'][i]}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MemoryLane;