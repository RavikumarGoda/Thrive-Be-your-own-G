import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { ExternalLink, Zap, Star, Shield } from 'lucide-react';

const tools = [
  {
    name: 'Resume Worded',
    icon: <Zap size={28} />,
    description: 'Instant resume feedback with actionable insights.',
    url: 'https://resumeworded.com/',
  },
  {
    name: 'Jobscan',
    icon: <Star size={28} />,
    description: 'Match your resume to job descriptions with ATS scoring.',
    url: 'https://www.jobscan.co/',
  },
  {
    name: 'Skillsyncer',
    icon: <Shield size={28} />,
    description: 'Compare your resume with job postings instantly.',
    url: 'https://skillsyncer.com/',
  },
  {
    name: 'Zety',
    icon: <Zap size={28} />,
    description: 'Professional resume builder with real-time feedback.',
    url: 'https://zety.com/',
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
  hidden: { opacity: 0, y: 50, rotateX: 30 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: 'spring' as const,
      damping: 20,
      stiffness: 150,
    },
  },
};

const ATSScoreCheckPage = () => {
  return (
    <div className="min-h-screen text-foreground bg-gradient-to-b from-slate-900 to-slate-950">
      <Navbar />
      <div className="container mx-auto px-4 py-24 max-w-5xl">
        {/* Heading Animation */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
            ATS Score Tools
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Supercharge your resume with tools that give you instant feedback and optimization for Applicant Tracking Systems.
          </p>
        </motion.div>

        {/* Cards Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        >
          {tools.map((tool) => (
            <motion.div
              key={tool.name}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                rotate: -1,
                transition: { type: 'spring', stiffness: 300 },
              }}
              onClick={() => window.open(tool.url, '_blank')}
              className="bg-slate-800 hover:bg-slate-700 border border-slate-700 p-6 rounded-2xl cursor-pointer flex flex-col items-start justify-between text-left transition-all group"
            >
              <motion.div
                className="mb-3 text-primary bg-white/10 p-3 rounded-full"
                whileHover={{ scale: 1.2, rotate: 15 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                {tool.icon}
              </motion.div>
              <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-primary transition-colors">
                {tool.name}
              </h3>
              <p className="text-gray-400 text-sm flex-1 mb-3">{tool.description}</p>
              <ExternalLink className="text-gray-500 group-hover:text-white transition" />
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400">More ATS optimizers coming soon. Stay tuned. 🚀</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ATSScoreCheckPage;
