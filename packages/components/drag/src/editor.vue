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
      <div class="editor-container-canvas" ref="containerRef">
        <div class="editor-container-canvas__content" >
          <EditorBlock  v-for="(item, index) in data.blocks" v-model="data.blocks[index]" :key="index"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed,inject,ref } from 'vue'
import deepcopy from 'deepcopy' 
import { stateProps, componentType } from './editor'
import EditorBlock from "./editor-block.vue";
defineOptions({
  name:'w-editor'
})
const config:any = inject("config");
const props = defineProps<{modelValue:stateProps}>()
const containerRef = ref()
let currentComponent:componentType = {
  label:'',
  preview:()=>{},
  render:()=>{},
  key:''
}
const emit = defineEmits<{
  (e: 'update:modelValue', data: stateProps): void
}>()
let data = computed({
  get:() => props.modelValue,
  set:(newValue:stateProps) => {
    emit('update:modelValue',deepcopy(newValue))
  }
})
const dragstart = (component:componentType) =>{
  containerRef.value.addEventListener("dragenter", dragenter);
  containerRef.value.addEventListener("dragover", dragover);
  containerRef.value.addEventListener("dragleave", dragleave);
  containerRef.value.addEventListener("drop", drop);
  currentComponent = component
}
const dragenter = () =>{
 console.log("xx")
}
// 阻止浏览器发生默认行为
const dragover = (e:Event) =>{
  e.preventDefault()
}
const dragleave = () =>{
 console.log("xx")
}
const dragend = () =>{
  containerRef.value.removeEventListener("dragenter", dragenter);
  containerRef.value.removeEventListener("dragover", dragover);
  containerRef.value.removeEventListener("dragleave", dragleave);
  containerRef.value.removeEventListener("drop", drop);
}
const drop = (e:MouseEvent) =>{
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
        alignCenter:true,
        key:currentComponent.key
      }
    ]
  }
}
</script>