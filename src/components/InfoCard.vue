<template>
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
</template>

<script>
export default {
  name: 'InfoCard',
  props: {
    ramenPoint: Number,
    progressbarPercent: Number,
  },
}
</script>

<style lang="scss">
.info-card {
  background-color: #ffffff9e;

  z-index: 200;

  border-radius: 1rem;
}
</style>
