import { createStackNavigator } from 'react-navigation';
import Auth from '../../auth/containers';

const PublicStack = createStackNavigator(
  {
    Auth: {
      screen: Auth
    }
  },
  {
    initialRouteName: 'Auth',
    headerMode: 'none',

  }
);

export default PublicStack;
