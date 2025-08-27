import React from 'react';
import { motion } from 'framer-motion';
import memory1 from '@/assets/memory1.jpg';
import memory2 from '@/assets/memory2.jpg';
import memory3 from '@/assets/memory3.jpg';
import memory4 from '@/assets/memory4.jpg';

const MemoryLane: React.FC = () => {
  const memories = [
    {
      caption: 'Our beautiful moments together 💕',
      image: memory1,
      color: 'from-amber-200 to-orange-200'
    },
    {
      caption: 'Looking into each other\'s eyes 👀',
      image: memory2,
      color: 'from-orange-200 to-pink-200'
    },
    {
      caption: 'Making memories and having fun 😄',
      image: memory3,
      color: 'from-blue-200 to-indigo-200'
    },
    {
      caption: 'Always laughing together 😊',
      image: memory4,
      color: 'from-green-200 to-emerald-200'
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
                      <h3 className="text-xl font-semibold text-foreground mb-4 font-display">
                        {memory.caption}
                      </h3>
                      
                      {/* Real image */}
                      <div className="w-full h-48 rounded-xl overflow-hidden mb-4">
                        <img 
                          src={memory.image} 
                          alt={memory.caption}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
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

      </div>
    </section>
  );
};

export default MemoryLane;