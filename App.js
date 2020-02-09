import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textWhite}>Hello, world!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#069',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWhite: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold'
  }
});
