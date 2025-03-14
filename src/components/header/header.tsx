import { NavLink } from 'react-router-dom';
import { ROUTES } from '@/shared/services/routes';
import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.header__links}>
        <NavLink to={ROUTES.MAIN.getLink()} className={styles.header__linkItem}>
          Главная
        </NavLink>
        <NavLink to={ROUTES.POST.getLink()} className={styles.header__linkItem}>
          Рандомный Пост
        </NavLink>
        <NavLink
          to={ROUTES.LANDING.getLink()}
          className={styles.header__linkItem}
        >
          Лендинг
        </NavLink>
      </nav>
    </header>
  );
};
