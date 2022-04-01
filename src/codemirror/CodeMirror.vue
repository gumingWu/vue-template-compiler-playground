<template>
  <div class="editor" ref="el"></div>
</template>

<script setup lang="ts">
import CodeMirror from './codemirror'
import { ref, onMounted } from 'vue'

const emit = defineEmits<(e: 'change', value: string) => void>()

const el = ref()

onMounted(() => {
  const editor = CodeMirror(el.value!, {
    value: '',
    mode: 'htmlmixed',
    readonly: false,
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
