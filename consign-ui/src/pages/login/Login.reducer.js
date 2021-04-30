import { Types } from './Login.action';

const initialState = {
  loginResults:[],
  loginError:[],
  loginLoading:true
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOGIN_SUCCESS:
      return {
        loginResults: action.data,
        loginLoading:false

    };
    case Types.LOGIN_ERROR:
        return {
        loginError:action.err,
        loginLoading:false
    };
    case Types.LOGOUT_REQUEST:
      return {
        loginError:[],
        loginResults:[],
        loginLoading:true
      }
      
    default:
      return state;
  }
};

