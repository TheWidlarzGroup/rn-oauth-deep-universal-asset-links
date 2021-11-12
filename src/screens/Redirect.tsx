import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {useEffect} from 'react';
import {StyleSheet, View, Text, Alert} from 'react-native';
import {
  MainNavigationParams,
  MainNavigationRoutes
} from '../types/MainNavigation';

type Route = RouteProp<MainNavigationParams, MainNavigationRoutes.REDIRECT>;

const Redirect = () => {
  const {
    params: {token}
  } = useRoute<Route>() || {params: {token: ''}};

  useEffect(() => {
    Alert.alert('Token:', token);
  }, [token]);

  return (
    <View style={styles.container}>
      <Text>Redirect screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Redirect;
