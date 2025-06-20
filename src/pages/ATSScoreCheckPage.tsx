import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { ExternalLink } from 'lucide-react';

const tools = [
  {
    name: 'Resume Worded',
    url: 'https://resumeworded.com/',
  },
  {
    name: 'Jobscan',
    url: 'https://www.jobscan.co/',
  },
  {
    name: 'Skillsyncer',
    url: 'https://skillsyncer.com/',
  },
  {
    name: 'Zety',
    url: 'https://zety.com/',
  },
];

const ATSScoreCheckPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-24 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            ATS Score Check
          </h1>
          <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">
            Clean, fast, recruiter-friendly. These tools help your resume break through the system.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => window.open(tool.url, '_blank')}
              className="rounded-xl bg-[#111111] border border-[#2c2c2c] hover:border-cyan-500 p-6 flex flex-col items-center gap-4 cursor-pointer shadow-lg hover:shadow-cyan-700/30 transition-all"
            >
              <ExternalLink className="w-8 h-8 text-cyan-400" />
              <h3 className="text-lg font-medium text-slate-100">{tool.name}</h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 text-sm">New tools, new features, same clean vibes. Stay tuned. ✨</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ATSScoreCheckPage;
