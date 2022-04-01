<script setup lang="ts">
import Header from './Header/Header.vue'
import SplitPane from './SplitPane/SplitPane.vue'
import Editor from './editor/Editor.vue'
// import { compile } from 'vue-template-compiler'
// import { compile as compileV3 } from '@vue/compiler-dom'

// const text = `
//   <div>hi</div>
// `

// const compiler = compile(text)

// const v3 = compileV3(text)

const setVH = () => {
  document.documentElement.style.setProperty('--vh', window.innerHeight + `px`)
}
window.addEventListener('resize', setVH)
setVH()
</script>

<template>
  <div class="compiler-playground">
    <Header />
    <split-pane>
      <template #left> <Editor /> </template>
    </split-pane>
  </div>
  <!-- text: {{ text }}
  <br />
  compiler: {{ compiler }}
  <br />
  v3: {{ v3 }} -->
</template>

<style>
.compiler-playground {
  --bg-soft: #f8f8f8;
  --border: #ddd;
  --nav-height: 50px;

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: var(--bg-soft);
  height: calc(var(--vh) - var(--nav-height));
}
</style>
