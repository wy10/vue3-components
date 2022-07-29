// 用来整合组件，最终导出组件
import _Icon from './src/icon.vue'
import { withInstall} from "@wy/utils/with-install";

const Icon = withInstall(_Icon)
export default Icon

export * from './src/icon'

// 这里添加的类型 可以在模板中被解析
declare module 'vue' {
  export interface GlobalComponents { //我们的接口可以自动合并
    WIcon:typeof Icon
  }
}