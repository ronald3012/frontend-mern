import {combineReducers} from 'redux';
import authReducer from './authRedecer';
import taskReducer from './taskReducer';
import modalReducer from './modalReducer';

export const rootReducer = combineReducers({
    authReducer,
    taskReducer,
    modalReducer
})