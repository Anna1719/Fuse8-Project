import { useNavigate } from 'react-router-dom';
import { useCreateArticle } from '@/shared/hooks/articles/use-article-api';
import { ArticleForm } from './components/article-form';
import styles from './create-article.module.scss';
import { ArticleFormValues } from '@/shared/schemas/article-form-schema';
import { ROUTES } from '@/shared/services/routes';
import { ButtonWithIcon } from '@/shared/ui';

export const CreateArticlePage = () => {
  const navigate = useNavigate();
  const { mutate: createArticle, isPending: isSubmitting } = useCreateArticle();

  const handleSubmit = (values: ArticleFormValues) => {
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
      },
    );
  };

  return (
    <div className={styles.container}>
      <ButtonWithIcon
        onClick={() => navigate(ROUTES.ARTICLES.getLink())}
        className={styles.backButton}
      >
        ← Back to Articles
      </ButtonWithIcon>
      <h1 className={styles.title}>Create Article</h1>
      <ArticleForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
    </div>
  );
};
