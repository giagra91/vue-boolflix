import Vue from 'vue'
import App from './App.vue'
import LangFlag from 'vue-lang-code-flags';

Vue.component('lang-flag', LangFlag);

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faStar, faMagnifyingGlass,faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";


library.add(faStar, faStarRegular, faMagnifyingGlass,faAngleDown,faAngleUp);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
