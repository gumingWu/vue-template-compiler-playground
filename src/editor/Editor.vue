<script setup lang="ts">
import { toRefs } from 'vue'
import CodeMirror from '../codemirror/CodeMirror.vue'
import { useCodeStore } from '../store'
import { debounce } from '../utils'

interface Props {
  mode?: string
  readOnly?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  mode: 'htmlmixed',
  readOnly: false,
})

const codeStore = useCodeStore()
const { code } = toRefs(codeStore)

const handleChange = debounce((val: string) => {
  console.log(val)
  codeStore.changeCode(val)
}, 500)
</script>

<template>
  <div class="editor">
    <CodeMirror
      :value="code"
      :mode="props.mode"
      :read-only="props.readOnly"
      @change="handleChange"
    ></CodeMirror>
  </div>
</template>

<style scoped>
.editor {
  height: 100%;
}
</style>
