import { createApp } from 'vue'
import App from './App.vue'
import Icon from '@wy/components/icon'
const app = createApp(App)
const plugins = [
  Icon
]
plugins.forEach(plugin=>app.use(plugin))

app.mount('#app')
