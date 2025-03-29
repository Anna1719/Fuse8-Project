export const USER_READ_PERMISSIONS = [
  'vacancies',
  'users',
  'candidates',
  'clients',
  'partners',
];

export const checkHasUserPermission = async (
  routeName: string,
): Promise<boolean> => {
  return USER_READ_PERMISSIONS.includes(routeName);
};
