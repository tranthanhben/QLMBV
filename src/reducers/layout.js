const initialState = {
    menu: [
        [{
            label: 'Job',
            href: '/job',
            icon: 'book'
        }, {
            label: 'Credit Cards',
            href: '/credit_cards',
            icon: 'book'
        }, {
            label: 'Debit Cards',
            href: '/debit_cards',
            icon: 'book'
        }, {
            label: 'Term Deposits',
            href: '/term_deposits',
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
