import {LinkingOptions} from '@react-navigation/native';
import {baseDomain, deepLinkScheme} from '../constants/Domains';
import {MainNavigationRoutes} from '../types/MainNavigation';

export const linking: LinkingOptions = {
  prefixes: [deepLinkScheme, baseDomain],
  config: {
    screens: {
      [MainNavigationRoutes.REDIRECT]: {
        path: 'oauth_redirect/:token'
      },
      [MainNavigationRoutes.ACCOUNT_CONFIRM]: {
        path: 'account_confirm/:token'
      }
    }
  }
};
