<template>
  <div class="tab-bar">
    <slot />
  </div>
</template>

<script>
export default {
  name: "TabBar"
};
</script>

<style scoped>
@import "~assets/css/normalize.css";
.tab-bar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.2);
}
</style>