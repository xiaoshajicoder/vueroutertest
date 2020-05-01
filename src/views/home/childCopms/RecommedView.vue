<template>
  <div class="rv">
    <div class="rv-r">
      <img src="~assets/img/swp/1.jpg" alt />
      <span>青春</span>
    </div>
    <div class="rv-r">
      <img src="~assets/img/swp/2.jpg" alt />
      <span>永远</span>
    </div>
    <div class="rv-r">
      <img src="~assets/img/swp/3.jpg" alt />
      <span>存在</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommedViews"
};
</script>

<style scoped>
.rv {
  display: flex;
  border-bottom: 4px solid #eee;
}
.rv img {
  border-radius: 50%;
  flex: 1;
  height: 90px;
  width: 90px;
  margin: 0;
  padding: 0;
}
.rv-r {
  padding: 10px 10px;
  text-align: center;
}
</style>