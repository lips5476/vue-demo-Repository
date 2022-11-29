import { sum } from './js/math.js'
import '../src/css/style.css'
import '../src/css/aaa.less'
import { mul } from '../src/ts/mul.ts'
import { createApp } from 'vue'
import App from './vue/App.vue'

console.log(sum(10, 20))
console.log(mul(10, 20))

createApp(App).mount('#app')
