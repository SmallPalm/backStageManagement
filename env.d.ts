/// <reference types="vite/client" />

// TS: 识别import的Vue文件类型
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<any>
  export default component
}
