<template>
  <div class="components-input-demo-presuffix">
    <y-input v-model:value="userName" placeholder="Basic usage">
      <template #prefix> prefix </template>
      <template #suffix> suffix </template>
    </y-input>
    <br />
    <br />
    <y-input disabled prefix="￥" suffix="RMB" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const userName = ref<string>("");
    return {
      userName
    };
  }
});
</script>
