
import React from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { Bell, Star, Repeat, Heart } from 'lucide-react';

interface NotificationProps {
  type: 'mention' | 'like' | 'retweet' | 'follow';
  user: {
    name: string;
    handle: string;
    avatar: string;
  };
  content?: string;
  timeAgo: string;
}

const notificationData: NotificationProps[] = [
  {
    type: 'mention',
    user: {
      name: 'Jack',
      handle: 'jack',
      avatar: 'https://pbs.twimg.com/profile_images/1115644092329758721/AFjOr-K8_400x400.jpg'
    },
    content: 'Hey @lovable_ai, what do you think about the new Twitter features?',
    timeAgo: '2h'
  },
  {
    type: 'like',
    user: {
      name: 'Jessica Chen',
      handle: 'jessicachen',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    content: 'Building UI with React and Tailwind makes development so much faster.',
    timeAgo: '4h'
  },
  {
    type: 'retweet',
    user: {
      name: 'Tech Daily',
      handle: 'techdaily',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    content: 'Just launched our Twitter clone!',
    timeAgo: '1d'
  },
  {
    type: 'follow',
    user: {
      name: 'Sarah Johnson',
      handle: 'sarahj',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
    timeAgo: '2d'
  },
  {
    type: 'mention',
    user: {
      name: 'David Kim',
      handle: 'davidkim',
      avatar: 'https://randomuser.me/api/portraits/men/89.jpg'
    },
    content: '@lovable_ai your Twitter clone looks amazing! How did you build it?',
    timeAgo: '3d'
  }
];

const NotificationItem = ({ type, user, content, timeAgo }: NotificationProps) => {
  return (
    <div className="p-4 border-b border-twitter-border dark:border-gray-800 flex">
      <div className="mr-3 text-twitter-blue">
        {type === 'mention' && <Bell className="w-5 h-5" />}
        {type === 'like' && <Heart className="w-5 h-5 text-red-500" />}
        {type === 'retweet' && <Repeat className="w-5 h-5 text-green-500" />}
        {type === 'follow' && <Star className="w-5 h-5 text-purple-500" />}
      </div>
      
      <div className="flex-1">
        <div className="flex items-start mb-2">
          <img 
            src={user.avatar} 
            alt={user.name} 
            className="w-10 h-10 rounded-full mr-2"
          />
          <div>
            <span className="font-bold">{user.name}</span>
            <span className="text-gray-500"> @{user.handle} · {timeAgo}</span>
          </div>
        </div>
        
        {content && type !== 'follow' && (
          <p className="text-gray-800 dark:text-gray-200">{content}</p>
        )}
        
        {type === 'follow' && (
          <p className="text-gray-800 dark:text-gray-200">followed you</p>
        )}
      </div>
    </div>
  );
};

const Notifications = () => {
  return (
    <MobileLayout>
      {notificationData.map((notification, index) => (
        <NotificationItem key={index} {...notification} />
      ))}
    </MobileLayout>
  );
};

export default Notifications;
