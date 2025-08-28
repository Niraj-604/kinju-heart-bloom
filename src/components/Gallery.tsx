import React from 'react';
import { motion } from 'framer-motion';

const Gallery: React.FC = () => {
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
            Captured moments of our beautiful journey together
          </p>
        </motion.div>

        {/* Masonry Grid Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="break-inside-avoid mb-4 group relative overflow-hidden rounded-2xl glass"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-all duration-700"
                />
                
                {/* Message overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <motion.p 
                    className="text-white text-center px-4 font-body text-sm sm:text-base font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {image.message}
                  </motion.p>
                </div>
                
                {/* Floating hearts */}
                <motion.div
                  className="absolute top-4 right-4 text-rose text-xl opacity-0 group-hover:opacity-100"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.1
                  }}
                >
                  💕
                </motion.div>
                
                {/* Sparkle effect */}
                <motion.div
                  className="absolute top-2 left-2 text-champagne text-sm opacity-0 group-hover:opacity-100"
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
                >
                  ✨
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;