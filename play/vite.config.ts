import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 添加这个包之后，就可以有提示了
import DefineOptions from 'unplugin-vue-define-options/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),DefineOptions()]
})
