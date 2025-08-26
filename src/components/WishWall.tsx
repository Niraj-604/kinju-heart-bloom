import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLocalStorage } from 'react-use';
import { useToast } from '@/hooks/use-toast';
import { X, Heart } from 'lucide-react';

interface Wish {
  id: string;
  name: string;
  message: string;
  color: string;
  timestamp: number;
}

const WishWall: React.FC = () => {
  const [wishes, setWishes] = useLocalStorage<Wish[]>('birthday-wishes', []);
  const [showForm, setShowForm] = useState(false);
  const [newWish, setNewWish] = useState({ name: '', message: '' });
  const { toast } = useToast();

  const colors = [
    'from-rose to-pink-300',
    'from-champagne to-yellow-200',
    'from-purple-300 to-pink-300',
    'from-blue-200 to-blue-300',
    'from-green-200 to-green-300',
    'from-orange-200 to-orange-300'
  ];

  const addWish = () => {
    if (!newWish.name.trim() || !newWish.message.trim()) {
      toast({
        title: "Please fill in all fields",
        description: "Both name and message are required",
        variant: "destructive"
      });
      return;
    }

    const wish: Wish = {
      id: Date.now().toString(),
      name: newWish.name.trim(),
      message: newWish.message.trim(),
      color: colors[Math.floor(Math.random() * colors.length)],
      timestamp: Date.now()
    };

    setWishes([...(wishes || []), wish]);
    setNewWish({ name: '', message: '' });
    setShowForm(false);

    toast({
      title: "Wish added! 💖",
      description: "Your beautiful message has been added to the wall",
    });
  };

  const removeWish = (id: string) => {
    setWishes((wishes || []).filter(wish => wish.id !== id));
  };

  return (
    <section id="wishes" className="py-20 px-6 bg-gradient-to-br from-blush via-soft-white to-champagne/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl font-bold text-gradient mb-8 text-center"
        >
          Wish Wall 💌
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-midnight/70 text-center mb-12 leading-relaxed"
        >
          Leave a sweet message for Kinju's special day
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Button
            onClick={() => setShowForm(true)}
            className="bg-gradient-romantic text-soft-white hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-medium rounded-2xl shadow-romantic"
          >
            <Heart className="mr-2 h-5 w-5" />
            Add Your Wish
          </Button>
        </motion.div>

        {/* Wish Form Modal */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-midnight/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setShowForm(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="glass rounded-3xl p-8 max-w-md w-full shadow-romantic"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-display text-2xl font-bold text-rose">
                    Share Your Wish ✨
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowForm(false)}
                    className="text-midnight/60 hover:text-midnight"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-midnight/80 mb-2">
                      Your Name
                    </label>
                    <Input
                      value={newWish.name}
                      onChange={(e) => setNewWish({ ...newWish, name: e.target.value })}
                      placeholder="Enter your name"
                      className="rounded-xl border-rose/20 focus:border-rose"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-midnight/80 mb-2">
                      Your Message
                    </label>
                    <Textarea
                      value={newWish.message}
                      onChange={(e) => setNewWish({ ...newWish, message: e.target.value })}
                      placeholder="Write your birthday wish for Kinju..."
                      rows={4}
                      className="rounded-xl border-rose/20 focus:border-rose resize-none"
                    />
                  </div>

                  <Button
                    onClick={addWish}
                    className="w-full bg-gradient-romantic text-soft-white hover:scale-105 transition-all duration-300 py-3 rounded-xl"
                  >
                    Add Wish 💖
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Wishes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {(wishes || []).map((wish, index) => (
              <motion.div
                key={wish.id}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
                className={`bg-gradient-to-br ${wish.color} rounded-2xl p-6 shadow-dreamy relative group cursor-pointer`}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeWish(wish.id)}
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-midnight/60 hover:text-midnight h-6 w-6 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>

                <div className="mb-3">
                  <h4 className="font-display text-lg font-bold text-midnight/90">
                    {wish.name}
                  </h4>
                  <div className="flex items-center gap-2 text-midnight/60 text-sm">
                    <Heart className="h-3 w-3 fill-current" />
                    <span>{new Date(wish.timestamp).toLocaleDateString()}</span>
                  </div>
                </div>

                <p className="text-midnight/80 leading-relaxed">
                  {wish.message}
                </p>

                {/* Decorative corner element */}
                <div className="absolute bottom-2 right-3 text-xl opacity-30">
                  💕
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {(!wishes || wishes.length === 0) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">💌</div>
            <p className="text-xl text-midnight/60">
              Be the first to leave a beautiful wish for Kinju!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default WishWall;