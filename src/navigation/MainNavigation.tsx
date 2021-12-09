import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  MainNavigationParams,
  MainNavigationRoutes
} from '../types/MainNavigation';
import Main from '../screens/Main';
import Redirect from '../screens/Redirect';
import AccountConfirm from '../screens/AccountConfirm';

const MainNavigationStack = createStackNavigator<MainNavigationParams>();

const MainNavigation = () => {
  return (
    <MainNavigationStack.Navigator
      initialRouteName={MainNavigationRoutes.MAIN}
      screenOptions={{headerShown: false}}>
      <MainNavigationStack.Screen
        name={MainNavigationRoutes.MAIN}
        component={Main}
      />
      <MainNavigationStack.Screen
        name={MainNavigationRoutes.REDIRECT}
        component={Redirect}
      />
      <MainNavigationStack.Screen
        name={MainNavigationRoutes.ACCOUNT_CONFIRM}
        component={AccountConfirm}
      />
    </MainNavigationStack.Navigator>
  );
};

export default MainNavigation;
