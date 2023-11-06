<template>
  <div
    id="app"
    class=""
    :class="[skinClasses]"
  >
    <Navbar/>
    <component >
      <router-view />
    </component>

  </div>
</template>

<script>
import ScrollToTop from '@core/components/scroll-to-top/ScrollToTop.vue'

// This will be populated in `beforeCreate` hook
import { $themeColors, $themeBreakpoints, $themeConfig } from '@themeConfig'
import { provideToast } from 'vue-toastification/composition'
import { watch } from '@vue/composition-api'
import useAppConfig from '@core/app-config/useAppConfig'
import Vidle from 'v-idle'
import Navbar from '@/components/Navbar.vue'
import { useWindowSize, useCssVar } from '@vueuse/core'

import store from '@/store'
import { mapMutations, mapActions, mapState } from "vuex";

const LayoutVertical = () => import('@/layouts/vertical/LayoutVertical.vue')
const LayoutHorizontal = () => import('@/layouts/horizontal/LayoutHorizontal.vue')
const LayoutFull = () => import('@/layouts/full/LayoutFull.vue')

export default {
  components: {
    Vidle,
    // Layouts
    LayoutHorizontal,
    LayoutVertical,
    LayoutFull,
    ScrollToTop,
    Navbar,
  },
  // ! We can move this computed: layout & contentLayoutType once we get to use Vue 3
  // Currently, router.currentRoute is not reactive and doesn't trigger any change
  computed: {
    layout() {
      if (this.$route.meta.layout === 'full') return 'layout-full'
      return `layout-${this.contentLayoutType}`
    },
    contentLayoutType() {
      return this.$store.state.appConfig.layout.type
    },
  },
  beforeCreate() {
    // Set colors in theme
    const colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark']

    // eslint-disable-next-line no-plusplus
    // for (let i = 0, len = colors.length; i < len; i++) {
    //   $themeColors[colors[i]] = useCssVar(`--${colors[i]}`, document.documentElement).value.trim()
    // }

    // Set Theme Breakpoints
    const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl']

    // eslint-disable-next-line no-plusplus
    // for (let i = 0, len = breakpoints.length; i < len; i++) {
    //   $themeBreakpoints[breakpoints[i]] = Number(useCssVar(`--breakpoint-${breakpoints[i]}`, document.documentElement).value.slice(0, -2))
    // }

    // Set RTL
    const { isRTL } = $themeConfig.layout
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr')
  },
  methods: {
    ...mapActions({
        logoutUser: "auth/logoutUser"
		}),

    onidle(){
      alert('You have been logged out due to inactivity of 15 minutes')
      this.$router.push({ name: "login" });
      this.logoutUser();
    }
  },
  setup() {
    const { skin, skinClasses } = useAppConfig()
    const { enableScrollToTop } = $themeConfig.layout

    // If skin is dark when initialized => Add class to body
    if (skin.value === 'dark') document.body.classList.add('dark-layout')

    // Provide toast for Composition API usage
    // This for those apps/components which uses composition API
    // Demos will still use Options API for ease
    provideToast({
      hideProgressBar: true,
      closeOnClick: false,
      closeButton: false,
      icon: false,
      timeout: 3000,
      transition: 'Vue-Toastification__fade',
    }),

    // Set Window Width in store
    store.commit('app/UPDATE_WINDOW_WIDTH', window.innerWidth)
    const { width: windowWidth } = useWindowSize()
    // watch(windowWidth, val => {
    //   store.commit('app/UPDATE_WINDOW_WIDTH', val)
    // })

    return {
      skinClasses,
      enableScrollToTop,
    }
  },
}
</script>
<style>
  #app{
    background: #e1e5f1;
    height: 100%;

  }
  .root{
    background: white;
    min-width: 80%;
    width: 97%;
    padding: 1rem;
    margin: auto;
    border-radius: 1rem;
  }
</style>
