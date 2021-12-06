import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import routes from 'virtual:generated-pages'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

import messages from '@intlify/vite-plugin-vue-i18n/messages'

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages,
})

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router)
app.use(createPinia())
app.use(i18n)
app.mount('#app')