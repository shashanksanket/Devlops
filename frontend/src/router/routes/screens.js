export default [
  {
    path: '/home',
    name: 'home',
    component: () => import("@/Pages/screens/home.vue"),
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import("@/Pages/screens/portfolio.vue"),
  },
  {
    path: '/services',
    name: 'services',
    component: () => import("@/Pages/screens/services.vue"),
  },
  {
    path: '/contact-us',
    name: 'contactUs',
    component: () => import("@/Pages/screens/contactUs.vue"),
  },
]
