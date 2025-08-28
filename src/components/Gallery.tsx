import React from 'react';
import { motion } from 'framer-motion';

const Gallery: React.FC = () => {
  const galleryImages = [
    {
      src: '/lovable-uploads/cd72228d-0853-464b-9c11-d8653cbcccf6.png',
      alt: 'Beautiful evening together'
    },
    {
      src: '/lovable-uploads/d1a8c8c1-2ece-4a16-8fb3-79dbcb8875a2.png',
      alt: 'Romantic poolside moment'
    },
    {
      src: '/lovable-uploads/346eb3bc-7c70-41b9-bb2a-13242fc6f30b.png',
      alt: 'Sweet romantic evening'
    },
    {
      src: '/lovable-uploads/69d69cc5-122c-4ec2-8a45-f7c3d290cb16.png',
      alt: 'Beautiful portrait'
    },
    {
      src: '/lovable-uploads/02cdbbc3-2f70-44bf-bbf9-8499b36aa0a7.png',
      alt: 'Traditional celebration'
    },
    {
      src: '/lovable-uploads/fbc2c807-b566-43e8-a99d-5e7f98b83b38.png',
      alt: 'Sweet selfie moment'
    },
    {
      src: '/lovable-uploads/ea47ae9d-85de-4763-b550-ac1ce7c07586.png',
      alt: 'Traditional outfit celebration'
    },
    {
      src: '/lovable-uploads/f9b72626-db55-4abe-a3fc-a56be6a980e8.png',
      alt: 'Artistic background moment'
    },
    {
      src: '/lovable-uploads/2a1ae270-22fb-440e-88a4-90241ecbb773.png',
      alt: 'Evening celebration'
    },
    {
      src: '/lovable-uploads/efa522a2-bcb3-4b16-b75d-f9e1b62a8cb4.png',
      alt: 'Happy together'
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
            Captured moments of our beautiful journey together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="glass rounded-2xl overflow-hidden group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-2 -right-2 w-8 h-8 bg-rose/20 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;