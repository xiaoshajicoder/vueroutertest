<template>
  <div class="tab-bar-item" @click="show()">
    <div v-if="!isShow">
      <slot name="imga">img1</slot>
    </div>
    <div v-else>
      <slot name="imgb">img2</slot>
    </div>
    <div :class="{active : isShow}">
      <slot name="imgc">text</slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      sshow: false
    };
  },
  computed: {
    isShow() {
      if (this.$route.path === this.path) {
        this.sshow = true;
      } else {
        this.sshow = false;
      }
      return this.sshow;
    }
  },
  methods: {
    show() {
      if (this.$route.path === this.path) {
      } else {
        this.$router.push(this.path);
      }
    }
  }
};
</script>

<style>
@import "~assets/css/normalize.css";
.tab-bar-item {
  height: 49px;
  text-align: center;
  font-size: 13px;
}
.active {
  color: deeppink;
}
</style>