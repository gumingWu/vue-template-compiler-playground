<template>
  <div class="editor" ref="el"></div>
</template>

<script setup lang="ts">
import CodeMirror from './codemirror'
import type { Editor } from 'codemirror'
import { ref, onMounted, watch } from 'vue'
import { useCodeStore } from '../store'

interface Props {
  value?: string
  mode?: string
  side?: 'left' | 'right'
}

const props = withDefaults(defineProps<Props>(), {
  value: '',
  mode: 'htmlmixed',
  side: 'left',
})
const emit = defineEmits<(e: 'change', value: string) => void>()

const el = ref()

const codeStore = useCodeStore()

onMounted(() => {
  const editor: Editor = CodeMirror(el.value!, {
    value: '',
    mode: props.mode,
    readOnly: props.side === 'right',
    tabSize: 2,
    lineWrapping: true,
    lineNumbers: true,
    autoCloseBrackets: true,
    autoCloseTags: true,
    foldGutter: true,
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
  })

  editor.on('change', () => {
    emit('change', editor.getValue())
  })

  if (props.side === 'right') {
    watch(
      () => codeStore.code,
      () => {
        const compileToV2 = codeStore.compileToV2
        editor.setValue(compileToV2.render)
      }
    )
  }
})
</script>

<style>
.editor {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.CodeMirror {
  font-family: var(--font-code);
  line-height: 1.5;
  height: 100%;
}
</style>
