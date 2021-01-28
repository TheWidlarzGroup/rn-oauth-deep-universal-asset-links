export enum MainNavigationRoutes {
  MAIN = 'MAIN',
  REDIRECT = 'REDIRECT'
}

export type MainNavigationParams = {
  [MainNavigationRoutes.MAIN]: {};
  [MainNavigationRoutes.REDIRECT]: {};
};
