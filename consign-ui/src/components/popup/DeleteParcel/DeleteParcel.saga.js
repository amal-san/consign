import { takeEvery, call, put, fork } from 'redux-saga/effects';
import * as actions from './DeleteParcel.action'
import axios from 'axios'
import { gql } from '@apollo/client';
import { print } from 'graphql/language/printer';


  
const DELETE_PARCEL = gql` 
    mutation deleteParce($tracking_id:String!) {
        deleteParcel(tracking_id:$tracking_id){
         tracking_id
       }
}`



const deleteParcelApi = (parms) => {
    console.log(parms)
    return axios.post('/', {
        query:print(DELETE_PARCEL),
        variables: {
            tracking_id:parms.tracking_id,
        },
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
  };

function* deleteParcel(body) {
  try {
    const result = yield call(deleteParcelApi,body.body);
    if(result.data.errors) throw result.data.errors
    yield put(actions.deleteParcelSuccess(result.data.data));
  } catch (error) {
    yield put(actions.deleteParcelError(error))
  }
}

function* DeleteParcelSaga() {
  yield takeEvery(actions.Types.DELETE_PARCEL_REQUEST, deleteParcel);
}

export default DeleteParcelSaga