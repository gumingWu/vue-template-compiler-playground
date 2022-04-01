<script setup lang="ts">
import Github from './Github.vue'
</script>

<template>
  <nav>
    <h1>
      <img src="/logo.svg" alt="logo" />
      <span>Vue Template Compiler Playground</span>
    </h1>
    <div class="links">
      <button title="View on GitHub" class="github">
        <a
          href="https://github.com/gumingWu/vue-template-compiler-playground"
          target="_blank"
        >
          <Github />
        </a>
      </button>
    </div>
  </nav>
</template>

<style scoped>
nav {
  color: #ddd;
  height: var(--nav-height);
  box-sizing: border-box;
  background-color: #1a1a1a;
  padding: 0 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button {
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0;
  background-color: transparent;
}

h1 {
  margin: 0;
  line-height: var(--nav-height);
  font-weight: 500;
  font-size: 20px;
  display: inline-block;
  vertical-align: middle;
}

h1 img {
  height: 24px;
  vertical-align: middle;
  margin-right: 10px;
  position: relative;
  top: -2px;
}

.links {
  display: flex;
}
</style>
