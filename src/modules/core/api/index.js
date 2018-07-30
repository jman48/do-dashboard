import axios from 'axios';

const URL_BASE = 'https://api.digitalocean.com/';
const API = axios.create({
  baseURL: URL_BASE
});

export function setToken(token) {
  API.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export function clearToken() {
  API.defaults.headers.common.Authorization = '';
}

export default API;
