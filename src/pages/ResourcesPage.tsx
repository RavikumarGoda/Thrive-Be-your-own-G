import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { Navbar } from '@/components/Navbar';

const ResourcesPage = () => {
  const programmingLanguages = [
    {
      name: 'HTML',
      icon: '🌐',
      color: 'from-orange-500 to-orange-600',
      description: 'Web Structure',
      notesLink: 'https://drive.google.com/file/d/10l_B4Q8T5b3BHDEtkmB5jSwirBS5WIZo/view?usp=sharing',
    },
    {
      name: 'CSS',
      icon: '🎨',
      color: 'from-blue-500 to-blue-600',
      description: 'Web Styling',
      notesLink: 'https://drive.google.com/file/d/1vBQCi0M-3gHjKW5WRcceclPGOxVET07f/view?usp=sharing',
    },
    {
      name: 'JavaScript',
      icon: '⚡',
      color: 'from-yellow-500 to-yellow-600',
      description: 'Web Interactivity',
      notesLink: 'https://drive.google.com/file/d/1q0Zyqv3rn-MTTbLEjzPpugNTyOVJMAzA/view?usp=sharing',
    },
    {
      name: 'React',
      icon: '⚛️',
      color: 'from-cyan-500 to-cyan-600',
      description: 'UI Library',
      notesLink: 'https://drive.google.com/file/d/1Wrq1IYLVYpxRSH1T3TGZLjDmnbU01ksx/view?usp=sharing',
    },
    {
      name: 'Python',
      icon: '🐍',
      color: 'from-green-500 to-green-600',
      description: 'General Purpose',
      notesLink: 'https://drive.google.com/file/d/1y4OM50r1vcwzvD_njM8kzLW7n5wGP10N/view?usp=sharing',
    },
    {
      name: 'Java',
      icon: '☕',
      color: 'from-red-500 to-red-600',
      description: 'Enterprise Development',
      notesLink: 'https://drive.google.com/file/d/1EVqik9kZ1CTn5M-EWWdnuDFASgi2Y02P/view?usp=sharing',
    },
    {
      name: 'CN,OS,DBMS,OODP',
      icon: '💾',
      color: 'from-purple-500 to-purple-600',
      description: 'Core CS Concepts',
      notesLink: 'https://drive.google.com/drive/folders/1fPL2Pxq_tqRVOxvMQxxRakBzX8NiNoQb?usp=sharing',
    },
    {
      name: 'DSA',
      icon: '🧮',
      color: 'from-indigo-500 to-indigo-600',
      description: 'Data Structures & Algorithms',
      notesLink: 'https://github.com/RavikumarGoda/Data-Structures-and-Algorithms-Notes',
    },
  ];

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut', // ✅ TypeScript-safe easing function
      },
    },
  };

  return (
    <div className="min-h-screen text-foreground bg-[#1e293b]">
      <Navbar />
      <div className="container mx-auto px-4 py-24 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            📚 Study Notes for Success
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Unlock crisp and curated resources to ace your technical interviews and CS subjects.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {programmingLanguages.map((lang, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => window.open(lang.notesLink, '_blank')}
              className="cursor-pointer"
            >
              <Card className="bg-slate-800/50 backdrop-blur-md border border-slate-700 hover:shadow-xl transition-all duration-300 group rounded-2xl">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 text-4xl transition-transform duration-300 group-hover:scale-125">
                    {lang.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                    {lang.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-6">{lang.description}</p>
                  <Button
                    size="sm"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200"
                  >
                    <ExternalLink size={14} className="mr-2" />
                    Get Notes
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ResourcesPage;
