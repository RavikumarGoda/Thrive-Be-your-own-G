
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, ChevronUp, ArrowLeft, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  created_at: string;
}

const FAQPage = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const navigate = useNavigate();

  useEffect(() => {
    fetchFAQs();
  }, []);

  const fetchFAQs = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('faq')
      .select('*')
      .order('category', { ascending: true });

    if (!error && data) {
      setFaqs(data);
    }
    setLoading(false);
  };

  const categories = ['All', ...Array.from(new Set(faqs.map(faq => faq.category)))];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'JavaScript': 'bg-yellow-600',
      'React': 'bg-blue-600', 
      'Database': 'bg-green-600',
      'OOP': 'bg-purple-600',
      'DSA': 'bg-orange-600',
      'System Design': 'bg-red-600',
      'Web Development': 'bg-indigo-600'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-600';
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="flex items-center gap-4 mb-6">
          <Button
            onClick={() => navigate('/')}
            variant="ghost"
            className="text-muted-foreground hover:text-primary"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Button>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Interview FAQ</h1>
          <p className="text-muted-foreground text-base md:text-lg">Frequently asked questions in technical interviews</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-6 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              placeholder="Search questions or answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="text-xs"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="text-muted-foreground">Loading FAQs...</div>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFAQs.map(faq => (
              <Card key={faq.id} className="border-border hover:shadow-md transition-shadow">
                <CardHeader 
                  className="cursor-pointer"
                  onClick={() => toggleExpanded(faq.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-2">
                        <CardTitle className="text-lg leading-tight flex-1">{faq.question}</CardTitle>
                        <Badge className={`text-xs ${getCategoryColor(faq.category)}`}>
                          {faq.category}
                        </Badge>
                      </div>
                    </div>
                    {expandedItems.has(faq.id) ? (
                      <ChevronUp className="text-muted-foreground ml-2 flex-shrink-0" size={20} />
                    ) : (
                      <ChevronDown className="text-muted-foreground ml-2 flex-shrink-0" size={20} />
                    )}
                  </div>
                </CardHeader>
                {expandedItems.has(faq.id) && (
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        )}

        {!loading && filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground">No FAQs found matching your search.</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQPage;
