<template>
  <div class="point horizontal-vertical" :color="ramen.color">
    <div class="selected horizontal-vertical" v-if="selected">
      <img src="../assets/images/ramens.png" alt="ramens">
    </div>
    <div class="info horizontal-vertical">
      <h3 class="sub-title my-1" v-if="ramen.sub_title_top">
        {{ ramen.sub_title_top }}
      </h3>
      <h2 class="title m-0" v-if="ramen.title">
        {{ ramen.title }}
      </h2>
      <h3 class="sub-title my-1" v-if="ramen.sub_title_bottom">
        {{ ramen.sub_title_bottom }}
      </h3>
    </div>
    <div class="point-border"></div>
    <div class="point-background"></div>
  </div>
</template>

<script>
export default {
  name: 'Point',
  props: {
    selected: Boolean,
    ramen: Object,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@mixin size($width, $height){
  width: $width ;
  height: $height ;
}

.horizontal-vertical {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.selected {
  @include size(90px, 90px);

  padding: .3rem;
  z-index: 100;

  position: absolute;
  border-radius: 50%;

  background-color: #2125296b;
}
.selected img {
  @include size(90px, 90px);
}

.point-background {
  @include size(95px, 95px);

  z-index: 10;

  position: absolute;
  border-radius: 50%;
}

.info {
  @include size(90px, 90px);

  z-index: 50;

  border-radius: 50%;
}

.point {
  color: #ffffff;
  margin: .2rem;
  .point-border {
    transition: border-radius .3s ease-in-out;
  }
  &:hover .point-border {
    border-radius: 40% 50%;
  }
}

[color="pink"] {
  .point-border {
    border-color: #7C197B;
  }
  .point-background {
    background-color: #e58297c7;
  }
}
[color="orange"] {
  .point-border {
    border-color: #985C2D;
  }
  .point-background {
    background-color: #EA924Ac7;
  }
}
[color="red"] {
  .point-border {
    border-color: #E58297;
  }
  .point-background {
    background-color: #C62B56c7;
  }
}
[color="green"] {
  .point-border {
    border-color: #3F7257;
  }
  .point-background {
    background-color: #65B093c7;
  }
}
[color="purple"] {
  .point-border {
    border-color: #403B94;
  }
  .point-background {
    background-color: #7E7FBCc7;
  }
}
[color="yellow"] {
  .point-border {
    border-color: #D3C363;
  }
  .point-background {
    background-color: #FFE21Ac7;
    color: #333;
  }
  .info {
    color: #333;
  }
}

.point-border {
  @include size(90px, 90px);

  z-index: 20;

  border: 2px solid;
  border-radius: 50% 40%;
  position: absolute;
}

.title {
  font-size: .9rem;
  font-weight: 1000;
  cursor: pointer;
}
.sub-title {
  font-size: .6rem;
  font-weight: 700;
  cursor: pointer;
}
</style>
