import { SystemTypes as SysTypes } from './ActionTypes';
import { get, APIUrl, getToken } from '../lib/helper';

const connecting = () => ({
  type: SysTypes.SYSTEM_CHECK_CONNECTION,
});

const connectSuccess = (isLogin) => ({
  type: SysTypes.SYSTEM_CHECK_CONNECTION_SUCCESS,
  isLogin,
});

const connectFailed = () => ({
  type: SysTypes.SYSTEM_CHECK_CONNECTION_FAILED,
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
    dispatch(connectSuccess(!!token));
    return;
  }
  dispatch(connectFailed());
};

const SystemActions = {
  connectToServer,
};

export default SystemActions;