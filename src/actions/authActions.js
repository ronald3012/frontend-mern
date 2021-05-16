import { fetchSinToken, fetchConToken } from '../helpers/fetch';
import { types } from '../types/types';
import { taskLogout } from './taskActions';

export const startLogin = ( email, password ) => {
    
  return async (dispatch) => {
    const resp = await fetchSinToken('auth', { email, password }, 'POST');
    const body = await resp.json();
    if (body.ok) {

      localStorage.setItem('token', body.token);
      localStorage.setItem('token-init-date', new Date().getTime());
      dispatch(
          login({ uid: body.uid, name: body.name })
      );

    }else{
        console.log(body);
    }
  };
};

export const startRegister = ( email, password, name ) => {

  return async(dispatch)=>{
    const resp = await fetchSinToken('auth/new', { name, email, password }, 'POST');
    const body = await resp.json();
    if (body.ok) {
      localStorage.setItem('token', body.token);
      localStorage.setItem('token-init-date', new Date().getTime());
      dispatch(login({ uid: body.uid, name: body.name }));
    }else{
        console.log(body);
    }
  }

}

export const startChecking = () => {

  return async (dispatch)=>{
    const resp = await fetchConToken('auth/renew');
    const body = await resp.json();
    if (body.ok) {
      localStorage.setItem('token', body.token);
      localStorage.setItem('token-init-date', new Date().getTime());
      dispatch(login({ uid: body.uid, name: body.name }));
    }else{
        dispatch( checkingFinish() );
    }
  }
}

export const startLogout = () => {
  return (dispatch)=>{
    localStorage.clear()
    dispatch(logout());
    dispatch(taskLogout());
  }
}

const checkingFinish = () => ({
  type: types.authCkeckingFinish
})

const login = (user) => ({
  type: types.authLogin,
  payload: user,
});

const logout = () => ({
  type: types.authLogout
})