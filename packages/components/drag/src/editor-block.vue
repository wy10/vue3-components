<template>
    <div class="editor-block" :style="blockStyles" ref="blockRef">
      <component :is="componentRender.preview()"/>
    </div>
</template>
<script setup lang="ts">
import { computed,ref,onMounted,inject } from 'vue'
import deepcopy from 'deepcopy';
import { blockType } from './editor'
const emit = defineEmits<{
  (e:'update:modelValue', data:blockType):void
}>()
const props = defineProps<{modelValue:blockType}>()
const blockRef = ref()
const config:any = inject("config");
const data = computed({
  get:() => {
    return props.modelValue
    },
    set: (newValue:blockType) => {
      emit('update:modelValue',deepcopy(newValue))
    }
  })
const componentRender = config.componentMap[data.value.key]
console.log(componentRender)
const blockStyles = computed(()=>{
  return {
    left:`${data.value.left}px`,
    top: `${data.value.top}px`,
    zIndex: data.value.zIndex,
  }
})
onMounted(() => {
    // 等到组件挂载后获取组件的宽高，这里出现了一个bug,就是必须要初始化开始的数据，否则拿到的offesetWidth = 0
    const { offsetWidth,offsetHeight } = blockRef.value
    if(data.value.alignCenter) {
      data.value = {
        ...data.value,
        width:offsetWidth,
        height:offsetHeight,
        top:data.value.top - offsetHeight / 2,
        left:data.value.left - offsetWidth / 2,
        alignCenter:false
      }
    }
})
</script>