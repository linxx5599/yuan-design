<template>
  <y-input v-model:value="value" placeholder="Basic usage" />
  <y-input disabled placeholder="disabled" />
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const value = ref<string>("");
    return {
      value
    };
  }
});
</script>
