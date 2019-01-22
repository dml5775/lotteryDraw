import Vue from 'vue'
import App from './rule.vue'
import 'lib-flexible'
Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount('#app');