import { combineReducers } from 'redux';
import {
  DROPLET_LOAD_SUCCESS,
  DROPLETS_LOAD_ALL,
  DROPLETS_LOAD_ALL_SUCCESS,
  DROPLET_LOAD
} from '../actions';

const droplets = (state = [], action) => {
  switch (action.type) {
    case DROPLETS_LOAD_ALL_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const droplet = (state = {}, action) => {
  switch (action.type) {
    case DROPLET_LOAD_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const dropletsLoading = (state = false, action) => {
  switch (action.type) {
    case DROPLETS_LOAD_ALL:
      return true;
    case DROPLETS_LOAD_ALL_SUCCESS:
      return false;
    default:
      return state;
  }
};

const dropletLoading = (state = false, action) => {
  switch (action.type) {
    case DROPLET_LOAD:
      return true;
    case DROPLET_LOAD_SUCCESS:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  droplets,
  droplet,
  dropletsLoading,
  dropletLoading
});
