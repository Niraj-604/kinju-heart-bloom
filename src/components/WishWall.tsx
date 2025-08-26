import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface Wish {
  id: string;
  text: string;
  author: string;
  timestamp: number;
  color: string;
}

const WishWall: React.FC = () => {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [newWish, setNewWish] = useState('');
  const [authorName, setAuthorName] = useState('');
  const { toast } = useToast();

  const colors = [
    'from-rose-200 to-pink-300',
    'from-blue-200 to-indigo-300',
    'from-green-200 to-emerald-300',
    'from-yellow-200 to-amber-300',
    'from-purple-200 to-violet-300',
    'from-orange-200 to-red-300'
  ];

  useEffect(() => {
    const storedWishes = localStorage.getItem('birthday-wishes');
    if (storedWishes) {
      setWishes(JSON.parse(storedWishes));
    }
  }, []);

  const saveWish = () => {
    if (!newWish.trim() || !authorName.trim()) {
      toast({
        title: "Please fill in both fields",
        description: "We need both your wish and your name!",
        variant: "destructive"
      });
      return;
    }

    const wish: Wish = {
      id: Date.now().toString(),
      text: newWish.trim(),
      author: authorName.trim(),
      timestamp: Date.now(),
      color: colors[Math.floor(Math.random() * colors.length)]
    };

    const updatedWishes = [...wishes, wish];
    setWishes(updatedWishes);
    localStorage.setItem('birthday-wishes', JSON.stringify(updatedWishes));

    setNewWish('');
    setAuthorName('');

    toast({
      title: "Wish added! ✨",
      description: "Your beautiful wish has been added to the wall of love",
    });
  };

  const deleteWish = (id: string) => {
    const updatedWishes = wishes.filter(w => w.id !== id);
    setWishes(updatedWishes);
    localStorage.setItem('birthday-wishes', JSON.stringify(updatedWishes));
  };

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-gradient mb-4">
            Wish Wall
          </h2>
          <p className="text-lg text-foreground/70 font-body">
            A collection of love and birthday wishes just for you
          </p>
        </motion.div>

        {/* Add new wish form */}
        <motion.div
          className="max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6 font-display text-center">
              Add Your Birthday Wish ✨
            </h3>
            
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your name"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:ring-2 focus:ring-rose focus:border-transparent font-body"
                />
              </div>
              
              <div>
                <textarea
                  placeholder="Write your birthday wish for Kinju..."
                  value={newWish}
                  onChange={(e) => setNewWish(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:ring-2 focus:ring-rose focus:border-transparent resize-none font-body"
                />
              </div>
              
              <Button
                onClick={saveWish}
                variant="hero"
                size="lg"
                className="w-full"
              >
                💝 Send Wish
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Wishes grid */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              layout
            >
              {wishes.map((wish) => (
                <motion.div
                  key={wish.id}
                  className={`bg-gradient-to-br ${wish.color} rounded-2xl p-6 relative group cursor-pointer`}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -50 }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 5
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 30,
                    layout: { duration: 0.3 }
                  }}
                >
                  <div className="relative z-10">
                    <p className="text-foreground mb-4 italic font-body leading-relaxed">
                      "{wish.text}"
                    </p>
                    <div className="text-sm text-foreground/70 font-medium font-body">
                      — {wish.author}
                    </div>
                  </div>

                  {/* Delete button */}
                  <motion.button
                    className="absolute top-2 right-2 w-6 h-6 bg-red-500/20 hover:bg-red-500 text-red-600 hover:text-white rounded-full flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteWish(wish.id);
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    ×
                  </motion.button>

                  {/* Decorative corner */}
                  <div className="absolute bottom-0 right-0 w-6 h-6 bg-white/20 rounded-tl-2xl" />
                  
                  {/* Floating sparkle */}
                  <motion.div
                    className="absolute top-4 left-4 text-yellow-300 text-xs"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    ✨
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {wishes.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-6xl mb-4">💝</div>
              <p className="text-xl text-foreground/60 font-body">
                Be the first to add a birthday wish!
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WishWall;