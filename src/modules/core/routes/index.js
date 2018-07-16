import { createSwitchNavigator } from 'react-navigation';
import PublicStack from './public';
import DrawerNavigator from './private';

const MainStack = createSwitchNavigator(
  {
    Public: PublicStack,
    Private: DrawerNavigator
  },
  {
    initialRouteName: 'Public'
  }
);

export default MainStack;
