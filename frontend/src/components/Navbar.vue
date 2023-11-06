
<template>
    <div>
      <b-navbar type="light" variant="light" class="bg-white p-1 m-2  shadow-lg">
        <b-navbar-brand>Logo</b-navbar-brand>
        <b-navbar-nav class="mx-auto">
          <b-nav-item @click="redirect('home')">Home</b-nav-item>
          <b-nav-item @click="redirect('services')">Services</b-nav-item>
          <b-nav-item @click="redirect('contactUs')">Contact Us</b-nav-item>
          <b-nav-item @click="redirect('portfolio')">Portfolio</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="">
          <b-nav-item @click="redirect('signin')">Login</b-nav-item>
          <b-nav-item @click="redirect('signout')">Logout</b-nav-item>
          <b-nav-item @click="redirect('register')">Register</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>
  </template>
<script>

import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {
    BSidebar, BModal, BForm, BFormFile, BFormGroup, BFormInput, BFormInvalidFeedback, BButton,
    BNavbar, BTooltip, BNavItemDropdown, BDropdownItem, VBToggle,
    BNavbarToggle,
    BCollapse, BNavItem,
    BNavbarBrand, BNav, BNavbarNav,
} from 'bootstrap-vue'
import { ref } from '@vue/composition-api'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import store from '@/store'
import Vue from 'vue'
import Navbar from '@/components/Navbar.vue'
import VueMq from 'vue-mq'
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
import Password from "vue-password-strength-meter";
import { mapMutations, mapActions, mapState } from "vuex";
Vue.use(VueMq, {
    breakpoints: {
        smallDevices: 600,
        mediumDevices: 1200,
        largeDevices: Infinity,
    }
})


export default {
    components: {
        BForm,
        BFormFile,
        BFormGroup,
        BFormInput,
        BFormInvalidFeedback,
        BModal,
        BNavbarBrand,
        BNavbar, BTooltip, BNavItemDropdown, BDropdownItem,
        BNavbarToggle,
        BCollapse,
        BButton,
        BNav,
        BNavItem,
        BNavbarNav,
        Navbar,


        // Form Validation
        ValidationProvider,
        ValidationObserver,
    },
    directives: {
        'b-toggle': VBToggle,
        Ripple,
    },
    model: {

    },
    props: {


    },
    data() {
        return {
        }
    },
    methods: {


        ...mapActions({
            // logoutUser: "auth/logoutUser",


        }),
        redirect(val){
            this.$router.push({name:val})
        },
    },
    computed: {
        ...mapState({
            //   isLoggedIn: (state)=>{
            //     return state.auth.isAuthenticated
            //   },



        }),
    },

}

</script>
<style scoped>
 .navbar.navbar-light.bg-light{
    background-color: #ccd7ed!important;
    border-start-start-radius: 0.5rem/* 8px */ !important;
    border-start-end-radius: 0.5rem/* 8px */ !important;

    border-end-start-radius: 2rem/* 8px */ !important;
    border-end-end-radius: 2rem/* 8px */ !important;
    

 }
</style>
