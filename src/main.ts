import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import lazyload from '@/assets/scripts/lazyload'
import '@/assets/style/transition.styl'
import '@/assets/style/animation.styl'

createApp(App).use(router).use(lazyload).mount('#app')
