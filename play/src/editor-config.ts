import { ElButton, ElInput } from "element-plus";
import { h } from 'vue'
import { componentType } from '@wy/components/drag'
function createEditorConfig() {
  const componentList:componentType[] = []
  const componentMap:{[key:string]:componentType} = {}
  return {
    componentList,
    componentMap,
    register:(component:componentType)=>{
      componentList.push(component)
      componentMap[component.key] = component
    }
  }
}

export const registerConfig = createEditorConfig()

registerConfig.register({
  label:'文本符号',
  preview:() => h('div',"预览文本"),
  render:() => h('div','渲染文本'),
  key: 'text'
})

registerConfig.register({
  label:'按钮',
  preview: () => h(ElButton,{ type:'primary'},'渲染按钮'),
  render:() => h(ElButton,null,'渲染按钮'),
  key: 'button'
})

registerConfig.register({
  label:'输入框',
  preview:() => h(ElInput,{placeholder:'预览输入框'},'预览按钮'),
  render:() => h(ElButton,{placeholder:'渲染输入框'},'渲染按钮'),
  key: 'input'
})