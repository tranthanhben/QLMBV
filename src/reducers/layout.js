import {
  OPEN_MODAL,
  CLOSE_MODAL
} from 'actions/actionTypes';

const initialState = {
  menu: [
    [{
      label: 'Sản Phẩm',
      href: '/sanpham',
      icon: 'cubes'
    }, {
      label: 'Khách Hàng',
      href: '/khachhang',
      icon: 'folder-o',
      name: 'sanpham',
      sub: true,
      children: [{
        label: 'Danh Sách',
        href: '/khachhang/list',
        icon: 'list'
      },{
        label: 'Phiếu Mua Hàng',
        href: '/khachhang/pmh',
        icon: 'shopping-cart'
      },{
        label: 'Phiếu Xuất Hàng',
        href: '/khachhang/pxh',
        icon: 'truck'
      },{
        label: 'Hóa Đơn',
        href: '/khachhang/hdkh',
        icon: 'money'
      }]
    }, {
      label: 'Nhà Cung Cấp',
      href: '/nhacungcap',
      icon: 'file-o',
      name:"nhacungcap",
      sub:true,
      children: [{
        label: 'Danh Sách',
        href: '/nhacungcap/list',
        icon: 'list'
      },{
        label: 'Phiếu Đặt Hàng',
        href: '/nhacungcap/pdh',
        icon: 'shopping-cart fa-flip-horizontal'
      },{
        label: 'Phiếu Nhập Hàng',
        href: '/nhacungcap/pnh',
        icon: 'truck fa-flip-horizontal'
      },{
        label: 'Hóa Đơn',
        href: '/nhacungcap/hdncc',
        icon: 'money'
      }],
      role: 'quanly'
    },{
      label: 'Công Nợ',
      href: '/congno',
      icon: 'dollar',
      role: 'quanly'
    },{
      label: 'Thống Kê',
      href: '/thongke',
      icon: 'line-chart',
      role: 'quanly'
    },{
      label: 'Kho',
      href: '/kho',
      icon: 'database',
      role: 'quanly'
    }],
    [{
      label: 'Nhân Viên',
      href: '/nhanvien',
      icon: 'user',
      role: 'admin'
    }, {
      label: 'Đăng xuất',
      href: '/logout',
      icon: 'log-out'
    }]
  ],
  menuparse:{
    '/sanpham':'Sản Phẩm',
    '/khachhang/list':'Danh Sách Khách Hàng',
    '/khachhang/pmh':'Phiếu Mua Hàng',
    '/khachhang/pxh':'Phiếu Xuất Hàng',
    '/khachhang/hdkh':'Hóa Đơn Khách Hàng',
    '/nhacungcap/list':'Danh Sách Nhà Cung Cấp',
    '/nhacungcap/pdh':'Phiếu Đặt Hàng',
    '/nhacungcap/pnh':'Phiếu Nhập Hàng',
    '/nhacungcap/hdncc':'Hóa Đơn Nhà Cung Cấp',
    '/thongke':'Thống Kê',
    '/congno':'Công Nợ',
    '/profile':'Profile',
    '/nhanvien':'Nhân Viên',
    '/kho':'Kho',
    'lohang': 'Lô Hàng',
    'loaivai': 'Loại Vải',
    'khachhang': 'Công Nợ Khách Hàng',
    'nhacungcap': 'Công Nợ Nhà Cung Cấp'
  },

};
export default function layout(state = initialState, action = {}) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        openmodal: true
      }
    case CLOSE_MODAL:
      return {
        ...state,
        openmodal: false
      }
    default: return {
      ...state
    };
  }
}
