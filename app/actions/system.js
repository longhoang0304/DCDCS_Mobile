import decode from 'jwt-decode';
import _ from 'lodash';
import Expo from 'expo';
import { SystemTypes as SysTypes } from '../constants/ActionTypes';
import { get, post, APIUrl, getToken } from '../lib/helper';
import AuthActions from './authenticate';

/* ============= CONNECTION ACTION START ================= */
const connecting = () => ({
  type: SysTypes.SYSTEM_CHECK_CONNECTION,
});

const connectSuccess = (isLogin) => ({
  type: SysTypes.SYSTEM_CHECK_CONNECTION_SUCCESS,
  payload: {
    isLogin,
  },
});

const connectFailed = (errorMsg, healthCheck) => ({
  type: SysTypes.SYSTEM_CHECK_CONNECTION_FAILED,
  payload: {
    errorMsg,
    healthCheck,
  },
});

const connectToServer = () => async (dispatch) => {
  dispatch(connecting());
  let res;
  try {
    res = await get(APIUrl('health-check'), false);
  } catch (error) {
    console.log(error.message);
    dispatch(connectFailed());
    return;
  }

  if (res.ok) {
    const token = await getToken();
    if (!token) {
      dispatch(connectFailed('Your token is expired', 3));
      return;
    }
    const { id } = decode(token) || {};
    if (id && _.isString(id)) {
      dispatch(AuthActions.loginSuccess(id));
      dispatch(connectSuccess(!!token));
      return;
    }
  }
  dispatch(connectFailed('Cannot connect to server', 2));
};

/* ============== CONNECTION ACTION END ================== */

/* =============== PUBLISH ACTION START ================== */
const publishing = () => ({
  type: SysTypes.SYSTEM_CHECK_CONNECTION,
  payload: {
    isSent: false,
    errorMsg: '',
  },
});

const publishSuccess = (isSent) => ({
  type: SysTypes.SYSTEM_CHECK_CONNECTION_SUCCESS,
  payload: {
    isSent,
    errorMsg: '',
  },
});

const publishFailed = (errorMsg) => ({
  type: SysTypes.SYSTEM_CHECK_CONNECTION_FAILED,
  payload: {
    errorMsg,
  },
});

const publishAction = (payload, to) => async (dispatch, getStore) => {
  dispatch(publishing());
  const store = getStore().auth;
  const { userId } = store;
  let res;
  const pl = {
    payload,
    to: {
      receiverId: to,
      deviceId: to,
    },
    from: {
      senderId: userId,
      deviceId: Expo.Constants.deviceId,
    },
  };

  try {
    res = await post(APIUrl('actions'), false, pl);
  } catch (error) {
    console.log(error.message);
    dispatch(publishFailed());
    return;
  }

  if (res.ok) {
    dispatch(publishSuccess(true));
    return;
  }
  dispatch(publishFailed());
};
/* ================ PUBLISH ACTION END =================== */

/* ================== GET DATA START ===================== */
/* =================== GET DATA END ====================== */

const SystemActions = {
  connectToServer,
  publishAction,
};

export default SystemActions;