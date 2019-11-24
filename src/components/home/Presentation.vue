<template>
  <div class="presentation">
    <div class="detail-box">
      <h1 class="big-detail" v-text="$ml.with('VueJS').get('presentationTitle')"></h1>
      <h3 class="little-detail" v-text="$ml.with('VueJS').get('presentationDescription')"></h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'presentation',
}
</script>

<style lang='scss'>
.presentation {
  height: 100vh;
  background-image: linear-gradient(90deg, rgba(229,81,51,0.96) 0%, #DF2B61 35%, rgba(151,20,127,0.34) 70%, rgba(175,24,129,0.24) 100%), url('../../assets/background-desktop.jpg');
  background-position: right 190% bottom 30%;

  .detail-box {
    padding-top: 40vh;
    padding-left: 132px;
    text-align: left;
  }

  .big-detail {
    font-size: 64px;
    color: #FFFFFF;
    line-height: 72px;
    font-weight: 700;
  }

  .little-detail {
    font-size: 32px;
    color: #FFFFFF;
    font-weight: 200;
  }

  .arrow {
    background-color: transparent;
  }
}

@media only screen and (max-width: 768px) {
  .presentation {
    height: 100%;
    background-image: linear-gradient(90deg, #E55133 0%, #DF2B61 34%, rgba(151,20,127,0.88) 70%, rgba(175,24,129,0.72) 100%), url('../../assets/background-desktop.jpg') 100% 100%;

    .detail-box {
      padding-top: 220px;
      padding-left: 20px;
      margin-bottom: 80px;
    }
    .big-detail {
      font-size: 48px;
      line-height: 62px;
    }
    .little-detail {
      padding-bottom:50px;
      font-size: 24px;
    }
  }
}
</style>
