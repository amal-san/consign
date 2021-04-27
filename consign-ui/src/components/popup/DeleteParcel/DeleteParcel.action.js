export const Types = {
    DELETE_PARCEL_REQUEST: 'DELETE_PARCEL_REQUEST',
    DELETE_PARCEL_SUCCESS: 'DELETE_PARCEL_SUCCESS',
    DELETE_PARCEL_ERROR:'DELETE_PARCEL_ERROR',
    DELETE_PARCEL_DEFAULT:'DELETE_PARCEL_DEFAULT'
  };
  
  export const deleteParcelRequest = body => ({
    type: Types.DELETE_PARCEL_REQUEST,
    body
  })

  export const deleteParcelDefault = () => ({
    type:Types.DELETE_PARCEL_DEFAULT
  })

  export const deleteParcelSuccess = data => ({
    type: Types.DELETE_PARCEL_SUCCESS,
    data 
  })

  export const deleteParcelError = err => ({
      type:Types.DELETE_PARCEL_ERROR,
      err
  })
  