import { combineReducers } from "redux";
import { AUTH_SAVE, AUTH_SUCCESS } from "../actions";

const token = (state = {}, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return action.payload.token;
    default:
      return state;
  }
};

const loading = (state = false, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return false;
    case AUTH_SAVE:
      return true;
    default:
      return state;
  }
};

const email = (state = '', action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return action.payload.account.email;
    default:
      return state;
  }
};

export default combineReducers({
  token,
  loading,
  email
});