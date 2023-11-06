<template>
    <div class="root">
        service Component
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

        }),

    },
    computed: {
        ...mapState({

        }),
    },

}

</script>
<style >



</style>
