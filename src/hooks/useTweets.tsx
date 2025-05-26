
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';

export interface Tweet {
  id: string;
  content: string;
  image_url: string | null;
  created_at: string;
  user_id: string;
  username: string;
  full_name: string;
  avatar_url: string;
  likes_count: number;
  liked_by_user: boolean;
}

export const useTweets = () => {
  const { user } = useAuth();
  
  return useQuery({
    queryKey: ['tweets', user?.id],
    queryFn: async () => {
      const { data, error } = await supabase.rpc('get_tweets', {
        p_user_id: user?.id || null,
      });
      
      if (error) throw error;
      return data as Tweet[];
    },
  });
};

export const useCreateTweet = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  return useMutation({
    mutationFn: async ({ content, image_url }: { content: string; image_url?: string }) => {
      if (!user) throw new Error('User not authenticated');

      const { data, error } = await supabase
        .from('tweets')
        .insert({
          content,
          image_url,
          user_id: user.id,
        })
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tweets'] });
      toast.success('Tweet posted!');
    },
    onError: (error) => {
      toast.error('Failed to post tweet');
      console.error('Tweet creation error:', error);
    },
  });
};

export const useLikeTweet = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  return useMutation({
    mutationFn: async ({ tweetId, isLiked }: { tweetId: string; isLiked: boolean }) => {
      if (!user) throw new Error('User not authenticated');

      if (isLiked) {
        // Unlike the tweet
        const { error } = await supabase
          .from('likes')
          .delete()
          .eq('tweet_id', tweetId)
          .eq('user_id', user.id);
        
        if (error) throw error;
      } else {
        // Like the tweet
        const { error } = await supabase
          .from('likes')
          .insert({
            tweet_id: tweetId,
            user_id: user.id,
          });
        
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tweets'] });
    },
    onError: (error) => {
      toast.error('Failed to update like');
      console.error('Like error:', error);
    },
  });
};
