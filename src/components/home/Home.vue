<template>
  <div>
    <presentation></presentation>
    <div class="section" id="how-works">
      <h1 class="section-title">Como funcionamos</h1>
      <p class="big-description">
        Possuimos uma plataforma inteligente que monitora produtos sensíveis a temperatura armazenados em câmaras frias.
      </p>
      <div class="info-row md-layout md-gutter md-alignment-top">
        <div class="info-card md-layout-item md-medium-size-33">
          <img class="info-icon" src="@/assets/icons/beacon.svg">
          <h2 class="info-title">Sensor de temperatura</h2>
          <span class="info-text">
            Visualização remota e em tempo real da temperatura dos refrigeradores da sua empresa. Ele possui uma conexão bluetooth e uma bateria própria.
          </span>
        </div>
        <div class="info-card md-layout-item md-medium-size-33">
          <img class="info-icon" src="@/assets/icons/gateway.svg">
          <h2 class="info-title">Gateway IoT</h2>
          <span class="info-text">
            É responsavel em conectar todos os sensores. Ela possui bateria, conexão 3g e armazenamento local. Os dados são salvos e sincronizados quanto há conexão.  Desse modo mesmo sem energia no seu estabelecimento ela continuará monitorando.
          </span>
        </div>
        <div class="info-card md-layout-item md-medium-size-33">
          <img class="info-icon" src="@/assets/icons/dashboard.svg">
          <h2 class="info-title">Sensor de temperatura</h2>
          <span class="info-text">
            Visualização remota e em tempo real da temperatura dos refrigeradores da sua empresa. Ele possui uma conexão bluetooth e uma bateria própria.
          </span>
        </div>
      </div>
    </div>
    <div class="section" id="infographic">
      <h1 class="section-title">Instalação rapida e simples</h1>
      <p class="little-description">
        Tão simples que você mesmo instala os sensores plug and play de temperatura e de energia e nosso gateway nos locais que deseja.
      </p>
      <img class="infographic-image" src="@/assets/info-art.svg">
    </div>
  </div>
</template>

<script>
import Presentation from './Presentation'

export default {
  name: 'home',
  components: {
    Presentation
  }
}
</script>

<style lang='css'>

.section {
  padding-top: 80px;
  height: 100vh;
  padding-left: 10%;
  padding-right: 10%;
}

.section-title {
  text-transform: uppercase;
  font-size: 40px;
  font-weight: 700;
}

.big-description {
  text-align: center;
  font-weight: 300;
  font-size: 28px;
  font-family: 'Titillium Web', sans-serif;
  letter-spacing: 0px;
  line-height: 43px;
  color: rgba(0,0,0,0.80);
}

.little-description {
  text-align: center;
  font-weight: 300;
  font-size: 24px;
  font-family: 'Titillium Web', sans-serif;
  letter-spacing: 0px;
  line-height: 36px;
  color: rgba(0,0,0,0.80); 
}

.infographic-image {
  width: 1024px !important;
  height: 583px !important;
}

.info-row {
  margin-top: 50px;
}

.info-card {
  text-align: left;
}

.info-icon {
  width: 64px;
}

.info-title {
  font-size: 24px;
  line-height: 30px;
  color: rgba(0,0,0,0.80);
}

.info-text {
  font-size: 18px;
  line-height: 27px;
  font-family: 'Titillium Web', sans-serif;

}
</style>
