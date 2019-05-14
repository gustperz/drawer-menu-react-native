import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
 import { drawer } from '../../navigation/DrawerNavigator'; 

export default ProfileView = () => (
  <View style={styles.MainContainer}>
  <TouchableOpacity onPress={() => drawer.current.open()}>
          
    <Text style={{ fontSize: 23 }}> Profile </Text>
        </TouchableOpacity>
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