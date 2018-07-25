import _ from 'lodash';
import { Alert } from 'react-native';
import { UserTypes } from '../constants/ActionTypes';
import { get, put, APIUrl } from '../lib/helper';
import DB from '../lib/localDb';

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
// ============== UPDATE USER DATA START ==============
const updatingInfo = () => ({
  type: UserTypes.USER_UPDATE_INFO,
});

const updateInfoSuccess = (info) => ({
  type: UserTypes.USER_UPDATE_INFO_SUCCESS,
  payload: {
    info,
  },
});

const updateInfoFailed = (errorMsg) => ({
  type: UserTypes.USER_UPDATE_INFO_FAILED,
  payload: {
    errorMsg,
  },
});


const updateInfo = (nUser) => async (dispatch, getStore) => {
  dispatch(updatingInfo());
  const store = getStore().auth;
  const { userId } = store;
  let res;
  const newUser = _.pickBy(nUser, (v) => !_.isNil(v) && _.isString(v) && v.length !== 0);
  try {
    res = await put(APIUrl(`users/${userId}`), true, { newUser });
    const json = await res.json();
    if (res.ok) {
      await DB.hsave('token', json.token || '');
      Alert.alert(
        'Success',
        'Your information has been updated!',
        [
          {
            text: 'OK',
            onPress: () => null,
          },
        ],
      );
      dispatch(updateInfoSuccess(newUser));
      return;
    }
    const { message } = json;
    dispatch(updateInfoFailed(message || 'Unknown Error Occurred'));
  } catch (error) {
    console.log(error.message);
    dispatch(updateInfoFailed(error.message));
  }
};
// ============== UPDATE USER DATA END ==============
const UserActions = {
  getInfo,
  updateInfo,
};

export default UserActions;