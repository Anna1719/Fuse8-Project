import { NavLink, useNavigate } from 'react-router-dom';
import { useCreateArticle } from '@/shared/hooks/articles/use-article-api';
import { ArticleForm } from './components/article-form';
import styles from './create-article.module.scss';
import { ArticleFormValues } from '@/shared/schemas/article-form-schema';
import { ROUTES } from '@/shared/services/routes';
import { useEffect, useState } from 'react';

export const CreateArticlePage = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { mutate: createArticle, isPending: isSubmitting } = useCreateArticle();

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  const handleSubmit = (values: ArticleFormValues) => {
    setErrorMessage(null);
    createArticle(
      {
        title: values.title,
        content:
          values.content.type === 'draft'
            ? { type: 'draft' }
            : {
                type: 'published',
                description: values.content.description || '',
                isNew: values.content.isNew || false,
              },
      },
      {
        onSuccess: () => navigate(ROUTES.ARTICLES.getLink()),
        onError: (error) => {
          setErrorMessage(
            error instanceof Error
              ? error.message
              : 'Не удалось создать статью. Попробуйте снова.',
          );
        },
      },
    );
  };

  return (
    <div className={styles.container}>
      <NavLink to={ROUTES.ARTICLES.getLink()} className={styles.backLink}>
        ← Back to Articles
      </NavLink>
      <h1 className={styles.title}>Create Article</h1>

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

      <ArticleForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
    </div>
  );
};
