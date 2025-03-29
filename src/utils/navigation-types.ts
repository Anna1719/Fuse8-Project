export type Route = {
  name: string;
  pathname: string;
  getLink: () => string;
  text: string;
};

export type NavigationItemLevel2 = {
  name: string;
  text: string;
  children: Route[];
};

export type NavigationItemLevel1 = {
  name: string;
  text: string;
  children: NavigationItemLevel2[];
};

export type NavigationList = NavigationItemLevel1[];
