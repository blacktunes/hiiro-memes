import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import '@/assets/style/transition.styl'
import '@/assets/style/animation.styl'

createApp(App).use(router).mount('#app')
