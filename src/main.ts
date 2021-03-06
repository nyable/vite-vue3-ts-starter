import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import './styles/index.scss'
import '@/enhancer/vue-runtime-type'
import { createPinia } from 'pinia'
const app = createApp(App)
app
  .use(router)
  .use(ElementPlus)
  .use(createPinia())
  .mount("#app")

