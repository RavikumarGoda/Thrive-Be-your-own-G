import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { ExternalLink, Zap, Star, Shield } from 'lucide-react';

const tools = [
  {
    name: 'Resume Worded',
    icon: <Zap size={28} />, 
    description: 'Instant resume feedback with actionable insights.',
    url: 'https://resumeworded.com/'
  },
  {
    name: 'Jobscan',
    icon: <Star size={28} />, 
    description: 'Match your resume to job descriptions with ATS scoring.',
    url: 'https://www.jobscan.co/'
  },
  {
    name: 'Skillsyncer',
    icon: <Shield size={28} />, 
    description: 'Compare your resume with job postings instantly.',
    url: 'https://skillsyncer.com/'
  },
  {
    name: 'Zety',
    icon: <Zap size={28} />, 
    description: 'Professional resume builder with real-time feedback.',
    url: 'https://zety.com/'
  },
];

const ATSScoreCheckPage = () => {
  return (
    <div className="min-h-screen text-foreground bg-gradient-to-b from-slate-900 to-slate-950">
      <Navbar />
      <div className="container mx-auto px-4 py-24 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
            ATS Score Tools
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Supercharge your resume with tools that give you instant feedback and optimization for Applicant Tracking Systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => window.open(tool.url, '_blank')}
              className="bg-slate-800 hover:bg-slate-700 border border-slate-700 p-6 rounded-xl cursor-pointer flex flex-col items-start justify-between text-left transition-all group"
            >
              <div className="mb-3 text-primary bg-white/10 p-3 rounded-full">
                {tool.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-primary transition-colors">
                {tool.name}
              </h3>
              <p className="text-gray-400 text-sm flex-1 mb-3">
                {tool.description}
              </p>
              <ExternalLink className="text-gray-500 group-hover:text-white transition" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400">More ATS optimizers coming soon. Stay tuned. 🚀</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ATSScoreCheckPage;
