import { combineReducers } from 'redux';
import { parcelsReducer } from '../pages/admin/Admin.reducer';
import { loginReducer } from '../pages/login/Login.reducer';
import { createParcelReducer } from '../components/modals/CreateParcel/CreateParcel.reducer'
import { updateParcelReducer } from '../components/modals/UpdateParcel/UpdateParcel.reducer'
import { deleteParcelReducer } from '../components/popup/DeleteParcel/DeleteParcel.reducer'
import { trackParcelReducer } from '../pages/track/Track.reducer'



export default combineReducers({
  parcels: parcelsReducer,
  login: loginReducer,
  createParcel: createParcelReducer,
  updateParcel: updateParcelReducer,
  deleteParcel: deleteParcelReducer,
  trackParcel: trackParcelReducer
});
