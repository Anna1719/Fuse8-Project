import { ArticleWrapper } from './features';
import styles from './articles.module.scss';
import { useArticles } from '@/shared/hooks/articles/use-article-api';
import { ROUTES } from '@/shared/services/routes';
import { NavLink } from 'react-router-dom';

export const ArticleListPage = () => {
  const { data: articles } = useArticles();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Articles</h1>
        <NavLink
          to={ROUTES.CREATE_ARTICLE.getLink()}
          className={styles.createLink}
        >
          Создать статью
        </NavLink>
      </div>

      <div className={styles.articlesList}>
        {articles?.map((article) => (
          <ArticleWrapper key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};
