import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './src/navigation/MainNavigation';
import {linking} from './src/navigation/Linking';

const App = () => {
  return (
    <NavigationContainer {...{linking}}>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;
