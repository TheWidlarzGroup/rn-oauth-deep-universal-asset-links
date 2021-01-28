import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Main = () => {
  return (
    <View style={styles.container}>
      <Text>Main screen</Text>
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

export default Main;
