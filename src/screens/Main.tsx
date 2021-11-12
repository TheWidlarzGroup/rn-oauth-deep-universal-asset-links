import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {logInWithGoogle} from '../services/oauth';

const Main = () => {
  const onPress = () => {
    logInWithGoogle();
  };

  return (
    <View style={styles.container}>
      <Text>Main screen</Text>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>Log In with Google</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8
  },
  button: {
    backgroundColor: '#79dff4',
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 2,
    elevation: 2,
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowRadius: 0.2
  },
  buttonText: {
    color: '#fefefe',
    fontWeight: 'bold'
  }
});

export default Main;
