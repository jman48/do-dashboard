import { AsyncStorage } from 'react-native';
import { setToken } from '../../core/api';
import { AUTH_TOKEN } from '../constants';

export async function storeToken(token) {
  return AsyncStorage.setItem(AUTH_TOKEN, token);
}

export async function checkAuth() {
  const token = await AsyncStorage.getItem(AUTH_TOKEN);
  if (!token) return false;

  setToken(token);
  return true;
}
