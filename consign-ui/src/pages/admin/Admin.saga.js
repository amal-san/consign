import { takeEvery, call, put, fork } from 'redux-saga/effects';
import * as actions from './Admin.action';
import axios from 'axios'

const getParcelApi = () => {
    return axios.post('/', {
        query:`
        {
            Parcels{
                name
                status
                tracking_id
                tracking_details {
                  date
                  details
                }
                weight
                sender
                receiver
                created_at
            }
        }`, 
        headers:{
            'Content-Type': 'application/json'
        }
    });
  };

function* getParcels() {
  try {
    const result = yield call(getParcelApi);
    if(result.data.errors) throw result.data.errors
    yield put(actions.getParcelsSuccess(result.data.data));
  } catch (error) {
    yield put(actions.getParcelsError(error))
  }
}

function* ParcelSaga() {
  yield takeEvery(actions.Types.GET_PARCELS_REQUEST, getParcels);
}

export default ParcelSaga