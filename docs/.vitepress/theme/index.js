import DefaultTheme from 'vitepress/theme'
import WIcon from '@wy/components/icon'
import '@wy/theme/src/index.scss'
export default {
  ...DefaultTheme,
  enhanceApp({app}){  //在vitePress中 注册全局组件
    app.use(WIcon)
  }
}