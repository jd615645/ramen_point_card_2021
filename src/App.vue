<template>
  <div class="container-fluid">
    <h1>台湾ラーメン</h1>
    <h2>台灣拉麵愛好會 2020票選名店</h2>
    <table class="d-flex flex-column align-items-center">
      <tr v-for="(row, key) in ramens" :key="`col-${key}`">
        <td v-for="ramen in row" :key="ramen">
          <Point :ramen="ramen" />
        </td>
      </tr>
    </table>
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
    }
  },
  methods: {
    
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
