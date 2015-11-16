const initialState = {
  menu: [
    [{
      label: 'Sản Phẩm',
      href: '/sanpham',
      icon: 'file-o'
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
        icon: 'file-o'
      },{
        label: 'Phiếu Xuất Hàng',
        href: '/khachhang/pxh',
        icon: 'file-o'
      },{
        label: 'Hóa đơn',
        href: '/khachhang/hdkh',
        icon: 'file-o'
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
        icon: 'file-o'
      },{
        label: 'Phiếu Nhập Hàng',
        href: '/nhacungcap/pnh',
        icon: 'file-o'
      },{
        label: 'Hóa đơn',
        href: '/nhacungcap/hdncc',
        icon: 'file-o'
      }]
    },{
      label: 'Công Nợ',
      href: '/congno',
      icon: 'file-o'
    },{
      label: 'Thống Kê',
      href: '/thongke',
      icon: 'line-chart'
    }],
    [{
      label: 'Profile',
      href: '/profile',
      icon: 'user'
    }, {
      label: 'Logout',
      href: '/logout',
      icon: 'log-out'
    }]
  ]
};
export default function layout(state = initialState, action = {}) {
  switch (action.type) {
    default: return state;
  }
}
