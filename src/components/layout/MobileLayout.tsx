
import React, { ReactNode } from 'react';
import { Home, Search, Bell, User, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';

interface MobileLayoutProps {
  children: ReactNode;
}

const MobileLayout = ({ children }: MobileLayoutProps) => {
  const location = useLocation();
  const path = location.pathname;
  const { user, signOut } = useAuth();

  if (!user) {
    return <div>{children}</div>;
  }

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto relative bg-white dark:bg-twitter-dark">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-twitter-border dark:border-gray-800 bg-white/80 dark:bg-twitter-dark/80 backdrop-blur-md">
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center">
            <img 
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.id}`}
              alt="Your avatar"
              className="h-8 w-8 rounded-full mr-4"
            />
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-twitter-blue">
              <g>
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" fill="currentColor"></path>
              </g>
            </svg>
          </div>
          <h1 className="text-lg font-bold">Home</h1>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => signOut()}
            className="p-2"
          >
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>

      {/* Footer Navigation */}
      <footer className="sticky bottom-0 z-10 border-t border-twitter-border dark:border-gray-800 bg-white/80 dark:bg-twitter-dark/80 backdrop-blur-md">
        <nav className="flex justify-around items-center px-4 py-3">
          <Link to="/" className={`p-2 rounded-full ${path === '/' ? 'text-twitter-blue' : 'text-gray-500'}`}>
            <Home className="w-6 h-6" />
          </Link>
          <Link to="/search" className={`p-2 rounded-full ${path === '/search' ? 'text-twitter-blue' : 'text-gray-500'}`}>
            <Search className="w-6 h-6" />
          </Link>
          <Link to="/notifications" className={`p-2 rounded-full ${path === '/notifications' ? 'text-twitter-blue' : 'text-gray-500'}`}>
            <Bell className="w-6 h-6" />
          </Link>
          <Link to="/profile" className={`p-2 rounded-full ${path === '/profile' ? 'text-twitter-blue' : 'text-gray-500'}`}>
            <User className="w-6 h-6" />
          </Link>
        </nav>
      </footer>

      {/* Floating Tweet Button */}
      <div className="absolute right-4 bottom-20">
        <button 
          className="bg-twitter-blue hover:bg-blue-500 transition-colors text-white p-3 rounded-full shadow-lg"
          aria-label="Create tweet"
          onClick={() => {
            const tweetForm = document.querySelector('textarea');
            if (tweetForm) {
              tweetForm.focus();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23 3C22.1 3.35 21.1 3.58 20.1 3.69C21.2 3.05 22 2.02 22.4 0.77C21.4 1.38 20.3 1.8 19.1 2.08C18.1 1.05 16.7 0.42 15.2 0.42C12.3 0.42 10 2.75 10 5.65C10 6.07 10.1 6.5 10.2 6.9C6.2 6.65 2.8 4.62 0.8 1.62C0.3 2.42 0.1 3.38 0.1 4.36C0.1 6.26 1.1 7.94 2.7 8.95C2 8.94 1.3 8.75 0.7 8.45C0.7 8.47 0.7 8.5 0.7 8.52C0.7 11.05 2.5 13.15 4.9 13.65C4.5 13.75 4 13.8 3.5 13.8C3.2 13.8 2.8 13.75 2.5 13.7C3.2 15.75 5.1 17.25 7.3 17.3C5.6 18.65 3.5 19.45 1.2 19.45C0.8 19.45 0.4 19.4 0 19.35C2.2 20.8 4.8 21.65 7.5 21.65C16.5 21.65 21.5 14.05 21.5 7.45C21.5 7.2 21.5 6.95 21.5 6.7C22.5 6 23.3 5.15 24 4.15L23 3Z" 
                  fill="currentColor"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MobileLayout;
