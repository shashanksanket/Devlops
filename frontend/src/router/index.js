import Vue from 'vue'
import VueRouter from 'vue-router'

// Routes
import yicroutes from './routes'
import store from '../store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    // { path: '/', redirect: { name: 'dashboard-ecommerce' } },
    { path: '/', redirect: { name: 'home' } },
    ...yicroutes,
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

router.beforeEach(async (to, _, next) => {

  
  
  return next()
})

//   let token = localStorage.getItem('feathers-jwt')
//   const isLoggedIn = router.app.$store.getters['login/isAuthenticated']
//   if(to.name != 'auth-login' && !token) {
//     return next({ name: 'auth-login' })
//   }else {  return next() }
//   // return next()
// })

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router
