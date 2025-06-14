
import React from 'react';
import { Button } from '@/components/ui/button';
import { TypingAnimation } from './TypingAnimation';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

export const Hero = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleStartThriving = () => {
    if (user) {
      // If user is logged in, navigate to courses page
      navigate('/courses');
    } else {
      // If user is not logged in, navigate to auth page
      navigate('/auth');
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-background to-muted py-20 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <TypingAnimation />
          <div className="flex justify-center mt-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg"
              onClick={handleStartThriving}
            >
              Start Thriving
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
