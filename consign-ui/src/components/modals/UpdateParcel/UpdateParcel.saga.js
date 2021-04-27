import { takeEvery, call, put, fork } from 'redux-saga/effects';
import * as actions from './UpdateParcel.action';
import axios from 'axios'
import { gql } from '@apollo/client';
import { print } from 'graphql/language/printer';


  
const UPDATE_PARCEL = gql` 
mutation updateParcel($tracking_id:String! $name:String! $weight:String! $sender:String! $receiver:String!) {
    updateParcel(tracking_id:$tracking_id name:$name weight:$weight sender:$sender receiver:$receiver ){
     name
    }
}`



const updateParcelApi = (parms) => {
    return axios.post('/', {
        query:print(UPDATE_PARCEL),
        variables: {
            tracking_id:parms.tracking_id,
            name:parms.name,
            weight:parms.weight,
            sender:parms.sender,
            receiver:parms.receiver
        },
        headers:{
            'Content-Type': 'application/json'
        }
    });
  };

function* updateParcel(body) {
  try {
    const result = yield call(updateParcelApi,body.body);
    yield put(actions.updateParcelSuccess(result.data.data));
  } catch (error) {
    yield put(actions.updateParcelError(error))
  }
}

function* UpdateParcelSaga() {
  yield takeEvery(actions.Types.UPDATE_PARCEL_REQUEST, updateParcel);
}

export default UpdateParcelSaga