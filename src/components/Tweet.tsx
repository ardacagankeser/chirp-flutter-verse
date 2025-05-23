
import React from 'react';
import { Heart, MessageCircle, Repeat, Share } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

export interface TweetProps {
  id: string;
  user: {
    name: string;
    handle: string;
    avatar: string;
    verified?: boolean;
  };
  content: string;
  image?: string;
  createdAt: Date;
  stats: {
    replies: number;
    retweets: number;
    likes: number;
  };
}

const Tweet = ({
  user,
  content,
  image,
  createdAt,
  stats
}: TweetProps) => {
  return (
    <div className="p-4 border-b border-twitter-border dark:border-gray-800">
      <div className="flex">
        {/* Avatar */}
        <div className="mr-3">
          <div 
            className="h-12 w-12 rounded-full bg-cover bg-center"
            style={{ backgroundImage: `url(${user.avatar})` }}
          />
        </div>
        
        {/* Tweet content */}
        <div className="flex-1 min-w-0">
          {/* User info and time */}
          <div className="flex items-center mb-1">
            <span className="font-bold text-sm truncate mr-1">{user.name}</span>
            {user.verified && (
              <svg viewBox="0 0 24 24" aria-label="Verified account" className="h-4 w-4 text-twitter-blue mr-1">
                <g fill="currentColor">
                  <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                </g>
              </svg>
            )}
            <span className="text-gray-500 text-sm truncate">@{user.handle}</span>
            <span className="text-gray-500 text-sm mx-1">·</span>
            <span className="text-gray-500 text-sm">
              {formatDistanceToNow(createdAt, { addSuffix: true })}
            </span>
          </div>
          
          {/* Tweet text */}
          <div className="mb-3">
            <p className="whitespace-pre-wrap">{content}</p>
          </div>
          
          {/* Tweet image if exists */}
          {image && (
            <div className="mb-3 rounded-2xl overflow-hidden">
              <img src={image} alt="" className="w-full h-auto" />
            </div>
          )}
          
          {/* Tweet actions */}
          <div className="flex justify-between max-w-md">
            <button className="flex items-center text-gray-500 hover:text-twitter-blue transition-colors">
              <MessageCircle className="w-4 h-4 mr-1" />
              <span className="text-xs">{stats.replies > 0 ? stats.replies : ''}</span>
            </button>
            <button className="flex items-center text-gray-500 hover:text-green-500 transition-colors">
              <Repeat className="w-4 h-4 mr-1" />
              <span className="text-xs">{stats.retweets > 0 ? stats.retweets : ''}</span>
            </button>
            <button className="flex items-center text-gray-500 hover:text-red-500 transition-colors">
              <Heart className="w-4 h-4 mr-1" />
              <span className="text-xs">{stats.likes > 0 ? stats.likes : ''}</span>
            </button>
            <button className="flex items-center text-gray-500 hover:text-twitter-blue transition-colors">
              <Share className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
