// 这里准备组件相关的属性和ts的类型
import { ExtractPropTypes,PropType } from "vue"
export const iconProps ={
  color:String,
  size:[Number,String] as PropType<number|string>
} as const

// TODO:我不知道这句话是干啥的，好像没有这句话也可以
type iconProps = ExtractPropTypes<typeof iconProps>

