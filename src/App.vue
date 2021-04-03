<template>
  <div>
    <div class="info-card px-4 py-2 m-1">
      <h1 class="mt-4 banner font-weight-bold">台湾ラーメン</h1>
      <h2 class="mb-3 sub-banner">
        <span>台灣拉麵愛好會 ★ 2020票選名店</span>
      </h2>
      <p class="text-right m-0">{{ ramenPoint }} / 101 ({{ progressbarPercent.toFixed(2) }} %)</p>
      <div class="progress mb-2">
        <div class="progress-bar" role="progressbar" :style="{ width: progressbarPercent + '%' }" aria-valuenow="progressbarPercent" aria-valuemin="0" aria-valuemax="101"></div>
      </div>
      <p>
        資料來源
        <a href="https://www.facebook.com/TWRamen/posts/4443878185639668" target="_blank">台灣拉麵愛好會</a>
      </p>
    </div>

    <div class="point-card" id="pointCard">
      <table class="mt-2 d-flex flex-column align-items-center">
        <tr v-for="(row, x) in ramens" :key="`row-${x}`">
          <td v-for="(ramen, y) in row" :key="`col-${y}`">
            <Point :ramen="ramen" :selected="selected[x][y]" @click="selectPoint(x, y)" />
          </td>
        </tr>
      </table>
    </div>
  
    <div class="share-card px-4 py-3 m-1">
      <button type="button" class="btn btn-outline-secondary btn-md btn-block px-4 font-weight-bold" @click="resetpoint">重設分數</button>
      <button type="button" class="btn btn-outline-secondary btn-md btn-block px-4 font-weight-bold" @click="rename">設定名字</button>
      <button type="button" class="btn btn-outline-secondary btn-md btn-block px-4 font-weight-bold" @click="saveImage">下載圖片</button>
      <button type="button" class="btn btn-primary btn-md btn-block px-4 font-weight-bold" @click="sharePage">FB 分享</button>
    </div>

    <div class="name-card" @click="rename">
      <h2 class="font-weight-bold">{{ username }}</h2>
    </div>

    <img class="ribbon" src="./assets/images/ribbon.png" title="為受難者及其家屬祈福" alt="為受難者及其家屬祈福">
  </div>
</template>

<script>
import Point from './components/Point.vue'
import ramens from './assets/data/ramens.json'
import * as htmlToImage from 'html-to-image'
// import { toPng } from 'html-to-image'
import download from 'downloadjs'

export default {
  name: 'App',
  components: {
    Point
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
      this.username = window.prompt("請輸入您想要顯示的名字：", this.username);
    },
    saveImage() {
      htmlToImage.toPng(document.getElementById('point-card'))
        .then(function (dataUrl) {
          console.log(dataUrl);
          download(dataUrl, 'ramen.png');
        })
        .catch(function (error) {
          console.error('oops, something went wrong!', error);
        })
    },
    sharePage() {
      const pageUrl = 'https://jd615645.github.io/ramen_point_card_2021/';
      const fbLink = 'https://www.facebook.com/sharer.php?u=' + pageUrl;
      window.open(fbLink, '_blank', 'height=400, width=600');
    }
  },
}
</script>

<style>
#app {
  font-family: Roboto, 黑體-繁, 微軟正黑體, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.ribbon {
  position: fixed;

  width: 40px;

  bottom: 15px;
  left: 15px;
}

.info-card {
  position: fixed;
  background-color: #ffffff9e;

  z-index: 200;

  border-radius: 1rem;

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
