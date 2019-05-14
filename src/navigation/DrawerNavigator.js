import React , { Component, createRef } from 'react';
import HomeContainer from '../screens/home/HomeContainer';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ScalingDrawer from 'react-native-scaling-drawer';
import SideMenu from '../screens/side-menu/SideMenu';
import NavigationService from './NavigationService';
import ProfileContainer from '../screens/profile/ProfileContainer';

const AppStack = createStackNavigator({
  Third: {
    screen: HomeContainer
  }, 
  Profile: ProfileContainer
});

export const drawer = createRef();

const defaultScalingDrawerConfig = {
  scalingFactor: 0.8,
  minimizeFactor: 0.7,
  swipeOffset: 20
};

class AppNavigation extends Component {
  static router = AppStack.router

  componentDidMount = () => {
    const { navigation } = this.props

    navigation.addListener('didFocus', this.incrementTimesTabbed)
  }

  render() {
    return (
      <ScalingDrawer
        ref={drawer}
        content={<SideMenu drawer={drawer} />}
        {...defaultScalingDrawerConfig}
        onClose={() => console.log('close')}
        onOpen={() => console.log('open')}
      >
        <AppStack navigation={this.props.navigation}/>
      </ScalingDrawer>
    );
  }
}

export default createAppContainer(AppNavigation);