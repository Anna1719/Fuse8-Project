import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { articleAPI } from '@/shared/services/article-api';

export const useArticles = () => {
  return useQuery({
    queryKey: ['articles'],
    queryFn: () => articleAPI.getArticles(),
    staleTime: 30000,
  });
};

export const useCreateArticle = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (article: Parameters<typeof articleAPI.createArticle>[0]) =>
      articleAPI.createArticle(article),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['articles'] });
    },
  });
};
