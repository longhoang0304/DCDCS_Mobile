import { AuthenticateTypes } from '../actions/ActionTypes';

const initState = {
  errorMsg: '',
  isLoading: false,
  isLogin: false,
};

const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case AuthenticateTypes.AUTH_LOGIN: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case AuthenticateTypes.AUTH_LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isLogin: true,
      };
    }
    case AuthenticateTypes.AUTH_LOGIN_FAILED: {
      return {
        ...state,
        isLoading: false,
        isLogin: false,
        errorMsg: action.errorMsg,
      };
    }
    default: {
      return state;
    }
  }
};

export default loginReducer;