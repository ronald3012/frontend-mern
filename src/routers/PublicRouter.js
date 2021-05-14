import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';
  
import LoginView from '../pages/LoginView';
import AppRouter from './AppRouter';
  
  const PublicRouter = props => {
      return (
          <Router>
              <div>
                  <Switch>
                      <Route path="/about" />
                      <Route path="/login" component={LoginView} />
                      <Route exact path="/" component={AppRouter}/>
                  </Switch>
              </div>
          </Router>
      )
  }
  
  export default PublicRouter;
  