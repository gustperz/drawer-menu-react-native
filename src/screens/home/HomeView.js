import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default HomeView = () => (
  <View style={styles.MainContainer}>
    <Text style={{ fontSize: 23 }}> HOME </Text>
  </View>
);

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
});