// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App';
import store from './store';
import router from './router'

import VeeValidate from 'vee-validate'
Vue.use(VeeValidate);

import vSelect from 'vue-select'
Vue.component('v-select', vSelect)
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	render: h => h (App),
});