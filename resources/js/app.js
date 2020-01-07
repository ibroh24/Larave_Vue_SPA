
require('./bootstrap');
window.Vue = require('vue');

// after installing vform with npm, then we import it
import {Form, HasError, AlertError} from 'vform'

// after installing moment with npm (npm install moment --save), then we import it
import moment from 'moment';

// after installing vue-progressbar with npm (npm install vue-progressbar --save), then we import it
// and was rendered in master template 
import progressbar from 'vue-progressbar'

import VueRouter from 'vue-router'

window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
Vue.use(VueRouter)

Vue.use(progressbar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px'
});

// declaring filter here to make it global
Vue.filter(
  'caseUpper', (text) => {return text.charAt(0).toUpperCase()+text.slice(1) }
);

// using moment with filter
Vue.filter(
  'fullDate', (moments) => {return moment(moments).format("ll")}
);

// embedded vue routes codes

// const routes = [
//     { path: '/dasboard', component: Foo },
//     { path: '/profile', component: Bar }
//   ];
let routes = [
    { path: '/dashboard', component: require('./components/Dashboard.vue').default },
    { path: '/profile', component: require('./components/Profile.vue').default },
    { path: '/manageuser', component: require('./components/ManageUser.vue').default }
  ];


  const router = new VueRouter({
    //   adding mode: history to use the intend route after localhost
    mode : 'history',
    routes // short for `routes: routes`
  })

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router
})
// .$mount('#app')