
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  BookOpen, 
  FileText, 
  Download, 
  MessageSquare,
  Users,
  CheckCircle,
  Target,
  Upload
} from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Personalized Roadmaps',
    description: 'Get step-by-step career paths tailored to your goals with milestone tracking.',
    color: 'bg-[#1A237E]',
    id: 'roadmaps'
  },
  {
    icon: BookOpen,
    title: 'Curated Courses',
    description: 'Access hand-picked courses for DSA, Full Stack Development, and programming languages.',
    color: 'bg-[#1A237E]',
    id: 'courses'
  },
  {
    icon: FileText,
    title: 'ATS Resume Scoring',
    description: 'Upload your resume and get AI-powered ATS compatibility scores with improvement tips.',
    color: 'bg-[#1A237E]',
    id: 'resume'
  },
  {
    icon: Download,
    title: 'Free Resources',
    description: 'Download notes, project ideas, and interview Q&A organized by domain.',
    color: 'bg-[#1A237E]',
    id: 'resources'
  },
  {
    icon: Upload,
    title: 'Resume Templates',
    description: 'Access ATS-friendly Overleaf templates for professional resume creation.',
    color: 'bg-[#1A237E]'
  },
  {
    icon: MessageSquare,
    title: 'AI Assistant',
    description: 'Get instant answers to career and learning questions with our AI-powered chat.',
    color: 'bg-[#1A237E]',
    id: 'ai-assistant'
  },
  {
    icon: Users,
    title: 'Job Alerts',
    description: 'Join curated WhatsApp channels for real-time job and internship notifications.',
    color: 'bg-[#1A237E]'
  },
  {
    icon: CheckCircle,
    title: 'Progress Tracking',
    description: 'Monitor your learning journey and celebrate milestones as you grow.',
    color: 'bg-[#1A237E]'
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A237E] mb-4">
            Everything You Need to Thrive
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive tools and resources to accelerate your career growth and learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              id={feature.id}
              className="hover:shadow-lg transition-shadow duration-300 border border-gray-600 hover:border-[#1A237E]/20 bg-gray-900"
            >
              <CardContent className="p-6 text-center">
                <div className={`${feature.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-[#1A237E] mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
