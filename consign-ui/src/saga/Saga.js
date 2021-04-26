import { all, fork } from 'redux-saga/effects';
import ParcelSaga from '../pages/admin/Admin.saga'
import LoginSaga from '../pages/login/Login.saga'
import CreateParcelSaga from '../components/modals/CreateParcel/CreateParcel.saga'

export default function* Saga() {
  yield all([
      fork(ParcelSaga),
      fork(LoginSaga),
      fork(CreateParcelSaga),
  ]);
}

