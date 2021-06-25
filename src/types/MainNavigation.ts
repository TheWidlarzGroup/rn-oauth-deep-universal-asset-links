export enum MainNavigationRoutes {
  MAIN = 'MAIN',
  REDIRECT = 'REDIRECT',
  ACCOUNT_CONFIRM = 'ACCOUNT_CONFIRM'
}

export type MainNavigationParams = {
  [MainNavigationRoutes.MAIN]: {};
  [MainNavigationRoutes.REDIRECT]: {};
  [MainNavigationRoutes.ACCOUNT_CONFIRM]: {};
};
