<template>
  <div
    class="point horizontal-vertical"
    :color="color">
    <div class="selected horizontal-vertical" v-if="selected">
      <img src="../assets/images/ramens.png" alt="ramens">
    </div>
    <div class="info horizontal-vertical">
      <h3 class="sub-title my-1" v-if="subTitleTop">
        {{ subTitleTop }}
      </h3>
      <h2 class="title m-0" v-if="title">
        {{ title }}
      </h2>
      <h3 class="sub-title my-1" v-if="subTitleBottom">
        {{ subTitleBottom }}
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
    selected: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: true,
      default: ''
    },
    subTitleTop: {
      type: String,
      default: ''
    },
    subTitleBottom: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'pink',
      validator: function (value) {
        return ['pink', 'orange', 'red', 'green', 'purple', 'yellow'].indexOf(value) !== -1;
      },
    },
  },
}
</script>

<style scoped>

.horizontal-vertical {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.selected {
  width: 90px;
  height: 90px;

  padding: .3rem;
  z-index: 100;

  position: absolute;
  border-radius: 50%;

  background-color: #2125296b;
}

.selected img {
  width: 90px;
  height: 90px;
}

.point-background {
  width: 95px;
  height: 95px;

  z-index: 10;

  position: absolute;
  border-radius: 50%;
}

.info {
  width: 90px;
  height: 90px;

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

[color="pink"] .point-border {
    border-color: #7C197B;
  }
[color="pink"] .point-background {
  background-color: #e58297c7;
}

[color="orange"] .point-border {
  border-color: #985C2D;
}
[color="orange"] .point-background {
  background-color: #EA924Ac7;
}

[color="red"] .point-border {
  border-color: #E58297;
}
[color="red"] .point-background {
  background-color: #C62B56c7;
}

[color="green"] .point-border {
  border-color: #3F7257;
}
[color="green"] .point-background {
  background-color: #65B093c7;
}

[color="purple"] .point-border {
  border-color: #403B94;
}
[color="purple"] .point-background {
  background-color: #7E7FBCc7;
}

[color="yellow"] .point-border {
  border-color: #D3C363;
}
[color="yellow"] .point-background {
  background-color: #FFE21Ac7;
  color: #333;
}
[color="yellow"] .info {
  color: #333;
}

.point-border {
  width: 90px;
  height: 90px;

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
