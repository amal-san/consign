export const Types = {
    TRACK_PARCEL_REQUEST: 'TRACK_PARCEL_REQUEST',
    TRACK_PARCEL_SUCCESS: 'TRACK_PARCEL_SUCCESS',
    TRACK_PARCEL_ERROR:'TRACK_PARCEL_ERROR',
    TRACK_PARCEL_DEFAULT:'TRACK_PARCEL_DEFAULT'
  };
  
  export const trackParcelRequest = body => ({
    type: Types.TRACK_PARCEL_REQUEST,
    body
  })

  export const trackParcelDefault = () => ({
    type:Types.TRACK_PARCEL_DEFAULT
  })

  export const trackParcelSuccess = data => ({
    type: Types.TRACK_PARCEL_SUCCESS,
    data 
  })

  export const trackParcelError = err => ({
      type:Types.TRACK_PARCEL_ERROR,
      err
  })
  