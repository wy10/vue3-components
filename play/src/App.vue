<template>
  <w-icon :color="iconStyle.color" :size="iconStyle.size" ><AddCircle style="width: 50px;"></AddCircle></w-icon>
  <w-editor v-model="state"></w-editor>
</template>

<script setup lang="ts">
import { AddCircle } from '@vicons/ionicons5'
import { IconProps } from '@wy/components/icon'
import { computed,provide,ref } from 'vue'
import data from './data.json'
import { registerConfig } from "./editor-config";
const iconStyle:IconProps = computed(()=>{
  return {
    color:'green',
    size:'20'
  }
})
const state = ref(data)
provide('config',registerConfig)
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
