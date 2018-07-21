import { AsyncStorage } from 'react-native';
import { AUTH_TOKEN } from '../constants';
import API from '../../core/api/index';

export async function storeToken(token) {
  return AsyncStorage.setItem(AUTH_TOKEN, token);
}

export async function getAccountDetails(token) {
  return API.get('v2/account', {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  }).then(response => response.data);
}
