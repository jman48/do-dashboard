import { AsyncStorage } from 'react-native';
import { AUTH_TOKEN } from '../constants';

export function logout() {
  return AsyncStorage.removeItem(AUTH_TOKEN);
}
