<script setup lang="ts">
import CodeMirror from '../codemirror/CodeMirror.vue'
</script>

<template>
  <div class="preview">
    <CodeMirror side="right" mode="javascript"></CodeMirror>
  </div>
</template>

<style scoped>
.preview {
  height: 100%;
}
</style>
