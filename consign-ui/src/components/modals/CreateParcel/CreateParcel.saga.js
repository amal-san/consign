import { takeEvery, call, put, fork } from 'redux-saga/effects';
import * as actions from './CreateParcel.action';
import axios from 'axios'
import { gql } from '@apollo/client';
import { print } from 'graphql/language/printer';


  
const CREATE_PARCEL = gql` 
mutation createParcel($name:String! $weight:String! $sender:String! $receiver:String!) {
    createParcel(name:$name weight:$weight sender:$sender receiver:$receiver){
     tracking_id
     name
     weight
     sender
     receiver
  }
}`


const createParcelApi = (parms) => {
    return axios.post('/', {
        query:print(CREATE_PARCEL),
        variables: {
            name:parms.name,
            weight:parms.weight,
            sender:parms.sender,
            receiver:parms.receiver
        },
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`

        }
    });
  };

function* createParcel(body) {
  try {
    const result = yield call(createParcelApi,body.body);
    if(result.data.errors) throw result.data.errors
    yield put(actions.createParcelSuccess(result.data.data));
  } catch (error) {
    yield put(actions.createParcelError(error))
  }
}

function* CreateParcelSaga() {
  yield takeEvery(actions.Types.CREATE_PARCEL_REQUEST, createParcel);
}

export default CreateParcelSaga