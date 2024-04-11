import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { BiGithub,CoMoon } from 'oh-vue-icons/icons'

// import use icon
addIcons(BiGithub,CoMoon)
const app = createApp(App)

// add all icons to the library so you can use it in your page
app.use(router)

app.component('v-icon', OhVueIcon)
app.mount('#app')
