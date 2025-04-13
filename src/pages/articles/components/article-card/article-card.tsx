import { Article } from '@/utils/article-types';
import styles from './article-card.module.scss';
import { ButtonWithIcon } from '@/shared/ui';

type ArticleCardProps = {
  article: Article;
  onDelete: () => void;
  disabled?: boolean;
};

export const ArticleCard = ({
  article,
  onDelete,
  disabled = false,
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
      <ButtonWithIcon onClick={onDelete} disabled={disabled}>
        Удалить
      </ButtonWithIcon>
    </div>
  );
};
