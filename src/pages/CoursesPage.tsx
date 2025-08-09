import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
      case 'beginner': return 'bg-green-700';
      case 'intermediate': return 'bg-yellow-600';
      case 'advanced': return 'bg-red-700';
      default: return 'bg-gray-600';
    }
  };

  const getVideoThumbnail = (videoUrl: string) => {
    const match = videoUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    const videoId = match ? match[1] : null;
    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '/placeholder.svg';
  };

  const getPracticeLink = (category: string) => {
    if (category.toLowerCase() === 'dsa') {
      return 'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/';
    }
    return 'https://www.codewithharry.com/tutorials';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20 max-w-6xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-100">
            Curated Courses
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-base md:text-lg">
            Hand-picked content to help you get ahead faster, smarter, cooler.
          </p>
        </motion.div>

        {loading ? (
          <div className="text-center text-gray-400">Loading courses...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => {
              const thumbnailUrl = course.thumbnail_url || getVideoThumbnail(course.video_url);
              const practiceUrl = getPracticeLink(course.category);
              return (
                <motion.div
                  key={course.id}
                  className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:shadow-xl transition-shadow flex flex-col justify-between"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="relative aspect-video">
                    <img
                      src={thumbnailUrl}
                      alt={course.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder.svg';
                      }}
                    />
                    <div
                      className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                      onClick={() => window.open(course.video_url, '_blank')}
                    >
                      <Play className="text-white w-12 h-12" />
                    </div>
                  </div>

                  <div className="p-5 flex flex-col justify-between h-full">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-white truncate">
                          {course.title}
                        </h3>
                        <BookOpen className="text-primary" size={18} />
                      </div>

                      <p className="text-gray-400 text-sm line-clamp-2">{course.description}</p>

                      <div className="flex flex-wrap items-center gap-2 text-xs min-h-[24px]">
                        <Badge className="bg-slate-600 text-white">{course.category}</Badge>
                        {course.difficulty && (
                          <Badge className={`${getDifficultyColor(course.difficulty)} text-white`}>
                            {course.difficulty}
                          </Badge>
                        )}
                        {course.duration && (
                          <div className="flex items-center gap-1 text-gray-300">
                            <Clock size={14} />
                            <span>{course.duration}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="pt-4 space-y-2">
                      <Button
                        onClick={() => window.open(course.video_url, '_blank')}
                        className="w-full bg-gray-100 text-black hover:bg-white"
                      >
                        <Play size={16} /> Watch
                      </Button>

                      <Button
                        onClick={() => window.open(practiceUrl, '_blank')}
                        variant="outline"
                        className="w-full border-gray-500 text-gray-200 hover:bg-slate-700"
                      >
                        <ExternalLink size={16} /> Practice
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {!loading && courses.length === 0 && (
          <div className="text-center text-gray-400 py-10">No courses available right now.</div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
