import { types } from '../types/types';

const initialState = {
    checking: true
}


const authReducer = (state= initialState, action) => {
    switch (action.type) {
        case types.authLogin:
            return {
              ...state,
              checking: false,
              ...action.payload
            }
        case types.authCkeckingFinish:
        return {
          ...state,
          checking: false
        }
        case types.authLogout:
          return{
            checking: false
          }
    
        default:
            return state;
    }
  }


export default authReducer;