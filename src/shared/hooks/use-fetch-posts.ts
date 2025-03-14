import { useEffect, useState } from 'react';
import { apiClient } from '../services/request';
import { Post } from '@/utils/types';

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response = await apiClient.get<Post[]>('posts');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch posts', error);
    throw error;
  }
};

export const useFetchPosts = () => {
  const [posts, setPosts] = useState<Post[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { posts, loading, error };
};
