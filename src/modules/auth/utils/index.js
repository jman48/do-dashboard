import { AsyncStorage } from 'react-native';
import { isNil, isEmpty } from 'ramda';
import { AUTH_TOKEN } from '../constants';

export function logout() {
  return AsyncStorage.removeItem(AUTH_TOKEN);
}

export function isAuthed(token) {
  console.log('Token is: ', token);
  return !(isNil(token) || isEmpty(token));
}
