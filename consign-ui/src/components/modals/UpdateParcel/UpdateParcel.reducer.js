import { Types } from './UpdateParcel.action';

const initialState = {
  updateParcelResults:[],
  updateParcelError:[],
  updateParcelLoading:true
};

export const updateParcelReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.UPDATE_PARCEL_SUCCESS:
      return {
        updateParcelResults: action.data,
        updateParcelLoading:false

    };
    case Types.UPDATE_PARCEL_ERROR:
        return {
        updateParcelError:action.err,
        updateParcelLoading:false
    };
    case Types.UPDATE_PARCEL_DEFAULT:
      return {
        updateParcelError:[],
        updateParcelLoading:true,
        updateParcelResults:[]
    };
      
    default:
      return state;
  }
};

