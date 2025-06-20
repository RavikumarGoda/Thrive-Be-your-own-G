import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { Navbar } from '@/components/Navbar';

const AboutPage = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/RavikumarGoda',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ravi-kumar-reddy-goda/',
      icon: Linkedin,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/_ravi_.kumar_/',
      icon: Instagram,
    }
  ];

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-foreground">
      <Navbar />
      <div className="container mx-auto px-4 py-24 max-w-xl">
        <Card className="bg-slate-800/40 backdrop-blur-md border border-slate-700 hover:border-primary transition-all duration-300 shadow-xl rounded-2xl">
          <CardContent className="py-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Ravi Kumar Reddy Goda
            </h1>
            <p className="text-gray-400 mb-10 px-4 text-base md:text-lg">
              CS undergrad • Builder of career platforms • Thrive-ing toward impact 🌱
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <Button
                    key={social.name}
                    onClick={() => handleSocialClick(social.url)}
                    variant="outline"
                    size="icon"
                    className="w-14 h-14 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full transition-transform duration-300 hover:scale-110"
                  >
                    <IconComponent size={24} />
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutPage;
