import { useState } from 'react';
import styles from './random-post.module.scss';
import { useFetchPosts } from '@/shared/hooks/use-fetch-posts';

export const RandomPost = () => {
  const { posts, error } = useFetchPosts();
  const [postTitle, setPostTitle] = useState<string>('');

  const fetchRandomPost = () => {
    if (posts && posts.length > 0) {
      const randomPost = posts[Math.floor(Math.random() * posts.length)];
      setPostTitle(randomPost.title);
    }
  };

  return (
    <div className={styles.randomPost}>
      <h1 className={styles.randomPost__title}>Рандомный пост</h1>
      <>
        {!postTitle && (
          <button
            className={styles.randomPost__button}
            onClick={fetchRandomPost}
          >
            Получить
          </button>
        )}
        {postTitle && <p className={styles.randomPost__text}>{postTitle}</p>}
        {error && (
          <p className={styles.randomPost__error}>
            {error instanceof Error ? error.message : 'Неизвестная ошибка'}
          </p>
        )}
      </>
    </div>
  );
};
