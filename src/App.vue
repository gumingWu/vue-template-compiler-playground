<template>
  text: {{ text }}
  <br />
  compiler: {{ compiler }}
  <br />
  v3: {{ v3 }}
</template>

<script setup lang="ts">
import { compile } from "vue-template-compiler";
import { compile as compileV3 } from "@vue/compiler-dom";

const text = `
  <div>hi</div>
`;

const compiler = compile(text);

const v3 = compileV3(text);
</script>
