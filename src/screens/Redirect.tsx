import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Redirect = () => {
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
