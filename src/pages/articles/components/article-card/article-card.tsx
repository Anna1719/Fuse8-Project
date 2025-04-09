import { Article } from '@/utils/article-types';
import styles from './article-card.module.scss';
import { ButtonWithIcon } from '@/shared/ui';

interface ArticleCardProps {
  article: Article;
  onDelete: (id: string) => void;
  isDeleting?: boolean;
}

export const ArticleCard = ({
  article,
  onDelete,
  isDeleting,
}: ArticleCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__content}>
        <h3 className={styles.card__title}>{article.title}</h3>
        <p className={styles.card__id}>ID: {article.id}</p>
        <p className={styles.card__type}>Type: {article.content.type}</p>

        {article.content.type === 'published' && (
          <>
            <p>{article.content.description}</p>
            {article.content.isNew && (
              <span className={styles.card__new}>New!</span>
            )}
          </>
        )}
      </div>
      <ButtonWithIcon
        className={styles.card__button}
        onClick={() => onDelete(article.id)}
        disabled={isDeleting}
      >
        Delete
      </ButtonWithIcon>
    </div>
  );
};
