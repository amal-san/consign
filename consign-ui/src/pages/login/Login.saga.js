import { takeEvery, call, put, fork } from 'redux-saga/effects';
import * as actions from './Login.action';
import axios from 'axios'
import { gql, useQuery } from '@apollo/client';
import { print } from 'graphql/language/printer';


  
const LOGIN_QUERY = gql` 
query Login($username:String! $password:String!) {
    Login(username:$username password:$password){
    username
    token 
  }
}`


const loginApi = (username, password) => {
    console.log(username,password)
    return axios.post('/', {
        query:print(LOGIN_QUERY),
        variables: {
            username:username,
            password:password
        },
        headers:{
            'Content-Type': 'application/json'
        }
    });
  };

function* login(body) {
  try {
    const result = yield call(loginApi,body.body.username,body.body.password);
    console.log(result)
    yield put(actions.loginSuccess(result.data.data));
  } catch (error) {
    yield put(actions.loginError(error))
  }
}

function* LoginSaga() {
  yield takeEvery(actions.Types.LOGIN_REQUEST, login);
}

export default LoginSaga