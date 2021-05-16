import { types } from '../types/types';
import { fetchConToken } from '../helpers/fetch';
import { hideModal } from './modalActions';


export const taskStartAddNew = (task) => {
  return async (dispatch, getState) => {
    const { uid, name } = getState().authReducer;
    dispatch(hideModal());
    try {
      const resp = await fetchConToken('tasks', task, 'POST');
      const body = await resp.json();
      if (body.ok) {
        task._id = body.task._id;
        task.user = {
          _id: uid,
          name,
        };
        dispatch(taskAddNew(task));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const taskAddNew = (task) => ({
  type: types.taskAddNew,
  payload: task,
});


export const taskStartUpdate = (task,taskRef) => {

  taskRef.current.querySelector('.loading').style.display = 'inherit';

  return async (dispatch) => {
    try {
      const resp = await fetchConToken(`tasks/${task._id}`, task, 'PUT');
      const body = await resp.json();
      if (body.ok) {
        dispatch(taskUpdated(task));
        taskRef.current.querySelector('.loading').style.display = 'none';
      } else {
        console.log(body);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const taskUpdated = (task) => ({
  type: types.taskUpdated,
  payload: task,
});

export const taskStartDelete = ( id) => {
  return async (dispatch) => {

    try {
      const resp = await fetchConToken(`tasks/${id}`, {}, 'DELETE');
      const body = await resp.json();
      if (body.ok) {
          dispatch(taskDeleted(id));
      } else {
        console.log(body);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const taskDeleted = (id) => ({
  type: types.taskDeleted,
  payload:{id}
});

export const taskStartLoading = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken('tasks');
      const body = await resp.json();
      const tasks = body.tasksList;
      dispatch(taskLoaded(tasks));
    } catch (error) {
      console.log(error);
    }
  };
};

const taskLoaded = (tasks) => ({
  type: types.taskLoaded,
  payload: tasks,
});

export const taskLogout = () => ({
  type: types.taskLogout,
});