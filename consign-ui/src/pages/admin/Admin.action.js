export const Types = {
    GET_PARCELS_REQUEST: 'GET_PARCELS_REQUEST',
    GET_PARCELS_SUCCESS: 'GET_PARCELS_SUCCESS',
    GET_PARCELS_ERROR:'GET_PARCELS_ERROR'
  };
  
  export const getParcelsRequest = () => ({
    type: Types.GET_PARCELS_REQUEST,
  })

  export const getParcelsSuccess = data => ({
    type: Types.GET_PARCELS_SUCCESS,
    data 
  })

  export const getParcelsError = err => ({
      type:Types.GET_PARCELS_ERROR,
      err
  })
  