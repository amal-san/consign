export const Types = {
    CREATE_PARCEL_REQUEST: 'CREATE_PARCEL_REQUEST',
    CREATE_PARCEL_SUCCESS: 'CREATE_PARCEL_SUCCESS',
    CREATE_PARCEL_ERROR:'CREATE_PARCEL_ERROR',
    CREATE_PARCEL_DEFAULT:'CREATE_PARCEL_DEFAULT'
  };
  
  export const createParcelRequest = body => ({
    type: Types.CREATE_PARCEL_REQUEST,
    body
  })

  export const createParcelDefault = () => ({
    type:Types.CREATE_PARCEL_DEFAULT
  })

  export const createParcelSuccess = data => ({
    type: Types.CREATE_PARCEL_SUCCESS,
    data 
  })

  export const createParcelError = err => ({
      type:Types.CREATE_PARCEL_ERROR,
      err
  })
  