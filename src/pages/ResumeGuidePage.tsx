import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/Navbar';

const ResumeGuidePage = () => {
  const handleResumeGuideClick = () => {
    window.open('https://takeuforward.org/interviews/the-ultimate-resume-building-guide-for-coding-interviews/', '_blank');
  };

  return (
    <div className="min-h-screen text-foreground bg-gradient-to-b from-slate-900 to-slate-950">
      <Navbar />
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Resume Guide</h1>
          <p className="text-gray-400 text-base md:text-lg">Build a top-notch resume for coding interviews</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          whileHover={{ scale: 1.01 }}
          className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
        >
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex items-center gap-3 text-white">
              <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                📄
              </motion.div>
              Ultimate Resume Guide
            </CardTitle>
            <p className="text-gray-300 text-lg">
              Everything you need to build a top-notch resume for coding interviews — all in one place.
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
              >
                <h3 className="font-semibold mb-3 text-white">What's Included:</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  {[
                    "Resume tips & best practices",
                    "Common mistakes to avoid",
                    "Striver's Overleaf resume template",
                    "Downloadable PDF templates",
                    "Real resume examples for roles like Fresher, Backend, Cybersecurity"
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-primary/5 rounded-lg border border-primary/20"
                >
                  <div className="text-3xl mb-2">🚀</div>
                  <p className="text-sm text-gray-300">Get interview-ready with proven templates</p>
                </motion.div>
              </motion.div>
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Button 
                onClick={handleResumeGuideClick}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2 text-lg py-6"
              >
                Explore the Resume Guide
                <ArrowRight size={20} />
              </Button>
            </motion.div>
          </CardContent>
        </motion.div>
      </div>
    </div>
  );
};

export default ResumeGuidePage;