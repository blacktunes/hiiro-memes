import lazyload from '@/assets/scripts/lazyload'
import '@/assets/style/animation.styl'
import '@/assets/style/transition.styl'
import router from '@/router'
import { inject } from '@vercel/analytics'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
  .use(router)
  .use(lazyload)
  .mount('#app')

inject()
