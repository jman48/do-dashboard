import React from 'react';
import {
  createStackNavigator,
  createDrawerNavigator
} from 'react-navigation';
import NavigationService from './navigationService';
import Droplet from '../../droplets/containers/droplet';
import Droplets from '../../droplets/containers';
import HeaderDrawerIcon from '../../drawer/components/headerDrawerIcon';
import Drawer from '../../drawer/containers';

const PrivateStack = createStackNavigator(
  {
    Droplets: {
      screen: Droplets
    },
    Droplet: {
      screen: Droplet
    }
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#1683FB'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: '400',
        fontSize: 22
      },
      headerRight: (
        <HeaderDrawerIcon onPress={() => NavigationService.toggleDrawer()} />
      )
    }
  }
);

export default createDrawerNavigator(
  { PrivateStack },
  { contentComponent: Drawer, drawerPosition: 'right' }
);
