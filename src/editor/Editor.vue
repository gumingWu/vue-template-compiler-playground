<script setup lang="ts">
import { toRefs } from 'vue'
import CodeMirror from '../codemirror/CodeMirror.vue'
import { useCodeStore } from '../store'
import { debounce } from '../utils'

const codeStore = useCodeStore()
const { code } = toRefs(codeStore)

const handleChange = debounce((val: string) => {
  codeStore.changeCode(val)
})
</script>

<template>
  <div class="editor">
    <CodeMirror
      :value="code"
      side="left"
      mode="htmlmixed"
      @change="handleChange"
    ></CodeMirror>
  </div>
</template>

<style scoped>
.editor {
  height: 100%;
}
</style>
