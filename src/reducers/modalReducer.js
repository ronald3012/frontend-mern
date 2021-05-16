import { types } from '../types/types';

const initialState = {
    visible: false
}

const modalReducer = (state= initialState, action) => {
    
    switch (action.type) {
        case types.modalShow:
            return {visible:true};

        case types.modalHide:
            return {visible:false};

        default:
            return state;
    }
  }

export default modalReducer;