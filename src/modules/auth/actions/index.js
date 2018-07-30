export const AUTH = 'auth';
export const AUTH_SAVE = `${AUTH}_SAVING`;
export const AUTH_SUCCESS = `${AUTH}_SUCCESS`;
export const AUTH_FAILURE = `${AUTH}_FAILURE`;
export const AUTH_LOGOUT = `${AUTH}_LOGOUT`;

export const authenticate = token => ({
  type: AUTH_SAVE,
  payload: token
});

export const logout = () => ({
  type: AUTH_LOGOUT
});
