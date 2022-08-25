<template>
  <div class="editor">
    <div class="editor-left" id="div">
      <div
        v-for="(component,index) in config.componentList" 
        :key="index"   
        class="editor-left-item"
        draggable="true"
        @dragstart="dragstart(component)"
        @dragend="dragend"
      >
        <span>{{component.label}}</span>
        <component :is="component.preview()"/>
      </div>
    </div>
    <div class="editor-top"></div>
    <div class="editor-right"></div>
    <div class="editor-container">
      <div class="editor-container-canvas" ref="containerRef" @mousedown="clearOtherFocus">
        <div class="editor-container-canvas__content" >
          <EditorBlock  
            :class="item.focus ? 'editor-block-focus':''"
            v-for="(item, index) in data.blocks" 
            v-model="data.blocks[index]" 
            :key="index"
            @mousedown="blockMousedown($event, item, index)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed,inject,ref } from 'vue'
import deepcopy from 'deepcopy' 
import { stateProps, componentType, blockType } from './editor'
import EditorBlock from "./editor-block.vue";
defineOptions({
  name:'w-editor'
})
const config:any = inject("config");
const props = defineProps<{modelValue:stateProps}>()
const containerRef = ref()
let data = computed({
  get:() => props.modelValue,
  set:(newValue:stateProps) => {
    emit('update:modelValue',deepcopy(newValue))
  }
})
const focusData = computed(()=>{
  const focus:blockType[]= []
  const unFocus:blockType[] = []
  data.value.blocks.forEach(block=>{
    if(block.focus) {
      focus.push(block)
    }else {
      unFocus.push(block)
    }
  })
  return {
    focus,
    unFocus
  }
})
let currentComponent:componentType = {
  label:'',
  preview:()=>{},
  render:()=>{},
  key:''
}
const emit = defineEmits<{
  (e: 'update:modelValue', data: stateProps): void
}>()

const dragstart = (component:componentType) =>{
  // containerRef.value.addEventListener("dragenter", dragenter);
  containerRef.value.addEventListener("dragover", dragover);
  containerRef.value.addEventListener("dragleave", dragleave);
  containerRef.value.addEventListener("drop", drop);
  currentComponent = component
}
// const dragenter = (e:DragEvent) =>{}
// 阻止浏览器发生默认行为
const dragover = (e:DragEvent) =>{
  e.preventDefault() // 没有这句的话，下面的行为不会发生
  e.dataTransfer!.dropEffect = "move";
}
const dragleave = (e:DragEvent) =>{
  e.dataTransfer!.dropEffect = "none";
}
const dragend = () =>{
  // containerRef.value.removeEventListener("dragenter", dragenter);
  containerRef.value.removeEventListener("dragover", dragover);
  containerRef.value.removeEventListener("dragleave", dragleave);
  containerRef.value.removeEventListener("drop", drop);
  currentComponent = {
    label:'',
    preview:()=>{},
    render:()=>{},
    key:''
  }
}
const drop = (e:DragEvent) =>{
  data.value = {
    ...data.value,
    blocks:[
      ...data.value.blocks,
      {
        top: e.offsetY,
        left: e.offsetX,
        width:0,
        height:0,
        zIndex:1,
        focus:false,
        alignCenter:true,
        key:currentComponent.key
      }
    ]
  }
}
const clearOtherFocus = () =>{
  data.value.blocks.forEach((block) => (block.focus = false));
}
const blockMousedown = (e:MouseEvent,block:blockType,index:number) => {
  e.preventDefault()
  e.stopPropagation()
  if(e.shiftKey) {
    if(focusData.value.focus.length <= 1) {
      block.focus = true
    }else {
      block.focus = !block.focus
    }
  }else {
    if(!block.focus) {
      clearOtherFocus()
      block.focus = !block.focus
    }
   
  }
  
}
</script>