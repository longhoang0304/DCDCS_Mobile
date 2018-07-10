import { SystemTypes as SysTypes } from './ActionTypes';
import { get, APIUrl } from '../lib/helper';
import DB from '../lib/localDb';

const connecting = () => ({
  type: SysTypes.SYSTEM_CHECK_CONNECTION,
});

const connectSuccess = () => ({
  type: SysTypes.SYSTEM_CHECK_CONNECTION_SUCCESS,
});

const connectFailed = () => ({
  type: SysTypes.SYSTEM_CHECK_CONNECTION_FAILED,
});

const connectToServer = () => async (dispatch) => {
  dispatch(connecting());
  const res = await get(APIUrl('health-check'), false);
  const json = await res.json();
  if (res.ok) {
    const { token } = json;
    await DB.save('token', token);
    dispatch(connectSuccess());
  }
  dispatch(connectFailed());
};

const SystemActions = {
  connectToServer,
};

export default SystemActions;