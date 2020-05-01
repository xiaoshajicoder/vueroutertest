<template>
  <div class="wrapper">
    <div class="content">
      <img src="~assets/img/swp/1.jpg" alt />

      <img src="~assets/img/swp/2.jpg" alt />

      <img src="~assets/img/swp/3.jpg" alt />

      <img src="~assets/img/swp/3.jpg" alt />

      <img src="~assets/img/swp/3.jpg" alt />

      <img src="~assets/img/swp/3.jpg" alt />

      <img src="~assets/img/swp/3.jpg" alt />

      <img src="~assets/img/swp/3.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />
      <img src="~assets/img/swp/2.jpg" alt />

      <img src="~assets/img/swp/3.jpg" alt />
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";

export default {
  name: "BScroll",
  mounted() {
    let scroll = new BScroll(".wrapper", {
      scrollY: true,
      click: true
    });
  }
};
</script>

<style scoped>
img {
  width: 48%;

  margin: 2px;
  border-radius: 5px;
  flex: 1;
}
.content {
  margin: 2px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  /*均等分布*/
}
.wrapper {
  height: 100px;
}
</style>