<template>
  <div class="common-btn-box">
    <y-button
      v-for="btn in btns"
      :key="btn.title"
      :type="btn.type"
      :disabled="btn.disabled"
      :size="btn.size"
      @click="click(btn)"
    >
      {{ btn.title }} {{ btn.disabled ? '(disabled)' : '' }}
    </y-button>
  </div>
</template>
<script lang="ts" setup>
interface btnT {
  title: String;
  type: String;
  disabled?: Boolean;
  size?: String
}
const btns: Array<btnT> = [
  { title: "Defalut", type: "defalut", size:"large" },
  { title: "Defalut", type: "defalut", disabled: true, size:"large" },
  { title: "Primary", type: "primary" },
  { title: "Primary", type: "primary", disabled: true },
  { title: "Danger", type: "danger" },
  { title: "Danger", type: "danger", disabled: true },
  { title: "Dashed", type: "dashed" },
  { title: "Dashed", type: "dashed", disabled: true },
  { title: "Link", type: "link", size:"small" },
  { title: "Link", type: "link", disabled: true, size:"small" }
];
const click = (btn: btnT) => {
  console.log(btn);
};
</script>

<style lang="less" scoped>
.common-btn-box {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
