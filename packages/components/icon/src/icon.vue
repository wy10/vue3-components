<template>
  <i :class="bem.b()" :style="style">
    <slot></slot>
  </i>
</template>
<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { createNamespace } from '@wy/utils/create'
import { IconProps,iconProps } from './icon';
const bem = createNamespace('icon')
// unplugin-vue-define-options可以为vue添加选项
defineOptions({
  name:'w-icon'
})
// 计算属性来计算一个样式处理,defneProps用来接收父组件传来的属性
const props:IconProps = defineProps(iconProps)

const style = computed(()=>{
  if(!props.size && !props.color) return {}
  return {
    ...(props.size?{'font-size':props.size+'px'}:{}),
    ...(props.color?{'color':props.color}:{})
  }
})
</script>
