import { createApp } from 'vue'
import './style.css'
import App from './5.router标签的扩展功能/App.vue'
import router from './5.router标签的扩展功能/router/index'

const app = createApp(App)
app.use(router)
app.mount('#app')
