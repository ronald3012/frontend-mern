import { types } from '../types/types';

const initialState = {
  checking: true,
  tasks: [],
};

const taskReducer = (state = initialState, action) => {

  switch (action.type) {

    case types.taskAddNew:
      return {
        ...state,
        tasks: [action.payload,...state.tasks ],
      };

    case types.taskUpdated:
      return {
        ...state,
        tasks: state.tasks.map((e) =>
          e._id === action.payload._id ? action.payload : e
        ),
      };
    case types.taskDeleted:
      return {
        ...state,
        tasks: state.tasks.filter((e) =>( e._id !== action.payload.id)
        )
      };
      case types.taskLoaded:
        return {
          ...state,
          tasks: [...action.payload],
          checking: false
        }
        case types.taskLogout:
          return initialState       


    default:
      return state;
  }
};

export default taskReducer;