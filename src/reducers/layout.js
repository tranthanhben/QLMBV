const initialState = {
    menu: [
        [{
            label: 'Quan Ly Mua Ban Vai',
            href: '/job',
            icon: 'book'
        },{
            label: 'Quan Ly Khach Hang',
            href: '/event',
            icon: 'book'
        },{
            label: 'Quan Ly Nha Cung Cap',
            href: '/blog',
            icon: 'book'
        },{
            label: 'Quan Ly Cong No',
            href: '/apply',
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
