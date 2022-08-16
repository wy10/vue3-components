// 用来整合组件，最终导出组件
import _Icon from './src/icon.vue'
import { withInstall} from "@wy/utils/with-install";

const Icon = withInstall(_Icon) // 在main.ts中调用app.use后，全局注册使用
export default Icon   //组件内部 import Icon from '@wy/components/components.icon' 使用

// 导出icon.ts中非default 给用户声明组件样式类型使用的 const iconStyle:IconProps = computed(()=>{})
export * from './src/icon'
// 这里给当前组件添加类型 可以在模板中解析WIcon组件的类型为SFCWithInstall
declare module 'vue' {
  export interface GlobalComponents { //我们的接口可以自动合并,把我们的类型和默认的全局类型做一个合并
    WIcon:typeof Icon
  }
}