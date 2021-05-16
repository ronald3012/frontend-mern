import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import  LoginView  from '../pages/LoginView';
import { useDispatch, useSelector } from 'react-redux';
import { startChecking } from '../actions/authActions';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import HomeView from '../pages/HomeView';
import RegisterView from '../pages/RegisterView';

export const AppRouter = () => {

  const dispatch = useDispatch()
  const {checking, uid} = useSelector(state => state.authReducer)

  useEffect(() => {
    dispatch(startChecking())
  }, [dispatch])

  if(checking){
    return <h5> Espere...</h5>
  }

  return (
    <Router>
      <div>
        <Switch>
            <PublicRoute 
            exact
            path='/login'
            component={LoginView}
            isAuthenticated={!!uid}
            />
            <PublicRoute 
            exact
            path='/register'
            component={RegisterView}
            isAuthenticated={!!uid}
            />            
            <PrivateRoute 
            exact
            path='/'
            component={HomeView}
            isAuthenticated={!!uid}
            />
            <Redirect to='/login' />
        </Switch>
      </div>
    </Router>
  );
};
