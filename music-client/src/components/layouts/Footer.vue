<template>
  <div class="yin-footer">
    <p v-for="(item, index) in footerList" :key="index">
      {{ item }}
    </p>
  </div>
</template>

<script lang="ts">
import {defineComponent, readonly} from "vue";

export default defineComponent({
  setup() {
    const footerList = readonly([
      "2023 JavaEE 课程设计",
      "@Bupt - 软件工程 2021级"
    ]);
    return {footerList};
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/css/var.scss";
@import "@/assets/css/global.scss";

.yin-footer {
  width: 100%;
  height: $footer-height;
  padding: 20px 0;
  box-sizing: border-box;
  font-size: 14px;
  @include layout(center, center, column);
}

p {
  height: 30px;
}
</style>
