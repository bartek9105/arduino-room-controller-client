import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/styles/app.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCheckCircle)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
