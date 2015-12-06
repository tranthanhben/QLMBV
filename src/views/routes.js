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
  SanPham,
  NhanVien,
  Kho
} from 'components';
import {
  ListKH,
  PMH,
  PXH,
  HDKH
} from '../components/KhachHang';
import {
  ListNCC,
  PDH,
  PNH,
  HDNCC
} from '../components/NhaCungCap';
// import {
//   ListNV
// } from '../components/NhanVien';
export default (
  <Route component={App} >
    <Route path="/" component={Redirect} onEnter={Redirect.onEnter} >
      <Route path="/khachhang/" name="khachhang" component={KhachHang}>
        <Route path="/list" name="list khach hang" component={ListKH}/>
        <Route path="/pmh" name="pmh khach hang" component={PMH}/>
        <Route path="/pxh" name="pxh khach hang" component={PXH}/>
        <Route path="/hdkh" name="hdkh khach hang" component={HDKH}/>
      </Route>
      <Route path="/nhacungcap/" name="nhacungcap" component={NhaCungCap}>
        <Route path="/list" name="list nha cung cap" component={ListNCC}/>
        <Route path="/pdh" name="pdh nha cung cap" component={PDH}/>
        <Route path="/pnh" name="pnh nha cung cap" component={PNH}/>
        <Route path="/hdncc" name="hdncc nha cung cap" component={HDNCC}/>
      </Route>
      <Route path="/nhanvien" name="nhanvien" component={NhanVien} />
      <Route path="/sanpham" name="sanpham" component={SanPham} />
      <Route path="/kho" name="kho" component={Kho} />
      <Route path="/thongke" name="thongke" component={ThongKe}/>
    </Route>
    <Route path="/login" name="login" component={Login}/>
    <Route path="*" component={NotFound}/>
  </Route>
);
