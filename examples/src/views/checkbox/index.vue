<template>
  <y-checkbox v-model:checked="checked">
    123
  </y-checkbox>
</template>
<script lang="ts" setup name="Checkbox">
import { ref } from "vue";
const checked = ref<Boolean>(true);
</script>
