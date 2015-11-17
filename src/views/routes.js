import React from 'react';
import { Route} from 'react-router';
import App from '../views/App';
import Redirect from '../views/Redirect';
import NotFound from '../views/NotFound';
import Login from '../components/Login';


import {
  KhachHang,
  NhaCungCap,
  ThongKe
} from 'components';
import {
  ListKH,
  PMH
} from '../components/KhachHang';
export default (
  <Route component={App} >
    <Route path="/" component={Redirect} onEnter={Redirect.onEnter} >
      <Route path="/khachhang/" name="khachhang" component={KhachHang}>
        <Route path="/list" name="list khach hang" component={ListKH}/>
        <Route path="/pmh" name="pmh khach hang" component={PMH}/>
        <Route path="/pxh" name="pxh khach hang" component={NotFound}/>
        <Route path="/hdkh" name="hdkh khach hang" component={NotFound}/>
      </Route>
      <Route path="/nhacungcap/list" name="nhacungcap" component={NhaCungCap}/>
      <Route path="/thongke" name="thongke" component={ThongKe}/>
    </Route>

    <Route path="/login" name="login" component={Login}/>
    <Route path="*" component={NotFound}/>
  </Route>
);
