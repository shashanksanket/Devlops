export default [
    {
        path: '/auth/signin',
        name: 'signin',
        component: () => import("@/Pages/auth/signin"),
    },
    {
        path: '/auth/register',
        name: 'register',
        component: () => import("@/Pages/auth/register"),
    },
    {
        path: '/auth/signout',
        name: 'signout',
        component: () => import("@/Pages/auth/signout"),
    },
]
