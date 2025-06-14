
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Clock, BookOpen, ExternalLink } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Navbar } from '@/components/Navbar';

interface Course {
  id: string;
  title: string;
  category: string;
  description: string;
  video_url: string;
  thumbnail_url?: string;
  difficulty?: string;
  duration?: string;
}

const CoursesPage = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setCourses(data);
    }
    setLoading(false);
  };

  const getDifficultyColor = (difficulty?: string) => {
    switch (difficulty?.toLowerCase()) {
      case 'beginner': return 'bg-green-600';
      case 'intermediate': return 'bg-yellow-600';
      case 'advanced': return 'bg-red-600';
      default: return 'bg-gray-600';
    }
  };

  const getAdditionalLink = (category: string) => {
    if (category === 'DSA') {
      return {
        url: 'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/',
        text: 'Striver\'s A2Z DSA Sheet'
      };
    }
    if (category === 'Web Development') {
      return {
        url: 'https://www.codewithharry.com/',
        text: 'CodeWithHarry Website'
      };
    }
    return null;
  };

  const getVideoThumbnail = (videoUrl: string) => {
    // Extract YouTube video ID from URL
    const match = videoUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    const videoId = match ? match[1] : null;
    
    if (videoId) {
      return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    }
    
    // Fallback for other video platforms or custom thumbnails
    return '/placeholder.svg';
  };

  return (
    <div className="min-h-screen text-foreground" style={{ backgroundColor: 'rgb(30, 41, 59)' }}>
      <Navbar />
      <div className="container mx-auto px-4 py-24 max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Curated Courses</h1>
          <p className="text-gray-300 text-base md:text-lg">Hand-picked video courses to accelerate your learning</p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="text-gray-300">Loading courses...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map(course => {
              const additionalLink = getAdditionalLink(course.category);
              const thumbnailUrl = course.thumbnail_url || getVideoThumbnail(course.video_url);
              
              return (
                <Card key={course.id} className="bg-slate-800 border-slate-700 hover:shadow-lg transition-shadow overflow-hidden">
                  {/* Thumbnail Section */}
                  <div className="relative aspect-video w-full overflow-hidden">
                    <img 
                      src={thumbnailUrl} 
                      alt={course.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder.svg';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                         onClick={() => window.open(course.video_url, '_blank')}>
                      <Play className="text-white w-16 h-16" />
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-lg leading-tight flex-1 text-white">
                        {course.title}
                      </CardTitle>
                      <BookOpen className="text-primary flex-shrink-0 ml-2" size={20} />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {course.category}
                      </Badge>
                      {course.difficulty && (
                        <Badge className={`text-xs ${getDifficultyColor(course.difficulty)}`}>
                          {course.difficulty}
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {course.description}
                    </p>
                    
                    {course.duration && (
                      <div className="flex items-center gap-2 mb-4 text-gray-300 text-sm">
                        <Clock size={16} />
                        <span>{course.duration}</span>
                      </div>
                    )}

                    <div className="space-y-2">
                      <Button
                        onClick={() => window.open(course.video_url, '_blank')}
                        className="w-full bg-primary hover:bg-primary/90 flex items-center gap-2"
                      >
                        <Play size={16} />
                        Watch Course
                      </Button>
                      
                      {additionalLink && (
                        <Button
                          onClick={() => window.open(additionalLink.url, '_blank')}
                          variant="outline"
                          className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground flex items-center gap-2"
                        >
                          <ExternalLink size={16} />
                          {additionalLink.text}
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {!loading && courses.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-300">No courses available.</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
