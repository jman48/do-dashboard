import { createSwitchNavigator } from 'react-navigation';
import PublicStack from './public';
import DrawerNavigator from './private';
import AuthSwitch from '../../auth/containers/authSwitch';

const MainStack = createSwitchNavigator(
  {
    AuthSwitch,
    Public: PublicStack,
    Private: DrawerNavigator
  },
  {
    initialRouteName: 'AuthSwitch'
  }
);

export default MainStack;
