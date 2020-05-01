<template>
  <div>
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item class="w" path="/home">
        <img slot="imga" class="img-size" src="~assets/img/bar/hometar1.jpg" />
        <img slot="imgb" class="img-size" src="~assets/img/bar/home2.jpg" />
        <span slot="imgc">首页</span>
      </tab-bar-item>
      <tab-bar-item class="w" path="/categroy">
        <img slot="imga" class="img-size" src="~assets/img/bar/carttar1.jpg" />
        <img slot="imgb" class="img-size" src="~assets/img/bar/carttar2.jpg" />
        <span slot="imgc">分类</span>
      </tab-bar-item>
      <tab-bar-item class="w" path="/cart">
        <img slot="imga" class="img-size" src="~assets/img/bar/categroybar1.jpg" />
        <img slot="imgb" class="img-size" src="~assets/img/bar/categorybar2.png" />

        <span slot="imgc">购物车</span>
      </tab-bar-item>
      <tab-bar-item class="w" path="/profile">
        <img slot="imga" class="img-size" src="~assets/img/bar/profiletar1.jpg" />
        <img slot="imgb" class="img-size" src="~assets/img/bar/profiletar2.jpg" />
        <span slot="imgc">我的</span>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar.vue";
import TabBarItem from "components/common/tabbar/TabBarItem.vue";
export default {
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style scoped>
@import "~assets/css/normalize.css";
.img-size {
  height: 24px;
  width: 28px;
  margin: 0;
  padding: 0;
  vertical-align: 0;
  margin-top: 3px;
}
.w {
  flex: 1;
  margin: 0;
  padding: 0;
}
</style>