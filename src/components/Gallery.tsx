import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const handleCardClick = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };
  const galleryImages = [
    {
      src: '/lovable-uploads/cd72228d-0853-464b-9c11-d8653cbcccf6.png',
      alt: 'Beautiful evening together',
      message: 'Every moment with you feels like magic ✨'
    },
    {
      src: '/lovable-uploads/d1a8c8c1-2ece-4a16-8fb3-79dbcb8875a2.png',
      alt: 'Romantic poolside moment',
      message: 'You make my heart skip a beat 💕'
    },
    {
      src: '/lovable-uploads/346eb3bc-7c70-41b9-bb2a-13242fc6f30b.png',
      alt: 'Sweet romantic evening',
      message: 'Your smile lights up my world 🌟'
    },
    {
      src: '/lovable-uploads/69d69cc5-122c-4ec2-8a45-f7c3d290cb16.png',
      alt: 'Beautiful portrait',
      message: 'You are absolutely stunning, my love 😍'
    },
    {
      src: '/lovable-uploads/02cdbbc3-2f70-44bf-bbf9-8499b36aa0a7.png',
      alt: 'Traditional celebration',
      message: 'Together we celebrate life beautifully 🎉'
    },
    {
      src: '/lovable-uploads/fbc2c807-b566-43e8-a99d-5e7f98b83b38.png',
      alt: 'Sweet selfie moment',
      message: 'Perfect moments with my perfect girl 📸'
    },
    {
      src: '/lovable-uploads/ea47ae9d-85de-4763-b550-ac1ce7c07586.png',
      alt: 'Traditional outfit celebration',
      message: 'You look breathtaking in everything 👗'
    },
    {
      src: '/lovable-uploads/f9b72626-db55-4abe-a3fc-a56be6a980e8.png',
      alt: 'Artistic background moment',
      message: 'Art has nothing on your beauty 🎨'
    },
    {
      src: '/lovable-uploads/2a1ae270-22fb-440e-88a4-90241ecbb773.png',
      alt: 'Evening celebration',
      message: 'You make every evening special 🌙'
    },
    {
      src: '/lovable-uploads/efa522a2-bcb3-4b16-b75d-f9e1b62a8cb4.png',
      alt: 'Happy together',
      message: 'My happiness begins and ends with you 💖'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-blush">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-gradient mb-4">
            Our Gallery
          </h2>
          <p className="text-lg text-foreground/70 font-body">
            Click each photo to reveal a special message 💕
          </p>
        </motion.div>

        {/* Polaroid Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer perspective-1000"
              initial={{ opacity: 0, y: 100, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              onClick={() => handleCardClick(index)}
            >
              {/* Polaroid Container */}
              <motion.div
                className="relative bg-white p-3 pb-16 rounded-lg shadow-romantic transform-gpu"
                style={{ 
                  transform: `rotate(${(Math.random() - 0.5) * 6}deg)`,
                }}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 0,
                  zIndex: 10,
                  transition: { duration: 0.3 }
                }}
                animate={flippedCards.includes(index) ? {
                  rotateY: [0, 180, 360],
                  scale: [1, 1.1, 1],
                } : {}}
                transition={flippedCards.includes(index) ? {
                  duration: 1.2,
                  ease: "easeInOut"
                } : {}}
              >
                {/* Photo */}
                <div className="relative overflow-hidden rounded-md bg-gray-100">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                    loading="lazy"
                  />
                  
                  {/* Vintage overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-amber-100/20 pointer-events-none" />
                </div>

                {/* Polaroid caption area */}
                <div className="absolute bottom-3 left-3 right-3 h-12 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    {!flippedCards.includes(index) ? (
                      <motion.p
                        key="instruction"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-sm text-gray-600 font-handwriting text-center"
                      >
                        Tap to reveal message 💌
                      </motion.p>
                    ) : (
                      <motion.p
                        key="message"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="text-xs text-rose font-medium text-center leading-tight px-1"
                      >
                        {image.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Tape effect */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-yellow-100/80 rotate-3 rounded-sm border border-yellow-200/50" />
                
                {/* Floating hearts when clicked */}
                <AnimatePresence>
                  {flippedCards.includes(index) && (
                    <>
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute text-rose"
                          style={{
                            left: `${20 + Math.random() * 60}%`,
                            top: `${20 + Math.random() * 60}%`,
                          }}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ 
                            scale: [0, 1.5, 0],
                            opacity: [0, 1, 0],
                            y: [0, -50],
                            x: [(Math.random() - 0.5) * 40]
                          }}
                          transition={{
                            duration: 2,
                            delay: i * 0.1,
                            ease: "easeOut"
                          }}
                        >
                          💕
                        </motion.div>
                      ))}
                    </>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;