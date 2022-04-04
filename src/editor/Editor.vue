<script setup lang="ts">
import { toRefs, ref } from 'vue'
import CodeMirror from '../codemirror/CodeMirror.vue'
import { useCodeStore } from '../store'
import { debounce } from '../utils'

interface Props {
  side?: 'left' | 'right'
  mode?: string
}

const props = withDefaults(defineProps<Props>(), {
  side: 'left',
  mode: 'htmlmixed',
})

// 左边编辑器可以编辑，右边不能编辑
const readOnly = ref(props.side === 'left' ? false : true)

const codeStore = useCodeStore()
const { code } = toRefs(codeStore)

const handleChange = debounce((val: string) => {
  // console.log(val)
  codeStore.changeCode(val)
}, 500)
</script>

<template>
  <div class="editor">
    <CodeMirror
      :value="code"
      :mode="props.mode"
      :read-only="readOnly"
      @change="handleChange"
    ></CodeMirror>
  </div>
</template>

<style scoped>
.editor {
  height: 100%;
}
</style>
