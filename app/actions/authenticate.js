import { AuthenticateTypes as AuthTypes } from './ActionTypes';

const loggingIn = (loadingMsg) => ({
  type: AuthTypes.AUTH_LOGIN,
  loadingMsg,
});

const loginSuccess = (token) => ({
  type: AuthTypes.AUTH_LOGIN_SUCCESS,
  token,
});

const loginFailed = (errorMsg) => ({
  type: AuthTypes.AUTH_LOGIN_FAILED,
  isLoading: false,
  errorMsg,
});


const login = (username, password) => async (dispatch) => {
  dispatch(loggingIn('Getting you in'));
  const res = await fetch('https://abc', {
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
    }),
  });
  const json = await res.json();
  if (res.ok) {
    const { token } = json;
    dispatch(loginSuccess(token));
    return json.token;
  }
  const { msg } = json;
  dispatch(loginFailed(msg));
  return msg || 'Wrong password';
};

const AuthenticateActions = {
  login,
};

export default AuthenticateActions;