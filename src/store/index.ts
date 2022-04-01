import { createPinia, defineStore } from 'pinia'

export const useCodeStore = defineStore('codeStore', {
  state: () => ({
    code: '',
    compilToV2: '',
    compilToV3: '',
  }),
  actions: {
    changeCode(val: string) {
      this.code = val
    },
  },
})

export default createPinia()
