import { articleAPI } from '@/shared/services/article-api';
import { Article } from '@/utils/article-types';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useDeleteArticle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => articleAPI.deleteArticle(id),
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ['articles'] });
      const previousArticles = queryClient.getQueryData<Article[]>([
        'articles',
      ]);

      queryClient.setQueryData<Article[]>(
        ['articles'],
        (old) => old?.filter((a) => a.id !== id) || [],
      );

      return { previousArticles };
    },
    onError: (_err, _id, context) => {
      queryClient.setQueryData(['articles'], context?.previousArticles);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['articles'] });
    },
  });
};
