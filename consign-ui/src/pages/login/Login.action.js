export const Types = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_ERROR:'LOGIN_ERROR',
    LOGOUT_REQUEST:'LOGOUT_REQUEST'
  };
  
  export const loginRequest = body => ({
    type: Types.LOGIN_REQUEST,
    body
  })

  export const logoutRequest = () => ({
    type:Types.LOGOUT_REQUEST
  })

  export const loginSuccess = data => ({
    type: Types.LOGIN_SUCCESS,
    data 
  })

  export const loginError = err => ({
      type:Types.LOGIN_ERROR,
      err
  })
  