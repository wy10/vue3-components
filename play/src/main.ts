import { createApp } from 'vue'
import App from './App.vue'
import Icon from '@wy/components/icon'
import Editor from '@wy/components/drag'
import "@wy/theme/src/index.scss";
import "element-plus/theme-chalk/index.css";
const app = createApp(App)
const plugins = [
  Icon,
  Editor
]
plugins.forEach(plugin=>app.use(plugin))

app.mount('#app')
