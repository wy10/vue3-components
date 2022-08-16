// 这里准备组件相关的属性和ts的类型
import { ExtractPropTypes,PropType } from "vue"
export const iconProps ={
  color:String,
  size:[Number,String] as PropType<number|string>
} as const

// 抽离对象类型 从iconProps中推断出该有的类型
export type IconProps = ExtractPropTypes<typeof iconProps>
