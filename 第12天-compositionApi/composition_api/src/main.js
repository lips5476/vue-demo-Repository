import { createApp } from 'vue'
import App from './test/App.vue'
// import global from '../src/test/portals'


const app = createApp(App)
// app.use(global)
app.mount('#app')
