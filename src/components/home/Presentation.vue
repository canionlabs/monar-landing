<template>
  <div class="presentation">
    <div class="detail-box">
      <h1 class="big-detail">Evite perdas e reduza custos</h1>
      <h3 class="little-detail">Plataforma de monitoramento de temperatura, umidade e energia elétrica.</h3>
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
  background-image: linear-gradient(90deg, #E55133 0%, #DF2B61 34%, rgba(151,20,127,0.88) 70%, rgba(175,24,129,0.72) 100%), url('../../assets/background-desktop.png');

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
    background-image: linear-gradient(90deg, #E55133 0%, #DF2B61 34%, rgba(151,20,127,0.88) 70%, rgba(175,24,129,0.72) 100%), url('../../assets/background-desktop.png') 100% 100%;

    .detail-box {
      padding-left: 20px;
    }
    .big-detail {
      font-size: 48px;
      line-height: 62px;
    }
    .little-detail {
      font-size: 24px;
    }
  }
}
</style>
