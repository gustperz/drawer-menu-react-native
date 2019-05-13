import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import HomeContainer from '../screens/home/HomeContainer';

class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          {/* <Image
            source={require('./image/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          /> */}
          <Text>menu</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const Home = createStackNavigator({
  Third: {
    screen: HomeContainer,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 3',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

export default createDrawerNavigator(
    {
        Home: {
          screen: Home,
          drawerLabel: 'Inicio'
        }
    },
    {
      initialRouteName: 'Home',
      drawerType: 'back',
      overlayColor: 'white'
    },
);
