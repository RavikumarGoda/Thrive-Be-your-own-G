
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
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto px-4 py-24 max-w-2xl">
        <Card className="border-border text-center">
          <CardContent className="pt-12 pb-12">
            <h1 className="text-3xl font-bold text-primary mb-8">Ravi Kumar Reddy Goda</h1>
            
            <div className="flex justify-center gap-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <Button
                    key={social.name}
                    onClick={() => handleSocialClick(social.url)}
                    variant="outline"
                    size="lg"
                    className="w-16 h-16 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
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
