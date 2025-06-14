
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleProtectedRoute = (route: string) => {
    if (!user) {
      navigate('/auth');
      return;
    }
    navigate(route);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              Thrive
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <button 
                onClick={() => handleProtectedRoute('/courses')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Courses
              </button>
              <button 
                onClick={() => handleProtectedRoute('/ats-score-check')}
                className="text-foreground hover:text-primary transition-colors"
              >
                ATS
              </button>
              <button 
                onClick={() => handleProtectedRoute('/resources')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Notes
              </button>
              <button 
                onClick={() => handleProtectedRoute('/resume-guide')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Resume Guide
              </button>
              <button 
                onClick={() => handleProtectedRoute('/job-alerts')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Job Alerts
              </button>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors">
                About
              </Link>
            </div>
          </div>

          {/* Auth Section */}
          <div className="hidden md:block">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        <User className="h-5 w-5" />
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuItem onClick={handleSignOut}>
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/auth">
                <Button>Sign In</Button>
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                to="/" 
                className="block text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <button 
                onClick={() => {
                  handleProtectedRoute('/courses');
                  setIsOpen(false);
                }}
                className="block text-foreground hover:text-primary transition-colors py-2 w-full text-left"
              >
                Courses
              </button>
              <button 
                onClick={() => {
                  handleProtectedRoute('/ats-score-check');
                  setIsOpen(false);
                }}
                className="block text-foreground hover:text-primary transition-colors py-2 w-full text-left"
              >
                ATS
              </button>
              <button 
                onClick={() => {
                  handleProtectedRoute('/resources');
                  setIsOpen(false);
                }}
                className="block text-foreground hover:text-primary transition-colors py-2 w-full text-left"
              >
                Notes
              </button>
              <button 
                onClick={() => {
                  handleProtectedRoute('/resume-guide');
                  setIsOpen(false);
                }}
                className="block text-foreground hover:text-primary transition-colors py-2 w-full text-left"
              >
                Resume Guide
              </button>
              <button 
                onClick={() => {
                  handleProtectedRoute('/job-alerts');
                  setIsOpen(false);
                }}
                className="block text-foreground hover:text-primary transition-colors py-2 w-full text-left"
              >
                Job Alerts
              </button>
              <Link 
                to="/about" 
                className="block text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
              {user ? (
                <div className="pt-4 border-t border-border">
                  <Button onClick={handleSignOut} variant="outline" className="w-full">
                    Sign Out
                  </Button>
                </div>
              ) : (
                <div className="pt-4 border-t border-border">
                  <Link to="/auth" onClick={() => setIsOpen(false)}>
                    <Button className="w-full">Sign In</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
