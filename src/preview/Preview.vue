<script setup lang="ts">
import { toRefs, computed } from 'vue'
import Editor from '../editor/Editor.vue'
import { useCodeStore } from '../store'

const codeStore = useCodeStore()
const { compileToV2 } = toRefs(codeStore)
const v2String = computed<string>(() => {
  return compileToV2.toString()
})
</script>

<template>
  <div class="preview">
    <Editor :value="v2String" mode="javascript" side="right"></Editor>
  </div>
</template>

<style scoped>
.preview {
  height: 100%;
}
</style>
