// actions.js
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const login = (email, password) => (dispatch) => {
  dispatch(loginRequest());

  // Simulate an asynchronous API call for login
  setTimeout(() => {
    if (email === 'example@example.com' && password === 'password') {
      const user = { email: 'example@example.com' };
      dispatch(loginSuccess(user));
    } else {
      const error = 'Invalid email or password';
      dispatch(loginFailure(error));
    }
  }, 1000);
};
