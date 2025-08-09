import React from 'react';
import { Button } from '@/components/ui/button';
import { TypingAnimation } from './TypingAnimation';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { motion, Variants, easeInOut } from 'framer-motion';

export const Hero = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleStartThriving = () => {
    navigate(user ? '/courses' : '/auth');
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeInOut,
      },
    },
  };

  return (
    <section className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-background to-muted flex items-center justify-center px-4 text-center">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center" variants={fadeInUp}>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6"
            variants={fadeInUp}
          >
            <TypingAnimation />
          </motion.h1>

          <motion.div
            className="flex justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg shadow-md transition-all"
              onClick={handleStartThriving}
            >
              Start Thriving
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
