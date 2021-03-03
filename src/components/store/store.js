import {createStore, applyMiddleware } from 'redux';
import {createLogger} from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducer from '../reducer/reducer';
const logger = createLogger()
const store =  createStore(reducer, composeWithDevTools(applyMiddleware(logger)))

export default store