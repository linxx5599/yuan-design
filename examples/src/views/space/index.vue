<template>
  <y-space>
    <y-button v-for="btn in btns" :key="btn.title" :type="btn.type">
      {{ btn.title }} {{ btn.disabled ? "(disabled)" : "" }}
    </y-button>
  </y-space>
</template>
<script lang="ts" setup name="Button">
interface btnT {
  title: String;
  type: String;
  disabled?: Boolean;
  size?: String;
}
const btns: Array<btnT> = [
  { title: "Defalut", type: "defalut" },
  { title: "Defalut", type: "defalut", disabled: true },
  { title: "Primary", type: "primary" },
  { title: "Primary", type: "primary", disabled: true },
  { title: "Danger", type: "danger" },
  { title: "Danger", type: "danger", disabled: true },
  { title: "Dashed", type: "dashed" },
  { title: "Dashed", type: "dashed", disabled: true },
  { title: "Link", type: "link" },
  { title: "Link", type: "link", disabled: true }
];
</script>
