import { combineReducers } from "redux";
import { AUTH_FAILURE, AUTH_LOGOUT, AUTH_SAVE, AUTH_SUCCESS } from "../actions";

const token = (state = {}, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return action.payload.token;
    case AUTH_LOGOUT:
      return {};
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

const email = (state = "", action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return action.payload.account.email;
    default:
      return state;
  }
};

const failure = (state = "", action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
    case AUTH_SAVE:
      return "";
    case AUTH_FAILURE:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  token,
  loading,
  email,
  failure
});
