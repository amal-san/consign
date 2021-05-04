import { takeEvery, call, put, fork } from 'redux-saga/effects';
import * as actions from './Admin.action';
import axios from 'axios'
import gql from 'graphql-tag';
import { print } from 'graphql/language/printer';


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
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
};

const FIND_PARCEL_DELIVERED = gql`
  query DeliveredParcels($status:Boolean!){
      DeliveredParcels(status:$status) {
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
}`

const getParcelApiWithParams = (params) => {
  return axios.post('/', {
    query:print(FIND_PARCEL_DELIVERED), 
    headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    variables: {
      status: params === 'delivered' ? true : false,
    }
});

}

function* getParcels(body) {
  if(body.body){
    try {
      const result = yield call(getParcelApiWithParams, body.body.params);
      if(result.data.errors) throw result.data.errors
      const updateResults = new Object({Parcels: result.data.data.DeliveredParcels})
      yield put(actions.getParcelsSuccess(updateResults));
      return;
    } catch (error) {
      yield put(actions.getParcelsError(error))
      return;
    }
  }
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