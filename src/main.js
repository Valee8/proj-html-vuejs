import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faCartShopping, faAngleLeft, faAngleRight, faFolder } from '@fortawesome/free-solid-svg-icons';

import { faInstagram, faTwitter, faFacebookF, faPinterestP } from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add(faCartShopping, faAngleLeft, faAngleRight, faInstagram, faFolder, faTwitter, faFacebookF, faPinterestP)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
