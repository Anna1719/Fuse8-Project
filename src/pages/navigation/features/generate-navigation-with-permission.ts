import { NavigationList } from '@/utils/navigation-types';

export const generateNavigationListWithPermissions = async (
  navigationList: NavigationList,
  checkPermission: (routeName: string) => Promise<boolean>,
): Promise<NavigationList> => {
  const filteredLevel1 = [];

  for (const level1 of navigationList) {
    const filteredLevel2 = [];

    for (const level2 of level1.children) {
      const filteredRoutes = [];

      for (const route of level2.children) {
        const hasPermission = await checkPermission(route.name);
        if (hasPermission) {
          filteredRoutes.push(route);
        }
      }

      if (filteredRoutes.length > 0) {
        filteredLevel2.push({
          ...level2,
          children: filteredRoutes,
        });
      }
    }

    if (filteredLevel2.length > 0) {
      filteredLevel1.push({
        ...level1,
        children: filteredLevel2,
      });
    }
  }

  return filteredLevel1;
};
