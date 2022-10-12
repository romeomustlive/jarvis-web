import messages from '@intlify/vite-plugin-vue-i18n/messages'
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import { router } from './router'

import './assets/styles/index.scss'

const i18n = createI18n({
  locale: 'en',
  messages,
})

createApp(App).use(router).use(i18n).mount('#app')
