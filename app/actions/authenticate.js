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
  let res;
  try {
    res = await post(APIUrl('auth/login'), false, {
      username,
      password,
    });
    const json = await res.json();
    if (res.ok) {
      const { token } = json;
      await DB.hsave('token', token);
      dispatch(loginSuccess());
    }
    const { message } = json;
    dispatch(loginFailed(message || 'Wrong password'));
  } catch (error) {
    console.log(error.message);
    dispatch(loginFailed(error.message));
  }
};

const AuthenticateActions = {
  login,
};

export default AuthenticateActions;