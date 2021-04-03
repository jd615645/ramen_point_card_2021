<template>
  <div class="container-fluid">
    <div class="info-card px-4 py-2 m-1">
      <h1 class="mt-4 banner font-weight-bold">台湾ラーメン</h1>
      <h2 class="mb-3 sub-banner">
        <span>台灣拉麵愛好會 2020票選名店</span>
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
    <table class="mt-2 d-flex flex-column align-items-center">
      <tr v-for="(row, x) in ramens" :key="`row-${x}`">
        <td v-for="(ramen, y) in row" :key="`col-${y}`">
          <Point :ramen="ramen" :selected="selected[x][y]" @click="selectPoint(x, y)" />
        </td>
      </tr>
    </table>
    <div class="share-card px-4 py-4 m-1">
      <button type="button" class="btn btn-primary btn-md btn-block">設定名字</button>
      <button type="button" class="btn btn-primary btn-md btn-block">下載圖片</button>
      <button type="button" class="btn btn-primary btn-md btn-block">FB 分享</button>
    </div>
    <img class="ribbon" src="./assets/images/ribbon.png" title="為受難者及其家屬祈福" alt="為受難者及其家屬祈福">
  </div>
</template>

<script>
import Point from './components/Point.vue'
import ramens from './assets/data/ramens.json'

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
.info-card {
  position: fixed;
  background-color: #ffffff9e;

  border-radius: 1rem;
}
.ribbon {
  position: fixed;

  width: 40px;

  bottom: 15px;
  left: 15px;
}
.share-card {
  position: fixed;
  background-color: #ffffff9e;

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
