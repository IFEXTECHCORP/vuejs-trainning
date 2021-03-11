import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// yarn add @fortawesome/free-solid-svg-icons
// yarn add @fortawesome/fontawesome-svg-core
// yarn add @fortawesome/vue-fontawesome@latest


// library -> registrar um incone
// Import all icons

// const keys = Object.keys(Icons).slice(2);
// for (let key of keys) {
//   library.add(Icons[key])
// }
library.add(faPlus)

//Register global component
Vue.component('fa', FontAwesomeIcon)