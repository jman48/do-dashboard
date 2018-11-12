import React from 'react';
import {
  createStackNavigator,
  createDrawerNavigator
} from 'react-navigation';
import NavigationService from './navigationService';
import Droplets from '../../droplets/containers';
import HeaderDrawerIcon from '../../drawer/components/headerDrawerIcon';
import Drawer from '../../drawer/containers';
import Droplet from '../../droplets/routes';

const PrivateStack = createStackNavigator(
  {
    Droplets: {
      screen: Droplets
    },
    Droplet: Droplet
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
      ),
      headerForceInset: { bottom: 'never' }
    }
  }
);

export default createDrawerNavigator(
  { PrivateStack },
  { contentComponent: Drawer, drawerPosition: 'right' }
);
