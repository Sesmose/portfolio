import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import VueSmoothScroll  from 'vue3-smooth-scroll';

/* add icons to the library */
library.add(faLinkedin,faGithub, faEnvelope)
import './index.css'
const app = createApp(App).use(VueSmoothScroll ).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
