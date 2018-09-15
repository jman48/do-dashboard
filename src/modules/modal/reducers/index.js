import { combineReducers } from 'redux';
import { MODAL_CLOSE, MODAL_SHOW } from '../actions';

const message = (state = '', action) => {
  switch (action.type) {
    case MODAL_SHOW:
      return action.payload;
    case MODAL_CLOSE:
      return '';
    default:
      return state;
  }
};

const open = (state = false, action) => {
  switch (action.type) {
    case MODAL_SHOW:
      return true;
    case MODAL_CLOSE:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  message,
  open
})
