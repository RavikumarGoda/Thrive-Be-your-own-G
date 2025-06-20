import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { ExternalLink, Star, Zap, Shield } from 'lucide-react';

const tools = [
  {
    name: 'Resume Worded',
    icon: <Zap size={28} />,
    color: 'from-indigo-500 to-purple-500',
    url: 'https://resumeworded.com/',
  },
  {
    name: 'Jobscan',
    icon: <Star size={28} />,
    color: 'from-pink-500 to-yellow-500',
    url: 'https://www.jobscan.co/',
  },
  {
    name: 'Skillsyncer',
    icon: <Shield size={28} />,
    color: 'from-green-500 to-emerald-500',
    url: 'https://skillsyncer.com/',
  },
  {
    name: 'Zety',
    icon: <Zap size={28} />,
    color: 'from-blue-500 to-cyan-500',
    url: 'https://zety.com/',
  },
];

const ATSScoreCheckPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-24 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-violet-500">
            ATS Score Check
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
            Your resume. Their system. Let's make it a match.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => window.open(tool.url, '_blank')}
              className={`rounded-2xl p-6 bg-gradient-to-br ${tool.color} shadow-lg cursor-pointer hover:shadow-2xl transition-all`}
            >
              <div className="flex flex-col items-center space-y-3">
                <div className="bg-white/10 p-4 rounded-full backdrop-blur">
                  {tool.icon}
                </div>
                <h3 className="text-xl font-semibold">{tool.name}</h3>
                <ExternalLink className="text-white opacity-60 hover:opacity-100 transition" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400">More integrations and vibes coming soon. 🚀</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ATSScoreCheckPage;
