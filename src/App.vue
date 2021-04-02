<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-4">
        <h1 class="mt-4">台湾ラーメン</h1>
        <h2 class="mb-3">台灣拉麵愛好會 2020票選名店</h2>
        <h3 class="point">{{ ramenPoint }} / 101</h3>
        <p>
          資料來源
          <a href="https://www.facebook.com/TWRamen/posts/4443878185639668" target="_blank">台灣拉麵愛好會</a>
        </p>
      </div>
      <table class="col-8 mt-2 d-flex flex-column align-items-center">
        <tr v-for="(row, x) in ramens" :key="`row-${x}`">
          <td v-for="(ramen, y) in row" :key="`col-${y}`">
            <Point :ramen="ramen" :selected="selected[x][y]" @click="selectPoint(x, y)" />
          </td>
        </tr>
      </table>
    </div>
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
</style>
