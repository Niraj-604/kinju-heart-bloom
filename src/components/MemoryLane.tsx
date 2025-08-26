import React from 'react';
import { motion } from 'framer-motion';
import memory1 from '@/assets/memory-1.jpg';
import memory2 from '@/assets/memory-2.jpg';
import memory3 from '@/assets/memory-3.jpg';

interface Memory {
  id: number;
  image: string;
  title: string;
  date: string;
  description: string;
  emoji: string;
}

const MemoryLane: React.FC = () => {
  const memories: Memory[] = [
    {
      id: 1,
      image: memory1,
      title: "First Meeting",
      date: "A moment that changed everything",
      description: "The day our eyes first met and time stood still",
      emoji: "💕"
    },
    {
      id: 2,
      image: memory2,
      title: "Beautiful Sunset",
      date: "An evening to remember",
      description: "Watching the world paint itself in gold while holding your hand",
      emoji: "🌅"
    },
    {
      id: 3,
      image: memory3,
      title: "Cherry Blossoms",
      date: "Spring in your smile",
      description: "Like the flowers around us, our love continues to bloom",
      emoji: "🌸"
    }
  ];

  const timelineEvents = [
    { date: "Every Morning", event: "Your smile brightens my day", emoji: "☀️" },
    { date: "Every Afternoon", event: "Thoughts of you make work feel light", emoji: "💭" },
    { date: "Every Evening", event: "Grateful for another day with you", emoji: "🙏" },
    { date: "Every Night", event: "Dreams filled with our future together", emoji: "🌙" }
  ];

  return (
    <section id="memories" className="py-20 px-6 bg-gradient-to-br from-soft-white to-blush">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl font-bold text-gradient mb-16 text-center"
        >
          Memory Lane 🌸
        </motion.h2>

        {/* Photo Gallery */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass rounded-2xl overflow-hidden shadow-romantic cursor-pointer group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={memory.image}
                  alt={memory.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  className="absolute top-4 right-4 text-3xl"
                >
                  {memory.emoji}
                </motion.div>
              </div>
              
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-rose mb-2">
                  {memory.title}
                </h3>
                <p className="text-champagne/80 font-medium mb-3">
                  {memory.date}
                </p>
                <p className="text-midnight/70 leading-relaxed">
                  {memory.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <h3 className="font-display text-3xl md:text-4xl font-bold text-gradient mb-12 text-center">
            Every Day with You ✨
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-rose via-champagne to-rose rounded-full" />

            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="glass rounded-2xl p-6 shadow-dreamy">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{event.emoji}</span>
                        <h4 className="font-display text-xl font-bold text-rose">
                          {event.date}
                        </h4>
                      </div>
                      <p className="text-midnight/80 leading-relaxed">
                        {event.event}
                      </p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-4 h-4 bg-rose rounded-full shadow-glow relative z-10"
                  />

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MemoryLane;