import { AuthenticateTypes as AuthTypes } from './ActionTypes';
import { post, APIUrl } from '../lib/helper';
import DB from '../lib/localDb';

const loggingIn = () => ({
  type: AuthTypes.AUTH_LOGIN,
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
  dispatch(loggingIn());
  const res = await post(APIUrl('login'), false, {
    username,
    password,
  });
  const json = await res.json();
  if (res.ok) {
    const { token } = json;
    await DB.save('token', token);
    dispatch(loginSuccess());
  }
  const { message } = json;
  dispatch(loginFailed(message || 'Wrong password'));
};

const AuthenticateActions = {
  login,
};

export default AuthenticateActions;