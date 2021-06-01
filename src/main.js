import Vue from 'vue'
import App from './App.vue'
import router from './router'

import "@mdi/font/css/materialdesignicons.css";
import "primevue/resources/themes/saga-green/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';

import Rating from 'primevue/rating';
import Carousel from 'primevue/carousel';
import MegaMenu from 'primevue/megamenu';
import Menu from 'primevue/menu';
import Button from 'primevue/button';
import InputText from "primevue/inputtext";
import Badge from 'primevue/badge';
import BadgeDirective from 'primevue/badgedirective';
import InputSwitch from 'primevue/inputswitch';

Vue.prototype.$appState = Vue.observable({ inputStyle: "outlined" });

Vue.component("InputText", InputText);
Vue.component("Menu", Menu);
Vue.component("MegaMenu", MegaMenu);
Vue.component("Badge", Badge);
Vue.component("Rating", Rating);
Vue.component("Carousel", Carousel);
Vue.component("Button", Button);
Vue.directive("badgexx", BadgeDirective);
Vue.component("InputSwitch", InputSwitch);
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')