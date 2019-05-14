import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { navigate } from '../../navigation/NavigationService';
import { withNavigation } from 'react-navigation';

class SideMenu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn} onPress={() => {
          this.props.navigation.navigate('Home');
          this.props.drawer.current.close();
        }}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => {
          this.props.navigation.navigate('Profile');
          this.props.drawer.current.close();
        }}>
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    paddingTop: 100,
  },
  btn: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default withNavigation(SideMenu);