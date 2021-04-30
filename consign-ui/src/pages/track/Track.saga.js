import { takeEvery, call, put, fork } from 'redux-saga/effects';
import * as actions from './Track.action'
import axios from 'axios'
import { gql } from '@apollo/client';
import { print } from 'graphql/language/printer';


  
const TRACK_PARCEL = gql`
query ParcelInfo($tracking_id:String!) {
  ParcelInfo(tracking_id:$tracking_id){
    name
    weight
    sender
    receiver
    tracking_details {
      details
      date
    }
    }
}
`



const trackParcelApi = (parms) => {
    return axios.post('/', {
        query:print(TRACK_PARCEL),
        variables: {
            tracking_id:parms.tracking_id,
        },
        headers:{
            'Content-Type': 'application/json'
        }
    });
  };

function* trackParcel(body) {
  try {
    const result = yield call(trackParcelApi,body.body);
    if(result.data.errors) throw result.data.errors
    console.log(result)
    yield put(actions.trackParcelSuccess(result.data.data));
  } catch (error) {
    yield put(actions.trackParcelError(error))
  }
}

function* TrackParcelSaga() {
  yield takeEvery(actions.Types.TRACK_PARCEL_REQUEST, trackParcel);
}

export default TrackParcelSaga