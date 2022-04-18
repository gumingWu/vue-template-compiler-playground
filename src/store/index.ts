import { createPinia, defineStore } from 'pinia'
import * as compilerV2 from 'vue-template-compiler'

export const useCodeStore = defineStore('codeStore', {
  state: () => ({
    code: '',
    compileToV2: {},
    compileToV3: '',
  }),
  actions: {
    changeCode(val: string) {
      this.code = val
      const compileToV2 = compilerV2.compile(val)
      this.compileToV2 = compileToV2
      console.log('这里是改变后的值', this.compileToV2)
    },
  },
})

export const welcomeCode = {
  v2: `<div>
  Hello World
</div>
  `,
  v3: `<script setup>
  import { ref } from 'vue'
  
  const msg = ref('Hello World!')
  </script>
  
  <template>
    <h1>{{ msg }}</h1>
    <input v-model="msg">
  </template>
  `,
}

export default createPinia()
