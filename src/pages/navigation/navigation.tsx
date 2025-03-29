import { useEffect, useState } from 'react';
import styles from './navigation.module.scss';
import { NavigationList } from '@/utils/navigation-types';
import { generateNavigationListWithPermissions } from './features/generate-navigation-with-permission';
import { checkHasUserPermission, navigationList } from './model';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const [filteredNav, setFilteredNav] = useState<NavigationList>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadNavigation = async () => {
      try {
        const result = await generateNavigationListWithPermissions(
          navigationList,
          checkHasUserPermission,
        );
        setFilteredNav(result);
      } catch (err) {
        setError('Failed to load navigation');
        console.error('Navigation loading error:', err);
      } finally {
        setIsLoading(false);
      }
    };
    loadNavigation();
  }, []);

  const renderNavigationItems = (navItems: NavigationList) => {
    return navItems.map((level1) => (
      <div key={level1.name} className={styles.navigation__level1}>
        <div className={styles.navigation__level1__title}>{level1.text}</div>

        {level1.children.map((level2) => (
          <div key={level2.name} className={styles.navigation__level2}>
            <div className={styles.navigation__level2__title}>
              {level2.text}
            </div>

            <div className={styles.navigation__level3}>
              {level2.children.map((route) => (
                <NavLink
                  key={route.name}
                  to={route.getLink()}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.navigation__link} ${styles.active}`
                      : styles.navigation__link
                  }
                >
                  {route.text}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        <h2 className={styles.navigation__header}>Меню навигации</h2>

        {isLoading ? (
          <div className={styles.loading}>Loading navigation...</div>
        ) : error ? (
          <div className={styles.error}>{error}</div>
        ) : (
          renderNavigationItems(filteredNav)
        )}
      </div>
    </div>
  );
};

export default Navigation;
