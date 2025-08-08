import './assets/main.css'
import { faReact, faVuejs, faNodeJs, faJs, faSass, faBootstrap, faHtml5, faCss3Alt, faFigma } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons' // alternativa para Laravel
import { faLinkedin, faGithub, faBehance, faDribbble } from '@fortawesome/free-brands-svg-icons'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

library.add(faReact, faVuejs, faNodeJs, faJs, faSass, faBootstrap, faHtml5, faCss3Alt, faFigma, faCode, faLinkedin, faGithub, faBehance, faDribbble)
const app = createApp(App)


app.component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
