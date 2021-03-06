import { Types } from './Track.action';

const initialState = {
  trackParcelResults:[],
  trackParcelError:[],
  trackParcelLoading:true
};

export const trackParcelReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.TRACK_PARCEL_SUCCESS:
      return {
        trackParcelResults: action.data,
        trackParcelLoading:false

    };
    case Types.TRACK_PARCEL_ERROR:
        return {
        trackParcelError:action.err,
        trackParcelLoading:false
    };
    case Types.TRACK_PARCEL_DEFAULT:
      return {
        trackParcelError:[],
        trackParcelResults:[],
        trackParcelLoading:true
      }
      
    default:
      return state;
  }
};

