import { Types } from './DeleteParcel.action';

const initialState = {
  deleteParcelResults:[],
  deleteParcelError:[],
  deleteParcelLoading:true
};

export const deleteParcelReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.DELETE_PARCEL_SUCCESS:
      return {
        deleteParcelResults: action.data,
        deleteParcelLoading:false

    };
    case Types.DELETE_PARCEL_ERROR:
        return {
        deleteParcelError:action.err,
        deleteParcelLoading:false
    };
    case Types.DELETE_PARCEL_DEFAULT:
      return state
      
    default:
      return state;
  }
};

