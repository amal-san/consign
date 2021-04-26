  
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import Reducer from './Reducer';
import Saga from './Saga';
import logger from 'redux-logger'

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reducer, composeEnhancers(applyMiddleware(sagaMiddleware, logger)))

sagaMiddleware.run(Saga);

export default store;