import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const AccountConfirm = () => {
  return (
    <View style={styles.container}>
      <Text>Account confirm screen</Text>
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

export default AccountConfirm;
