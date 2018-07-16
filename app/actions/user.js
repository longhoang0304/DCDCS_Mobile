import { AuthenticateTypes as AuthTypes } from '../constants/ActionTypes';
import { post, APIUrl } from '../lib/helper';
import DB from '../lib/localDb';

const gatheringData = () => ({
  type: AuthTypes.AUTH_LOGIN,
});

const getDataSuccess = (info) => ({
  type: AuthTypes.AUTH_LOGIN_SUCCESS,
  payload: {
    info,
  },
});

const getDataFailed = (errorMsg) => ({
  type: AuthTypes.AUTH_LOGIN_FAILED,
  payload: {
    errorMsg,
  },
});


const getInfo = (username, password) => async (dispatch) => {
  dispatch(gatheringData());
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
      dispatch(getDataSuccess());
      return;
    }
    const { message } = json;
    dispatch(getDataFailed(message || 'Wrong password'));
  } catch (error) {
    console.log(error.message);
    dispatch(getDataFailed(error.message));
  }
};

const UserActions = {
  getInfo,
};

export default UserActions;