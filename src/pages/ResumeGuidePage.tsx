
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/Navbar';

const ResumeGuidePage = () => {
  const handleResumeGuideClick = () => {
    window.open('https://takeuforward.org/interviews/the-ultimate-resume-building-guide-for-coding-interviews/', '_blank');
  };

  return (
    <div className="min-h-screen text-foreground" style={{ backgroundColor: 'rgb(30, 41, 59)' }}>
      <Navbar />
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Resume Guide</h1>
          <p className="text-gray-300 text-base md:text-lg">Build a top-notch resume for coding interviews</p>
        </div>

        <Card className="bg-slate-800 border-slate-700 hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex items-center gap-3 text-white">
              📄 Ultimate Resume Guide
            </CardTitle>
            <p className="text-gray-300 text-lg">
              Everything you need to build a top-notch resume for coding interviews — all in one place.
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-semibold mb-3 text-white">What's Included:</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Resume tips & best practices
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Common mistakes to avoid
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Striver's Overleaf resume template
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Downloadable PDF templates
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Real resume examples for roles like Fresher, Backend, Cybersecurity
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-center p-6 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="text-3xl mb-2">🚀</div>
                  <p className="text-sm text-gray-300">Get interview-ready with proven templates</p>
                </div>
              </div>
            </div>
            <Button 
              onClick={handleResumeGuideClick}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2 text-lg py-6"
            >
              Explore the Resume Guide
              <ArrowRight size={20} />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResumeGuidePage;
