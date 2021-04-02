<template>
  <div
    class="point horizontal-vertical"
    :class="`point-${ramen.color}`">
    <div class="selected horizontal-vertical" v-if="selected">
      <img src="../assets/images/ramens.png" alt="ramens">
    </div>
    <div class="info horizontal-vertical">
      <h3 class="sub-title" v-if="ramen.sub_title_top">
        {{ ramen.sub_title_top }}
      </h3>
      <h2 class="title" v-if="ramen.title">
        {{ ramen.title }}
      </h2>
      <h3 class="sub-title" v-if="ramen.sub_title_bottom">
        {{ ramen.sub_title_bottom }}
      </h3>
    </div>
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
<style scoped>
.point {
  color: rgb(255, 255, 255);
  margin: .2rem;
}

.horizontal-vertical {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.selected {
  width: 100px;
  height: 100px;
  padding: .3rem;
  position: absolute;
  border-radius: 50%;
  background-color: #2125296b;
}
.selected img {
  width: 100px;
  height: 100px;
}

.info {
  height: 100px;
  width: 100px;

  border: 2px solid;
  border-radius: 50%;
}

.point-pink .info {
  border-color: #666;
  background-color: #e58297c7;
}
.point-orange .info {
  border-color: #666;
  background-color: #EA924Ac7;
}
.point-red .info {
  border-color: #666;
  background-color: #C62B56c7;
}
.point-green .info {
  border-color: #666;
  background-color: #65B093c7;
}
.point-purple .info {
  border-color: #666;
  background-color: #7E7FBCc7;
}
.point-yellow .info {
  border-color: #666;
  background-color: #FFE21Ac7;
  color: #333;
}

.title {
  font-size: .9rem;
  cursor: pointer;
  font-weight: 700;
}
.sub-title {
  font-size: .6rem;
  cursor: pointer;
  font-weight: 500;
}
</style>
