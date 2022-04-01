<script setup lang="ts">
import { computed } from 'vue'

const boundSplit = computed(() => {
  return 50
})
</script>

<template>
  <div class="split-pane" ref="container">
    <div class="left" :style="{ width: boundSplit + '%' }">
      <slot name="left">left</slot>
    </div>
    <div class="right" :style="{ width: 100 - boundSplit + '%' }">
      <slot name="right">right</slot>
    </div>
  </div>
</template>

<style scoped>
.split-pane {
  display: flex;
  height: 100%;
}

.left,
.right {
  position: relative;
  height: 100%;
}

.left {
  border-right: 1px solid var(--border);
}
</style>
