import _editor from './src/editor.vue'
import { withInstall } from '@wy/utils/with-install'

const editor = withInstall(_editor)

export default editor
export * from './src/editor'

declare module 'vue' {
  export interface GlobalComponents {
    WEditor:typeof editor
  }
}