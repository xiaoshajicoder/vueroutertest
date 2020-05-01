<template>
  <Swiper>
    <Slide>
      <img src="~assets/img/swp/1.jpg" alt />
    </Slide>
    <Slide>
      <img src="~assets/img/swp/2.jpg" alt />
    </Slide>
    <Slide>
      <img src="~assets/img/swp/3.jpg" alt />
    </Slide>
  </Swiper>
</template>

<script>
import { Swiper, Slide } from "components/common/swiper/index.js";

export default {
  components: {
    Swiper,
    Slide
  }
};
</script>

<style>
img {
  width: 375px;
  height: 200px;
}
</style>