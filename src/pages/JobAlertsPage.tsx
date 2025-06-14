
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, ExternalLink } from 'lucide-react';
import { Navbar } from '@/components/Navbar';

const JobAlertsPage = () => {
  const jobChannels = [
    {
      name: "Krishan Kumar - Jobs & Internships Updates",
      description: "Get daily updates on latest job openings and internship opportunities across various tech companies",
      whatsappLink: "https://whatsapp.com/channel/0029Va6I79K60eBfQ92DwH0W",
      type: "WhatsApp Channel",
      followers: "50K+",
      category: "Jobs & Internships"
    },
    {
      name: "Talentd Community",
      description: "Join our professional community for job alerts, career guidance, and networking opportunities",
      whatsappLink: "https://www.talentd.in/redirect.php?url=whatsapp-community",
      websiteLink: "https://www.talentd.in",
      type: "WhatsApp Community",
      followers: "25K+",
      category: "Career Community"
    }
  ];

  const handleJoinChannel = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <div className="min-h-screen text-foreground" style={{ backgroundColor: 'rgb(30, 41, 59)' }}>
      <Navbar />
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Job Alerts</h1>
          <p className="text-gray-300 text-base md:text-lg">Join WhatsApp channels for latest job opportunities</p>
        </div>

        <div className="grid gap-6">
          {jobChannels.map((channel, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700 hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2 flex items-center gap-2 text-white">
                      <MessageCircle className="text-green-500" size={20} />
                      {channel.name}
                    </CardTitle>
                    <p className="text-gray-300 text-sm mb-3">{channel.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {channel.type}
                      </Badge>
                      <Badge variant="outline" className="text-xs border-gray-600 text-gray-300">
                        {channel.followers}
                      </Badge>
                      <Badge variant="outline" className="text-xs border-gray-600 text-gray-300">
                        {channel.category}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={() => handleJoinChannel(channel.whatsappLink)}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                  >
                    <MessageCircle size={16} className="mr-2" />
                    Join WhatsApp {channel.type === "WhatsApp Channel" ? "Channel" : "Community"}
                  </Button>
                  {channel.websiteLink && (
                    <Button
                      onClick={() => handleJoinChannel(channel.websiteLink)}
                      variant="outline"
                      className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Visit Website
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobAlertsPage;
