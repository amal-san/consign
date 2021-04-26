import { Types } from './CreateParcel.action';

const initialState = {
  createParcelResults:[],
  createParcelError:[],
  createParcelLoading:true
};

export const createParcelReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.CREATE_PARCEL_SUCCESS:
      return {
        createParcelResults: action.data,
        createParcelLoading:false

    };
    case Types.CREATE_PARCEL_ERROR:
        return {
        createParcelError:action.err,
        createParcelLoading:false
    };
    case Types.CREATE_PARCEL_DEFAULT:
      return state
      
    default:
      return state;
  }
};

