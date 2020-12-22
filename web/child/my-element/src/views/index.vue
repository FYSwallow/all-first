<template>
  <div class="main-entry-container">
    <ul class="components-list">
      <li
        v-for="(item, index) in componentslist"
        class="components-item"
        :key="index"
        :style="{ color: item.color, backgroundColor: item.backgroundColor }"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { routes } from "../router/index";
export default {
  data() {
    return {};
  },

  components: {},

  computed: {
    componentslist: function() {
      return routes.filter(item => {
        return item.meta && item.meta.category === "component";
      }).map((item) => {
          item.color = this.randomColor()
          item.backgroundColor = this.randomColor()
        
            return item
      });
    }
  },
  methods: {
    /*随机颜色rgb*/
        randomColor: function(){
            var r=Math.floor(Math.random()*256);
            var g=Math.floor(Math.random()*256);
            var b=Math.floor(Math.random()*256);
            return "rgb("+r+','+g+','+b+")";
        }
  }
};
</script>
<style lang='scss' scoped>
@mixin wh($width, $height) {
  width: $width;
  height: $height;
}

// 可选参数必须放最后
@mixin pos($top, $left, $category: absolute) {
  position: $category;
  top: $top;
  left: $left;
}
.main-entry-container {
  @include pos(0, 0, "fixed");
  @include wh(100vw, 100vh);
  padding: 10%;
  z-index: -1;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  .components-list {
    $colors: #7ef9ff, #89cff0, #4682b4, #0f52ba, #000080;
    clear: both;
    .components-item {
        position: relative;
        float: left;
        min-width: 50px;
        padding: 10px;
        border-radius: 50%;
        cursor: pointer;
        &::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: inherit;
            border-radius: inherit;
            z-index: -1;
            transition: all 0.28s ease-out;

            &:hover {
                transform: scale(2.5);
            }
         }
    }
  }
}
</style>
