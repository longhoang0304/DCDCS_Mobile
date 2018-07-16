import { SystemTypes } from '../constants/ActionTypes';

const initState = {
  isLoading: false,
  isLogin: false,
  healthCheck: 0,
  errorMsg: '',
};

const connectionReducer = (state = initState, action) => {
<<<<<<< HEAD
  const { isLogin } = action.payload || {};
=======
  const { isLogin, errorMsg, healthCheck } = action.payload || {};
>>>>>>> 6c04b521ee4ee2fff5f0bcb3f06512f2ebf7821d

  switch (action.type) {
    case SystemTypes.SYSTEM_CHECK_CONNECTION: {
      return {
        ...state,
        errorMsg: '',
        isLoading: true,
        isLogin: false,
        healthCheck: 0,
      };
    }
    case SystemTypes.SYSTEM_CHECK_CONNECTION_SUCCESS: {
      return {
        ...state,
        errorMsg: '',
        isLoading: false,
        isLogin,
        healthCheck: 1,
      };
    }
    case SystemTypes.SYSTEM_CHECK_CONNECTION_FAILED: {
      return {
        ...state,
        errorMsg,
        healthCheck,
        isLoading: false,
        isLogin: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default connectionReducer;