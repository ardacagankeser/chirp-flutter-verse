
import React from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import Tweet, { TweetProps } from '@/components/Tweet';

const MOCK_TWEETS: TweetProps[] = [
  {
    id: '1',
    user: {
      name: 'Elon Musk',
      handle: 'elonmusk',
      avatar: 'https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg',
      verified: true,
    },
    content: 'Making life multiplanetary! 🚀',
    createdAt: new Date('2023-05-21T09:24:00'),
    stats: {
      replies: 3200,
      retweets: 5100,
      likes: 48000,
    },
    image: 'https://www.spacex.com/static/images/falcon-9/F9_1.jpg'
  },
  {
    id: '2',
    user: {
      name: 'NASA',
      handle: 'NASA',
      avatar: 'https://pbs.twimg.com/profile_images/1321163587679784960/0ZxKlEKB_400x400.jpg',
      verified: true,
    },
    content: 'New images from the James Webb Space Telescope reveal unprecedented details of distant galaxies.',
    createdAt: new Date('2023-05-20T14:35:00'),
    stats: {
      replies: 2100,
      retweets: 8700,
      likes: 32500,
    },
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564'
  },
  {
    id: '3',
    user: {
      name: 'Naval',
      handle: 'naval',
      avatar: 'https://pbs.twimg.com/profile_images/1256841238298292232/ycqwaMI2_400x400.jpg',
      verified: true,
    },
    content: 'Reading is the ultimate meta-skill and can be traded for anything else.',
    createdAt: new Date('2023-05-19T19:12:00'),
    stats: {
      replies: 1800,
      retweets: 4200,
      likes: 21000,
    }
  },
  {
    id: '4',
    user: {
      name: 'Paul Graham',
      handle: 'paulg',
      avatar: 'https://pbs.twimg.com/profile_images/1824002576/pg-railsconf_400x400.jpg',
      verified: true,
    },
    content: 'The most impressive people I know are all terrible procrastinators. So could it be that procrastination isn\'t always bad?',
    createdAt: new Date('2023-05-18T21:45:00'),
    stats: {
      replies: 982,
      retweets: 3700,
      likes: 18600,
    }
  },
  {
    id: '5',
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
];

const Index = () => {
  return (
    <MobileLayout>
      {MOCK_TWEETS.map((tweet) => (
        <Tweet key={tweet.id} {...tweet} />
      ))}
    </MobileLayout>
  );
};

export default Index;
