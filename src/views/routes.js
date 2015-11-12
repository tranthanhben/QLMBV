import React from 'react';
import { Route} from 'react-router';
import App from '../views/App';
import Redirect from '../views/Redirect';
import NotFound from '../views/NotFound';
import Login from '../components/Login';


import {
  KhachHang,
  NhaCungCap
} from 'components';
export default (
  <Route component={App} >
    <Route path="/" component={Redirect} onEnter={Redirect.onEnter} >
      <Route path="/khachhang" name="khachhang" component={KhachHang}/>
      <Route path="/nhacungcap" name="nhacungcap" component={NhaCungCap}/>
    </Route>

    <Route path="/login" name="login" component={Login}/>
    <Route path="*" component={NotFound}/>
  </Route>
);
