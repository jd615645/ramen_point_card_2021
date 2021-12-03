<template>
  <div>
    <div class="info-block m-3">
      <InfoCard :ramen-point="ramenPoint" :progressbar-percent="progressbarPercent" />
    </div>

    <div class="point-card container" id="pointCard">
      <div class="d-flex justify-content-center" v-for="(row, x) in ramens" :key="`row-${x}`">
        <Point v-for="(ramen, y) in row" :key="`col-${y}`" :ramen="ramen" :selected="selected[x][y]" @click="selectPoint(x, y)" />
      </div>
    </div>
  
    <div class="share-card px-4 py-3 m-3">
      <button type="button" class="btn btn-outline-secondary btn-md btn-block px-4 font-weight-bold" @click="resetpoint">重設分數</button>
      <button type="button" class="btn btn-outline-secondary btn-md btn-block px-4 font-weight-bold" @click="rename">設定名字</button>
      <button type="button" class="btn btn-outline-secondary btn-md btn-block px-4 font-weight-bold" @click="saveImage">下載圖片</button>
      <button type="button" class="btn btn-primary btn-md btn-block px-4 font-weight-bold" @click="sharePage">FB 分享</button>
    </div>

    <div class="name-card m-3" @click="rename">
      <h2 class="font-weight-bold">{{ username }}</h2>
    </div>
  </div>
</template>

<script>
import Point from './components/Point.vue';
import InfoCard from './components/InfoCard.vue';
import ramens from './assets/data/ramens.json';
import * as htmlToImage from 'html-to-image';

export default {
  name: 'App',
  components: {
    Point,
    InfoCard
  },
  computed: {
    progressbarPercent() {
      return this.ramenPoint / 101 * 100;
    }
  },
  data() {
    return {
      ramens: ramens,
      ramenPoint: 0,
      username: '',
      selected: Array(11).fill().map(()=>Array(10).fill(false))
    }
  },
  methods: {
    selectPoint(x, y) {
      if (this.selected[x][y]) {
        this.ramenPoint = this.ramenPoint - 1;
        this.selected[x][y] = false;
      }
      else {
        this.ramenPoint = this.ramenPoint + 1;
        this.selected[x][y] = true;
      }
    },
    resetpoint() {
      this.ramenPoint = 0;
      this.selected = Array(11).fill().map(()=>Array(10).fill(false));
    },
    rename() {
      this.username = window.prompt('請輸入您想要顯示的名字：', this.username);
    },
    saveImage() {
      htmlToImage
        .toJpeg(
          document.querySelector('#app'),
          {
            quality: 0.95,
            backgroundColor: '#F7ECD9',
          }
        )
        .then(function (dataUrl) {
          var link = document.createElement('a');
          link.download = '賓果.jpeg';
          link.href = dataUrl;
          link.click();
        });
    },
    sharePage() {
      const pageUrl = 'https://jd615645.github.io/ramen_point_card_2021/';
      const fbLink = 'https://www.facebook.com/sharer.php?u=' + pageUrl;
      window.open(fbLink, '_blank', 'height=400, width=600');
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: Roboto, 黑體-繁, 微軟正黑體, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.info-block {
  position: fixed;

  z-index: 200;

  top: 15px;
  left: 15px;
}
.name-card {
  position: fixed;

  cursor: crosshair;

  top: 15px;
  right: 15px;
}

.share-card {
  position: fixed;
  background-color: #ffffff9e;

  z-index: 200;

  bottom: 15px;
  right: 15px;

  border-radius: 1rem;
}
.sub-banner span {
  color: #ffffff;
  background-color: #333;
  padding: 1px 14px;
  font-size: 1.2rem;
}
</style>
