import { Article } from '@/utils/article-types';
import { ArticleCard } from '../../components/article-card';
import { useEffect, useState } from 'react';
import { useDeleteArticle } from '@/shared/hooks/articles/use-delete-article';
import styles from './article-wrapper.module.scss';

export const ArticleWrapper = ({ article }: { article: Article }) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { mutate: deleteArticle, isPending } = useDeleteArticle();

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  const handleDelete = () => {
    setIsDeleted(true);
    deleteArticle(article.id, {
      onError: (error) => {
        setIsDeleted(false);
        setErrorMessage(
          error instanceof Error
            ? error.message
            : 'Не удалось удалить статью. Попробуйте снова.',
        );
      },
    });
  };

  if (isDeleted) return null;

  return (
    <div className={styles.wrapper}>
      <ArticleCard
        article={article}
        onDelete={handleDelete}
        disabled={isPending}
      />

      {errorMessage && (
        <div className={styles.errorMessage}>
          {errorMessage}
          <button
            className={styles.closeButton}
            onClick={() => setErrorMessage(null)}
            aria-label="Закрыть сообщение об ошибке"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};
