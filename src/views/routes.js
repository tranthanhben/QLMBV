import React from 'react';
import { Route} from 'react-router';
import App from '../views/App';
import Redirect from '../views/Redirect';
import NotFound from '../views/NotFound';
import Job from '../views/job/Job'
import Login from '../components/Login';
import JobEditor from '../views/job/NewJob';
import Event from '../views/event';
import EventEditor from '../views/event/New';
import Blog from '../views/blog';
import BlogEditor from '../views/blog/New';
import Apply from '../views/apply';

export default (
  <Route component={App} >
    <Route path="/" component={Redirect} onEnter={Redirect.onEnter} >
      <Route path="/job" name="job" component={Job}/>
      <Route path="/job/:id" name="job editor" component={JobEditor}/>
      <Route path="/event" name="event" component={Event}/>
      <Route path="/event/:id" name="event editor" component={EventEditor}/>
      <Route path="/blog" name="blog" component={Blog}/>
      <Route path="/blog/:id" name="blog editor" component={BlogEditor}/>
      <Route path="/apply" name="apply" component={Apply}/>
    </Route>

    <Route path="/login" name="login" component={Login}/>
    <Route path="*" component={NotFound}/>
  </Route>
);
