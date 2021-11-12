export enum MainNavigationRoutes {
  MAIN = 'MAIN',
  REDIRECT = 'REDIRECT',
  ACCOUNT_CONFIRM = 'ACCOUNT_CONFIRM'
}

export type MainNavigationParams = {
  [MainNavigationRoutes.MAIN]: {};
  [MainNavigationRoutes.REDIRECT]: {
    token: string;
  };
  [MainNavigationRoutes.ACCOUNT_CONFIRM]: {
    token: string;
  };
};
