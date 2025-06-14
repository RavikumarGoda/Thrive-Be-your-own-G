
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Star, Users, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: Users,
    title: 'Create Your Profile',
    description: 'Sign up and tell us about your career goals and current skill level.'
  },
  {
    icon: Star,
    title: 'Choose Your Path',
    description: 'Select from personalized roadmaps tailored to your target role.'
  },
  {
    icon: TrendingUp,
    title: 'Start Learning',
    description: 'Follow your roadmap, complete courses, and track your progress.'
  }
];

export const GetStarted = () => {
  return (
    <section className="py-20 bg-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A237E] mb-4">
            Start Your Journey Today
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join thousands of students and professionals who are already thriving with our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <Card className="bg-gray-800 border border-gray-600 hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-[#1A237E] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <step.icon className="text-white" size={40} />
                  </div>
                  <div className="text-2xl font-bold text-[#1A237E] mb-2">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-[#1A237E] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-[#1A237E] hover:bg-[#1A237E]/90 text-white px-12 py-4 text-lg"
          >
            Get Started Now
            <ArrowRight className="ml-2" size={20} />
          </Button>
          <p className="text-gray-400 mt-4">
            Free to start • No credit card required
          </p>
        </div>
      </div>
    </section>
  );
};
