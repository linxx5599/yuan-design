<template>
  <y-input placeholder="placeholder" suffix="suffix">
    <template #prefix>prefix</template>
  </y-input>
  <y-input v-model:value="value" placeholder="Basic usage" />
</template>
<script lang="ts" setup name="Input">
import { ref } from "vue";
const value = ref<string>("");
</script>
