const initialState = {
    menu: [
        [{
            label: 'Quan Ly San Pham',
            href: '/sanpham',
            icon: 'book'
        },{
            label: 'Quan Ly Khach Hang',
            href: '/khachhang',
            icon: 'book'
        },{
            label: 'Quan Ly Nha Cung Cap',
            href: '/nhacungcap',
            icon: 'book'
        },{
            label: 'Quan Ly Cong No',
            href: '/congno',
            icon: 'book'
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
