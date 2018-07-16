import { UserTypes } from '../constants/ActionTypes';
import { get, APIUrl } from '../lib/helper';

// ============== GET USER DATA START ==============
const gatheringData = () => ({
  type: UserTypes.USER_GET_INFO,
});

const getDataSuccess = (info) => ({
  type: UserTypes.USER_GET_INFO_SUCCESS,
  payload: {
    info,
  },
});

const getDataFailed = (errorMsg) => ({
  type: UserTypes.USER_GET_INFO_FAILED,
  payload: {
    errorMsg,
  },
});


const getInfo = () => async (dispatch, getStore) => {
  dispatch(gatheringData());
  const store = getStore().auth;
  const { userId } = store;
  let res;
  try {
    res = await get(APIUrl(`users/${userId}`), true);
    const json = await res.json();
    if (res.ok) {
      dispatch(getDataSuccess(json));
      return;
    }
    const { message } = json;
    dispatch(getDataFailed(message || 'Unknown Error Occurred'));
  } catch (error) {
    console.log(error.message);
    dispatch(getDataFailed(error.message));
  }
};
// ============== GET USER DATA END ==============
const UserActions = {
  getInfo,
};

export default UserActions;