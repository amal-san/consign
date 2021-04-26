import { Types } from './Admin.action';

const initialState = {
  parcelsResults:[],
  parcelsError:[],
  parcelsLoading:true
};

export const parcelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_PARCELS_SUCCESS:
      return {
        parcelsResults: action.data,
        parcelsLoading:false

    };
    case Types.GET_PARCELS_ERROR:
        return {
        parcelsError:action.err,
        parcelsLoading:false
    };
    default:
      return state;
  }
};


