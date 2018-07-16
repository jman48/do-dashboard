import { combineReducers } from 'redux';
import auth from '../modules/auth/reducers';
import droplets from '../modules/droplets/reducers';

const rootReducer = combineReducers({
  auth,
  droplets
});

export default rootReducer;