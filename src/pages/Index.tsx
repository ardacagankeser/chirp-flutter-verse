
import React from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import TweetForm from '@/components/TweetForm';
import RealTweet from '@/components/RealTweet';
import { useTweets } from '@/hooks/useTweets';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  const { data: tweets, isLoading, error } = useTweets();
  const { user, loading: authLoading } = useAuth();

  if (authLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-twitter-blue mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-twitter-dark">
        <div className="text-center max-w-md mx-auto p-8">
          <svg viewBox="0 0 24 24" className="h-12 w-12 text-twitter-blue mx-auto mb-6">
            <g>
              <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" fill="currentColor"></path>
            </g>
          </svg>
          <h1 className="text-3xl font-bold mb-4">Welcome to Twitter Clone</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Join the conversation and share your thoughts with the world.
          </p>
          <Link to="/auth">
            <Button className="bg-twitter-blue hover:bg-blue-500 text-white px-8 py-3 text-lg">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <MobileLayout>
      <TweetForm />
      
      {isLoading ? (
        <div className="flex items-center justify-center p-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-twitter-blue"></div>
        </div>
      ) : error ? (
        <div className="p-4 text-center text-red-500">
          Failed to load tweets. Please try again.
        </div>
      ) : tweets && tweets.length > 0 ? (
        tweets.map((tweet) => (
          <RealTweet key={tweet.id} {...tweet} />
        ))
      ) : (
        <div className="p-8 text-center text-gray-500">
          <p className="text-xl mb-2">No tweets yet!</p>
          <p>Be the first to share something.</p>
        </div>
      )}
    </MobileLayout>
  );
};

export default Index;
