import { NavLink, useLocation } from 'react-router-dom';
import { ROUTES } from '@/shared/services/routes';
import styles from './header.module.scss';
import { useState } from 'react';
import { HomeIcon } from '@/icons/home-icon';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isLandingPage = location.pathname === ROUTES.LANDING.pathname;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const routes = [
    ROUTES.MAIN,
    ROUTES.POST,
    ROUTES.LANDING,
    ROUTES.NAVIGATION,
  ] as const;

  return (
    <header className={styles.header}>
      <button
        className={`${styles.burger} ${isLandingPage ? styles.alwaysVisible : ''}`}
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
      >
        <HomeIcon className={styles.burger__icon} />
      </button>

      {(!isLandingPage || isMenuOpen) && (
        <nav
          className={`${styles.header__links} ${isMenuOpen ? styles.menuOpen : ''}`}
        >
          {routes.map((route) => (
            <NavLink
              key={route.name}
              to={route.getLink()}
              className={styles.header__linkItem}
              onClick={toggleMenu}
              end={route.pathname === '/'}
            >
              {route.text}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};
