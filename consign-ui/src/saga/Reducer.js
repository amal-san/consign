import { combineReducers } from 'redux';
import { parcelsReducer } from '../pages/admin/Admin.reducer';
import { loginReducer } from '../pages/login/Login.reducer';
import { createParcelReducer } from '../components/modals/CreateParcel/CreateParcel.reducer'

export default combineReducers({
  parcels: parcelsReducer,
  login: loginReducer,
  createParcel: createParcelReducer
});
