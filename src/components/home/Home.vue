<template>
  <div>
    <presentation></presentation>
    <div class="section large-section" id="how-works">
      <h1 class="section-title">Como funcionamos</h1>
      <p class="big-description">
        Possuimos uma plataforma inteligente que monitora produtos sensíveis a temperatura armazenados em câmaras frias.
      </p>
      <div class="info-row md-layout md-gutter md-alignment-top">
        <div class="info-card md-layout-item md-medium-size-33 md-small-size-100">
          <img class="info-icon" src="@/assets/icons/beacon.svg">
          <h2 class="info-title">Sensor de temperatura</h2>
          <span class="info-text">
            Visualização remota e em tempo real da temperatura dos refrigeradores da sua empresa. Ele possui uma conexão bluetooth e uma bateria própria.
          </span>
        </div>
        <div class="info-card md-layout-item md-medium-size-33 md-small-size-100">
          <img class="info-icon" src="@/assets/icons/gateway.svg">
          <h2 class="info-title">Gateway IoT</h2>
          <span class="info-text">
            É responsavel em conectar todos os sensores. Ela possui bateria, conexão 3g e armazenamento local. Os dados são salvos e sincronizados quanto há conexão.  Desse modo mesmo sem energia no seu estabelecimento ela continuará monitorando.
          </span>
        </div>
        <div class="info-card md-layout-item md-medium-size-33 md-small-size-100">
          <img class="info-icon" src="@/assets/icons/dashboard.svg">
          <h2 class="info-title">Sensor de temperatura</h2>
          <span class="info-text">
            Visualização remota e em tempo real da temperatura dos refrigeradores da sua empresa. Ele possui uma conexão bluetooth e uma bateria própria.
          </span>
        </div>
      </div>
    </div>
    <div class="section small-pad large-section" id="infographic">
      <h1 class="section-title">Instalação rapida e simples</h1>
      <p class="little-description">
        Tão simples que você mesmo instala os sensores plug and play de temperatura e de energia e nosso gateway nos locais que deseja.
      </p>
    </div>
    <div class="section large-section" id="extra-info">
      <h1 class="section-title">Informado em qualquer lugar</h1>
      <p class="little-description">
        Usando a nossa plataforma web você acompanha a temperatura e a energia de todos os seus estabelecimentos em tempo real. Ainda é possivel configurar envio de alertas via: SMS, telegram e Whatsapp.
      </p>
      <img class="screens md-xsmall-hide" src="@/assets/screen.png">
    </div>
    <div class="section small-pad" id="seed-accelerators">
      <h1 class="section-title">Aceleradoras</h1>
      <img class="screens img-row" src="@/assets/fapepi.png">
      <h1 class="section-title small-pad">Clientes</h1>
      <img class="screens img-row" src="@/assets/fapepi.png">
    </div>
    <div class="section small-pad" id="contact">
      <img class="background-monar" src="@/assets/logo/monar.svg">
      <h1 class="section-title">Adquira agora seu MONAR</h1>
      <p class="little-description">
        Gostou do nosso produto e que saber o orçamento para o seu estabelecimento. Agende agora com um dos nossos representantes.
        <div>
        <div class="form-box">
          <md-field>
            <label>Qual o seu nome?</label>
            <md-input v-model="name"></md-input>
          </md-field>
          <md-field>
            <label>Qual o nome da sua empresa?</label>
            <md-input v-model="company"></md-input>
          </md-field>
          <md-field>
            <label>E-mail para contato</label>
            <md-input v-model="email"></md-input>
          </md-field>
          <md-field>
            <label>Telefone(Opcional)</label>
            <md-input v-model="phone"></md-input>
          </md-field>
          <div>
            <md-button class="form-button">Agendar</md-button>
          </div>
        </div>
        </div>
      </p>
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
.screens {
  padding-top: 60px;
}

#infographic {
  background: url("../../assets/art.png") center 80% no-repeat;
}

.small-pad {
  padding-top: 40px !important;
}

.section {
  padding-top: 80px;
  height: 100vh;
  padding-left: 7%;
  padding-right: 7%;
}

.section-title {
  text-transform: uppercase;
  font-size: 40px;
  font-weight: 700;
  line-height: 51px;
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
  /*color: rgba(0,0,0,0.80); */
}

/*.infographic-image {
  width: 1024px !important;
  height: 583px !important;
}
*/
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

.form-box {
  padding-top: 20px;
  padding-left: 20%;
  padding-right: 20%;
}

.md-field {
  background: rgba(0,0,0,0.08);
  padding-left: 20px;
  margin-top: 24px;
}

.md-field label {
  left: auto !important;
  font-size: 24px;
  top: auto;
}

#contact {
  background-image: linear-gradient(90deg, #E55133 0%, #DF2B61 34%, rgba(151,20,127,0.88) 70%, rgba(175,24,129,0.72) 100%);
  color: #FFFFFF !important;
}

.background-monar {
  position: absolute;
  left: 130px;
  bottom: 160px;
}

.form-button {
  text-transform: uppercase;
  background-color: #FFFFFF;
  color: #F0166D;
  font-size: 24px;
  font-weight: 500;
  width: 100%;
}


@media only screen and (max-width: 768px) {
  /* General
  ------------ */
  .section {
    padding-top: 4px !important;
    height: 100%;
  }
  .section-title {
    font-size: 38px;
    line-height: 38px;
  }

  /* How-it-works
  ------------ */
  .info-card {
    margin-top: 20px;
  }
  #infographic {
    background: none;
  }

  /* Contact 
  ------------ */
  .background-monar {
    width: 190px;
    left: 50px;
    bottom: 490px;
  }
  .form-box {
    padding-top: 0px;
    padding-left: 0%;
    padding-right: 0%;
  }
  .md-field label {
    font-size: 18px;
  }
  .info-text {
    font-size: 18px;
    line-height: 21px;
  }
}

</style>
