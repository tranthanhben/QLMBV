import React from 'react';
import { Route} from 'react-router';
import App from '../views/App';
import Redirect from '../views/Redirect';
import NotFound from '../views/NotFound';
import Job from '../views/job/Job'
import Login from '../components/Login';
import JobEditor from '../views/job/NewJob';
export default (
  <Route component={App} >
    <Route path="/" component={Redirect} onEnter={Redirect.onEnter} >
      <Route path="/job" name="job" component={Job}/>
      <Route path="/job/:id" name="job editor" component={JobEditor}/>
    </Route>

    <Route path="/login" name="login" component={Login}/>
    <Route path="*" component={NotFound}/>
  </Route>
);
