<template>
  <div>
    <presentation></presentation>
    <div class="section large-section" id="how-works">
      <h1 class="section-title">Como funcionamos</h1>
      <p class="big-description">
        A proposta do MONAR é reduzir perdas, aumentar vida útil e melhorar qualidade de produtos sensíveis a temperatura através de um sistema de monitoramento baseado em IoT diminuindo custos e simplificando logística.
      </p>
      <div class="info-row md-layout md-gutter md-alignment-top">
        <div class="info-card md-layout-item md-medium-size-33 md-small-size-100">
          <img class="info-icon" src="@/assets/icons/beacon.svg">
          <h2 class="info-title">Módulo de Monitoramento</h2>
          <span class="info-text">
            Sensores capturam temperatura, umidade e ausência de energia elétrica e enviam para a nossa nuvem.
          </span>
        </div>
        <div class="info-card md-layout-item md-medium-size-33 md-small-size-100">
          <img class="info-icon" src="@/assets/icons/gateway.svg">
          <h2 class="info-title">Conectividade</h2>
          <span class="info-text">
            Garantir consistência e entrega dos dados, além de redundância 3G.
          </span>
        </div>
        <div class="info-card md-layout-item md-medium-size-33 md-small-size-100">
          <img class="info-icon" src="@/assets/icons/dashboard.svg">
          <h2 class="info-title">Plataforma</h2>
          <span class="info-text">
            Acompanhe remotamente todas as suas unidades em um único local e receba relatórios e alertas.
          </span>
        </div>
      </div>
    </div>
    <div class="section small-pad large-section" id="infographic">
      <h1 class="section-title">Instalação simples e descomplicada</h1>
      <p class="little-description">
        Não é necessário realizar reformas ou modificaçōes nos equipamentos.
      </p>
    </div>
    <div class="section large-section" id="extra-info">
      <h1 class="section-title">Informado em qualquer lugar</h1>
      <p class="little-description">
        Usando a nossa plataforma web você acompanha a temperatura e a energia de todos os seus estabelecimentos em tempo real e ainda recebe alertas sobre variaçōes térmicas.
      </p>
      <img class="screens md-xsmall-hide" src="@/assets/screen.png">
    </div>
    <div class="fit-section" id="seed-accelerators">
      <h1 class="section-title">Aceleradoras</h1>
      <div class="img-row">
        <img class="screens seed-img" src="@/assets/fapepi.png">
        <img class="screens seed-img" id="sebrae-logo" src="@/assets/sebrae.png">
      </div>
<!--       <h1 class="section-title small-pad">Clientes</h1>
      <img class="screens img-row" src="@/assets/fapepi.png"> -->
    </div>
    <div class="section small-pad" id="contact">
      <img class="background-monar" src="@/assets/logo/monar.svg">
      <h1 class="section-title">Garanta a qualidade de seus produtos</h1>
      <p class="little-description">
        Esteja com as normas dos orgãos regulatórias e evite prejuízos.
        <div>
        <div class="form-box">
          <md-field>
            <label>Qual o seu nome?</label>
            <md-input v-model="name"></md-input>
          </md-field>
          <md-field>
            <label>Cargo</label>
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
            <label>Telefone</label>
            <md-input v-model="phone"></md-input>
          </md-field>
          <md-field>
            <label>Pontos de monitoramento</label>
            <md-input v-model="phone"></md-input>
          </md-field>
          <div>
            <md-button class="form-button">Evite perdas agora</md-button>
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

<style lang='scss'>
.screens {
  padding-top: 20px;
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

.fit-section {
  padding-top: 40px;
  margin-bottom: 80px;
  height: 100%;
  padding-left: 7%;
  padding-right: 7%;
}

.img-row {
  .seed-img {
    width: 240px;
    margin-left: 20px;
    margin-right: 20px;
  }
  #sebrae-logo {
    width: 140px;
  }
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
  padding-top: 5px;
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
  font-size: 24px !important;
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
  text-transform: uppercase !important;
  background-color: #FFFFFF !important;
  color: #F0166D;
  font-size: 24px !important;
  font-weight: 500 !important;
  width: 100%;
}


@media only screen and (max-width: 768px) {
  /* General
  ------------ */
  .section {
    padding-top: 4px !important;
    height: 100%;
    padding-left: 2%;
    padding-right: 2%;
  }
  .section-title {
    font-size: 32px;
    line-height: 32px;
  }

  .big-description {
    font-size: 24px;
    line-height: 32px;
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

    .form-button {
      text-transform: uppercase !important;
      background-color: #FFFFFF !important;
      color: #F0166D;
      font-size: 24px !important;
      font-weight: 500 !important;
      width: 90%;
      margin-left: 0;
    }
  }
  .md-field label {
    font-size: 18px !important;
  }
  .info-text {
    font-size: 18px;
    line-height: 21px;
  }
}

</style>
