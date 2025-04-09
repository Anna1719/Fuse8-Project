import { useNavigate } from 'react-router-dom';
import {
  useArticles,
  useDeleteArticle,
} from '@/shared/hooks/articles/use-article-api';
import { ArticleCard } from './components/article-card';
import styles from './articles.module.scss';
import { ROUTES } from '@/shared/services/routes';

export const ArticleListPage = () => {
  const navigate = useNavigate();
  const { data: articles, isLoading, isError } = useArticles();
  const { mutate: deleteArticle, isPending: isDeleting } = useDeleteArticle();

  if (isLoading) return <div className={styles.loading}>Loading...</div>;
  if (isError)
    return <div className={styles.error}>Error loading articles</div>;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Articles</h1>
        <button
          onClick={() => navigate(ROUTES.CREATE_ARTICLE.getLink())}
          className={styles.createButton}
        >
          Create Article
        </button>
      </div>

      <div className={styles.articlesList}>
        {articles?.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            onDelete={deleteArticle}
            isDeleting={isDeleting}
          />
        ))}
      </div>
    </div>
  );
};
