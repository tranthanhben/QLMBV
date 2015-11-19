import React from 'react';
import { Route} from 'react-router';
import App from '../views/App';
import Redirect from '../views/Redirect';
import NotFound from '../views/NotFound';
import Login from '../components/Login';


import {
  KhachHang,
  NhaCungCap,
  ThongKe,
  SanPham
} from 'components';
import {
  ListKH,
  PMH,
  PXH
} from '../components/KhachHang';
import {
  ListNCC,
  PDH,
  PNH
} from '../components/NhaCungCap';
export default (
  <Route component={App} >
    <Route path="/" component={Redirect} onEnter={Redirect.onEnter} >
      <Route path="/khachhang/" name="khachhang" component={KhachHang}>
        <Route path="/list" name="list khach hang" component={ListKH}/>
        <Route path="/pmh" name="pmh khach hang" component={PMH}/>
        <Route path="/pxh" name="pxh khach hang" component={PXH}/>
        <Route path="/hdkh" name="hdkh khach hang" component={NotFound}/>
      </Route>
      <Route path="/nhacungcap/" name="nhacungcap" component={NhaCungCap}>
        <Route path="/list" name="list nha cung cap" component={ListNCC}/>
        <Route path="/pdh" name="pdh nha cung cap" component={PDH}/>
        <Route path="/pnh" name="pnh nha cung cap" component={PNH}/>
        <Route path="/hdncc" name="hdncc nha cung cap" component={NotFound}/>
      </Route>
      <Route path="/sanpham" name="sanpham" component={SanPham}>
      </Route>

      <Route path="/thongke" name="thongke" component={ThongKe}/>
    </Route>

    <Route path="/login" name="login" component={Login}/>
    <Route path="*" component={NotFound}/>
  </Route>
);
