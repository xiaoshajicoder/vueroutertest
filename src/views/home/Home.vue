<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center" class="text-nav">购物街</div>
    </nav-bar>
    <home-swiper></home-swiper>
    <recommed-views></recommed-views>
    <c-bar></c-bar>
    <b-scroll></b-scroll>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import HomeSwiper from "./childCopms/HomeSwiper";
import RecommedViews from "./childCopms/RecommedView";
import BScroll from "./childCopms/BScroll";

import CBar from "components/content/control/CBar";
export default {
  components: {
    NavBar,
    HomeSwiper,
    RecommedViews,
    BScroll,
    CBar
  }
};
</script>

<style>
.home-nav {
  background-color: rgba(235, 14, 143, 1);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
#home {
  padding-top: 44px;
}
.text-nav {
  font-size: 21px;
  color: #ffffff;
  font-weight: 400;
}
</style>