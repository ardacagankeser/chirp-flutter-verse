
import React from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { Calendar, Link as LinkIcon, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Tweet, { TweetProps } from '@/components/Tweet';

const PROFILE_TWEETS: TweetProps[] = [
  {
    id: '101',
    user: {
      name: 'Lovable AI',
      handle: 'lovable_ai',
      avatar: 'https://pbs.twimg.com/profile_images/1580685961989169152/blA9vxoB_400x400.jpg',
      verified: true,
    },
    content: 'Just launched our Twitter clone! Building UI with React and Tailwind makes development so much faster. What do you think?',
    createdAt: new Date('2023-05-17T10:30:00'),
    stats: {
      replies: 142,
      retweets: 536,
      likes: 2890,
    },
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c'
  },
  {
    id: '102',
    user: {
      name: 'Lovable AI',
      handle: 'lovable_ai',
      avatar: 'https://pbs.twimg.com/profile_images/1580685961989169152/blA9vxoB_400x400.jpg',
      verified: true,
    },
    content: 'Working on adding more features to our Twitter clone. Next up: DMs, bookmarks, and exploring hashtags!',
    createdAt: new Date('2023-05-15T14:22:00'),
    stats: {
      replies: 89,
      retweets: 245,
      likes: 1456,
    }
  },
  {
    id: '103',
    user: {
      name: 'Lovable AI',
      handle: 'lovable_ai', 
      avatar: 'https://pbs.twimg.com/profile_images/1580685961989169152/blA9vxoB_400x400.jpg',
      verified: true,
    },
    content: 'React + Tailwind + TypeScript is such a powerful combination for building modern web applications. The developer experience is fantastic! 🚀',
    createdAt: new Date('2023-05-10T09:15:00'),
    stats: {
      replies: 54,
      retweets: 187,
      likes: 976,
    }
  }
];

const Profile = () => {
  return (
    <MobileLayout>
      {/* Cover image */}
      <div 
        className="h-36 bg-twitter-blue"
      ></div>
      
      {/* Profile details */}
      <div className="relative px-4">
        {/* Avatar */}
        <div className="absolute -top-14 left-4 border-4 border-white dark:border-twitter-dark rounded-full">
          <img 
            src="https://pbs.twimg.com/profile_images/1580685961989169152/blA9vxoB_400x400.jpg" 
            alt="Lovable AI"
            className="w-24 h-24 rounded-full"
          />
        </div>
        
        {/* Follow button */}
        <div className="flex justify-end mt-4">
          <Button variant="outline" className="rounded-full border-twitter-blue text-twitter-blue hover:bg-blue-50 dark:hover:bg-twitter-blue/10">
            Edit profile
          </Button>
        </div>
        
        {/* User info */}
        <div className="mt-6">
          <h1 className="text-xl font-bold">Lovable AI</h1>
          <div className="text-gray-500">@lovable_ai</div>
          
          <p className="my-3">
            Building the future of AI-powered web development. Helping developers create beautiful apps faster.
          </p>
          
          <div className="flex flex-wrap gap-y-2 text-gray-500 text-sm">
            <div className="flex items-center mr-4">
              <MapPin className="w-4 h-4 mr-1" />
              San Francisco, CA
            </div>
            <div className="flex items-center mr-4">
              <LinkIcon className="w-4 h-4 mr-1" />
              <a href="https://lovable.ai" className="text-twitter-blue">lovable.ai</a>
            </div>
            <div className="flex items-center mr-4">
              <Calendar className="w-4 h-4 mr-1" />
              Joined June 2022
            </div>
          </div>
          
          <div className="flex mt-3">
            <div className="mr-4">
              <span className="font-bold">1,234</span> <span className="text-gray-500">Following</span>
            </div>
            <div>
              <span className="font-bold">5,678</span> <span className="text-gray-500">Followers</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="border-b border-twitter-border dark:border-gray-800 mt-4">
        <div className="flex">
          <div className="flex-1 text-center py-4 font-medium text-twitter-blue border-b-2 border-twitter-blue">
            Tweets
          </div>
          <div className="flex-1 text-center py-4 font-medium text-gray-500">
            Replies
          </div>
          <div className="flex-1 text-center py-4 font-medium text-gray-500">
            Media
          </div>
          <div className="flex-1 text-center py-4 font-medium text-gray-500">
            Likes
          </div>
        </div>
      </div>
      
      {/* Tweets */}
      <div>
        {PROFILE_TWEETS.map((tweet) => (
          <Tweet key={tweet.id} {...tweet} />
        ))}
      </div>
    </MobileLayout>
  );
};

export default Profile;
