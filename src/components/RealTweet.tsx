
import React from 'react';
import { Heart, MessageCircle, Repeat } from 'lucide-react';
import { Tweet } from '@/hooks/useTweets';
import { useLikeTweet } from '@/hooks/useTweets';
import { useAuth } from '@/hooks/useAuth';

interface RealTweetProps extends Tweet {}

const RealTweet = ({ 
  id, 
  content, 
  image_url, 
  created_at, 
  username, 
  full_name, 
  avatar_url, 
  likes_count,
  liked_by_user 
}: RealTweetProps) => {
  const likeTweet = useLikeTweet();
  const { user } = useAuth();

  const handleLike = () => {
    if (!user) return;
    likeTweet.mutate({ tweetId: id, isLiked: liked_by_user });
  };

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'now';
    if (diffInHours < 24) return `${diffInHours}h`;
    return `${Math.floor(diffInHours / 24)}d`;
  };

  return (
    <article className="p-4 border-b border-twitter-border dark:border-gray-800 hover:bg-gray-50/30 dark:hover:bg-gray-900/30 transition-colors cursor-pointer">
      <div className="flex gap-3">
        <img 
          src={avatar_url} 
          alt={full_name} 
          className="w-12 h-12 rounded-full"
        />
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1 text-sm">
            <span className="font-bold text-gray-900 dark:text-white truncate">
              {full_name}
            </span>
            <span className="text-gray-500 truncate">@{username}</span>
            <span className="text-gray-500">·</span>
            <span className="text-gray-500">{formatTimeAgo(created_at)}</span>
          </div>
          
          <div className="mt-1">
            <p className="text-gray-900 dark:text-white whitespace-pre-wrap">
              {content}
            </p>
            
            {image_url && (
              <div className="mt-3">
                <img 
                  src={image_url} 
                  alt="Tweet image" 
                  className="rounded-2xl max-w-full h-auto border border-gray-200 dark:border-gray-700"
                />
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-8 mt-3 text-gray-500">
            <button className="flex items-center gap-2 hover:text-twitter-blue transition-colors group">
              <div className="p-2 rounded-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20">
                <MessageCircle className="w-4 h-4" />
              </div>
              <span className="text-sm">0</span>
            </button>
            
            <button className="flex items-center gap-2 hover:text-green-500 transition-colors group">
              <div className="p-2 rounded-full group-hover:bg-green-50 dark:group-hover:bg-green-900/20">
                <Repeat className="w-4 h-4" />
              </div>
              <span className="text-sm">0</span>
            </button>
            
            <button 
              onClick={handleLike}
              disabled={!user || likeTweet.isPending}
              className={`flex items-center gap-2 transition-colors group ${
                liked_by_user 
                  ? 'text-red-500' 
                  : 'hover:text-red-500'
              }`}
            >
              <div className="p-2 rounded-full group-hover:bg-red-50 dark:group-hover:bg-red-900/20">
                <Heart className={`w-4 h-4 ${liked_by_user ? 'fill-current' : ''}`} />
              </div>
              <span className="text-sm">{likes_count}</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default RealTweet;
