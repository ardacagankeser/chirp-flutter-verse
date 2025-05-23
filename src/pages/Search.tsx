
import React from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import { Input } from '@/components/ui/input';
import { Search as SearchIcon } from 'lucide-react';

const Search = () => {
  return (
    <MobileLayout>
      <div className="sticky top-0 bg-white dark:bg-twitter-dark p-4 border-b border-twitter-border dark:border-gray-800">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
          <Input 
            className="bg-gray-100 dark:bg-gray-800 border-none rounded-full pl-10" 
            placeholder="Search Twitter" 
          />
        </div>
      </div>
      
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Trends for you</h2>
        
        {/* Trending topics */}
        {[1, 2, 3, 4, 5].map((i) => (
          <div 
            key={i} 
            className="py-3 px-4 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg cursor-pointer"
          >
            <div className="text-xs text-gray-500">Trending in Tech</div>
            <div className="font-bold my-0.5">{`#Trend${i}`}</div>
            <div className="text-xs text-gray-500">{`${i * 10.5}K Tweets`}</div>
          </div>
        ))}
      </div>
    </MobileLayout>
  );
};

export default Search;
