import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import './style.css'
import lara from './presets/lara'

import App from './App.vue'
import router from './router'

import Button from 'primevue/button'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('Button', Button)
app.use(PrimeVue, {
  unstyled: true,
  pt: lara
})

app.mount('#app')
