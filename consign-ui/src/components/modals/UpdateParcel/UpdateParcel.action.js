export const Types = {
    UPDATE_PARCEL_REQUEST: 'UPDATE_PARCEL_REQUEST',
    UPDATE_PARCEL_SUCCESS: 'UPDATE_PARCEL_SUCCESS',
    UPDATE_PARCEL_ERROR:'UPDATE_PARCEL_ERROR',
    UPDATE_PARCEL_DEFAULT:'UPDATE_PARCEL_DEFAULT'
  };
  
  export const updateParcelRequest = body => ({
    type: Types.UPDATE_PARCEL_REQUEST,
    body
  })

  export const updateParcelDefault = () => ({
    type:Types.UPDATE_PARCEL_DEFAULT
  })

  export const updateParcelSuccess = data => ({
    type: Types.UPDATE_PARCEL_SUCCESS,
    data 
  })

  export const updateParcelError = err => ({
      type:Types.UPDATE_PARCEL_ERROR,
      err
  })
  