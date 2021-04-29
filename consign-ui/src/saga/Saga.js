import { all, fork } from 'redux-saga/effects';
import ParcelSaga from '../pages/admin/Admin.saga'
import LoginSaga from '../pages/login/Login.saga'
import CreateParcelSaga from '../components/modals/CreateParcel/CreateParcel.saga'
import UpdateParcelSaga from '../components/modals/UpdateParcel/UpdateParcel.saga'
import DeleteParcelSaga from '../components/popup/DeleteParcel/DeleteParcel.saga'
import TrackParcelSaga from '../pages/track/Track.saga'


export default function* Saga() {
  yield all([
      fork(ParcelSaga),
      fork(LoginSaga),
      fork(CreateParcelSaga),
      fork(UpdateParcelSaga),
      fork(DeleteParcelSaga),
      fork(TrackParcelSaga)
  ]);
}

