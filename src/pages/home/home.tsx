import styles from './home.module.scss';

export const HomePage = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.home__title}>Главная</h1>
    </div>
  );
};
