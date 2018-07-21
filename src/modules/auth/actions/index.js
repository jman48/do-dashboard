export const AUTH = 'auth';
export const AUTH_SAVE = `${AUTH}_SAVING`;
export const AUTH_SUCCESS = `${AUTH}_SUCCESS`;
export const AUTH_FAILURE = `${AUTH}_FAILURE`;

export const authenticate = token => ({
  type: AUTH_SAVE,
  payload: token
});
