<template>
  <div class="control-bar">
    <div
      v-for=" (item, index) in titles"
      :key="item"
      class="control-bar-item"
      :class="{active: current === index}"
      @click="cindex(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CBar",
  data() {
    return {
      titles: ["最新", "综合", "流行"],
      current: 0
    };
  },
  methods: {
    cindex(index) {
      this.current = index;
    }
  }
};
</script>

<style scoped>
.control-bar {
  border-bottom: 4px solid #eee;
  display: flex;
  text-align: center;
  height: 28px;
  line-height: 28px;
  font-size: 18px;
  padding: 5px;
  position: sticky;
  top: 44px;
  background-color: #ffffff;
}
.control-bar-item {
  flex: 1;
}
.active {
  color: deeppink;
}
.active span {
  padding: 2px;
  border-bottom: crimson solid 2px;
}
</style>