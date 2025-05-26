
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useCreateTweet } from '@/hooks/useTweets';
import { useAuth } from '@/hooks/useAuth';
import { Image } from 'lucide-react';

const TweetForm = () => {
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [showImageInput, setShowImageInput] = useState(false);
  const createTweet = useCreateTweet();
  const { user } = useAuth();

  if (!user) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    createTweet.mutate({
      content: content.trim(),
      image_url: imageUrl || undefined,
    });

    setContent('');
    setImageUrl('');
    setShowImageInput(false);
  };

  return (
    <div className="p-4 border-b border-twitter-border dark:border-gray-800">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-3">
          <img 
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.id}`}
            alt="Your avatar"
            className="w-12 h-12 rounded-full"
          />
          <div className="flex-1">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="What's happening?"
              className="w-full resize-none border-none outline-none text-xl placeholder-gray-500 bg-transparent"
              rows={3}
              maxLength={280}
            />
            
            {showImageInput && (
              <input
                type="url"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="Add image URL"
                className="w-full mt-2 p-2 border border-gray-300 rounded-lg outline-none focus:border-twitter-blue"
              />
            )}
            
            <div className="flex items-center justify-between mt-3">
              <button
                type="button"
                onClick={() => setShowImageInput(!showImageInput)}
                className="text-twitter-blue hover:bg-blue-50 dark:hover:bg-blue-900/20 p-2 rounded-full transition-colors"
              >
                <Image className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-3">
                <span className={`text-sm ${content.length > 260 ? 'text-red-500' : 'text-gray-500'}`}>
                  {280 - content.length}
                </span>
                <Button
                  type="submit"
                  disabled={!content.trim() || content.length > 280 || createTweet.isPending}
                  className="bg-twitter-blue hover:bg-blue-500 text-white rounded-full px-6"
                >
                  {createTweet.isPending ? 'Posting...' : 'Tweet'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TweetForm;
