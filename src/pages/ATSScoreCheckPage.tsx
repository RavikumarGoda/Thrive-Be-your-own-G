
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Star, Shield, Zap } from 'lucide-react';
import { Navbar } from '@/components/Navbar';

const ATSScoreCheckPage = () => {
  const atsTools = [
    {
      name: "Resume Worded",
      description: "AI-powered resume and LinkedIn optimizer with detailed feedback and suggestions for improvement.",
      url: "https://resumeworded.com/",
      features: ["AI-powered analysis", "LinkedIn optimization", "Industry-specific feedback"],
      rating: 4.8,
      type: "Premium/Free"
    },
    {
      name: "Jobscan",
      description: "Compare your resume against job descriptions to optimize for ATS systems and increase match rate.",
      url: "https://www.jobscan.co/",
      features: ["Job description matching", "ATS compatibility check", "Keyword optimization"],
      rating: 4.7,
      type: "Premium/Free"
    },
    {
      name: "Skillsyncer",
      description: "Free ATS resume scanner that analyzes your resume against job descriptions and provides optimization tips.",
      url: "https://skillsyncer.com/",
      features: ["Free ATS scanning", "Match percentage", "Missing keywords analysis"],
      rating: 4.5,
      type: "Free"
    },
    {
      name: "Zety Resume Builder",
      description: "Professional resume builder with ATS-friendly templates and real-time content suggestions.",
      url: "https://zety.com/",
      features: ["ATS-friendly templates", "Real-time suggestions", "Professional designs"],
      rating: 4.6,
      type: "Premium/Free"
    }
  ];

  const handleOpenTool = (url: string) => {
    window.open(url, '_blank');
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Free':
        return 'bg-green-600';
      case 'Premium/Free':
        return 'bg-blue-600';
      case 'Paid Service':
        return 'bg-purple-600';
      default:
        return 'bg-gray-600';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Free':
        return <Zap className="text-green-500" size={20} />;
      case 'Premium/Free':
        return <Star className="text-blue-500" size={20} />;
      case 'Paid Service':
        return <Shield className="text-purple-500" size={20} />;
      default:
        return <Star className="text-gray-500" size={20} />;
    }
  };

  return (
    <div className="min-h-screen text-foreground" style={{ backgroundColor: 'rgb(30, 41, 59)' }}>
      <Navbar />
      <div className="container mx-auto px-4 py-24 max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">ATS Score Check</h1>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            Use these professional ATS resume checkers to optimize your resume for Applicant Tracking Systems 
            and increase your chances of getting noticed by recruiters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {atsTools.map((tool, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {getTypeIcon(tool.type)}
                      <CardTitle className="text-xl text-white">{tool.name}</CardTitle>
                      <Badge className={`text-xs ${getTypeColor(tool.type)}`}>
                        {tool.type}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={i < Math.floor(tool.rating) ? "text-yellow-500 fill-current" : "text-gray-300"}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-300">{tool.rating}/5</span>
                    </div>
                    <p className="text-gray-300 text-sm">{tool.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2 text-white">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {tool.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="outline" className="text-xs border-gray-600 text-gray-300">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button
                    onClick={() => handleOpenTool(tool.url)}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Check ATS Score
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8 bg-slate-800 border-slate-700">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-3 text-white">💡 ATS Optimization Tips</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
                <div>
                  <h4 className="font-medium text-white mb-2">Format Tips:</h4>
                  <ul className="text-left space-y-1">
                    <li>• Use standard fonts (Arial, Calibri, Times New Roman)</li>
                    <li>• Avoid images, graphics, and tables</li>
                    <li>• Use simple bullet points</li>
                    <li>• Save as .docx or .pdf</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-2">Content Tips:</h4>
                  <ul className="text-left space-y-1">
                    <li>• Include relevant keywords from job description</li>
                    <li>• Use standard section headers</li>
                    <li>• Quantify achievements with numbers</li>
                    <li>• Match job requirements closely</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ATSScoreCheckPage;
