import messages from '@intlify/vite-plugin-vue-i18n/messages'
import PrimeVue from 'primevue/config'
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import { router } from './router'

import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/tailwind-light/theme.css'
import 'primeflex/primeflex.css'
import './assets/styles/index.scss'

const i18n = createI18n({
  locale: 'ru',
  messages,
})

createApp(App).use(router).use(i18n).use(PrimeVue).mount('#app')
