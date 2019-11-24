<template>
  <div>
    <presentation></presentation>
    <div class="section large-section" id="how-works">
      <h1 class="section-title" v-text="$ml.with('VueJS').get('howTitle')"></h1>
      <p class="big-description" v-text="$ml.with('VueJS').get('howDescription')"></p>
      <div class="info-row md-layout md-gutter md-alignment-top">
        <div class="info-card md-layout-item md-medium-size-33 md-small-size-100">
          <img class="info-icon" src="@/assets/icons/beacon.svg">
          <h2 class="info-title" v-text="$ml.with('VueJS').get('monitoringTitle')"></h2>
          <span class="info-text" v-text="$ml.with('VueJS').get('monitoringText')"></span>
        </div>
        <div class="info-card md-layout-item md-medium-size-33 md-small-size-100">
          <img class="info-icon" src="@/assets/icons/gateway.svg">
          <h2 class="info-title" v-text="$ml.with('VueJS').get('connectivityTitle')"></h2>
          <span class="info-text" v-text="$ml.with('VueJS').get('connectivityText')"></span>
        </div>
        <div class="info-card md-layout-item md-medium-size-33 md-small-size-100">
          <img class="info-icon" src="@/assets/icons/dashboard.svg">
          <h2 class="info-title" v-text="$ml.with('VueJS').get('platformTitle')"></h2>
          <span class="info-text" v-text="$ml.with('VueJS').get('platformText')"></span>
        </div>
      </div>
    </div>
    <div class="section small-pad large-section" id="infographic">
      <h1 class="section-title" v-text="$ml.with('VueJS').get('setupTitle')"></h1>
      <p class="little-description test" v-text="$ml.with('VueJS').get('setupText')"></p>
      <img class="screens md-xsmall" src="@/assets/art.png">
    </div>
    <div class="section large-section" id="extra-info">
      <h1 class="section-title" v-text="$ml.with('VueJS').get('notificationTitle')"></h1>
      <p class="little-description" v-text="$ml.with('VueJS').get('notificationText')"></p>
      <img class="screens md-xsmall" src="@/assets/screen.png">
    </div>
    <div class="fit-section" id="seed-accelerators">
      <h1 class="section-title" v-text="$ml.with('VueJS').get('seedTitle')"></h1>
      <div class="img-row">
        <img class="screens seed-img" src="@/assets/fapepi.png">
        <img class="screens seed-img" id="sebrae-logo" src="@/assets/sebrae.png">
      </div>
    </div>
    <contact></contact>
  </div>
</template>

<script>
import Presentation from './Presentation'
import Contact from './Contact'

export default {
  name: 'home',
  components: {
    Presentation,
    Contact
  }
}
</script>

<style lang='scss'>
.screens {
  padding-top: 20px;
}

#extra-info{
  margin-top: 100px;
}

.small-pad {
  padding-top: 25px !important;
}

.section {
  padding-top: 80px;
  height: 100vh;
  max-height: 750px;
  padding-left: 7%;
  padding-right: 7%;
}

.fit-section {
  padding-top: 20px;
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
  line-height: 26px;
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
  padding-top:2px;
  padding-left: 20%;
  padding-right: 20%;
}

.md-field {
  background: rgba(0,0,0,0.08);
  padding-left: 20px;
  margin-top: 22px;
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

input {
  background: white;
}

input:-webkit-autofill {
  -webkit-box-shadow: inset 0 0 0px 9999px white;
  font-size: 12px !important;
  margin-bottom: 4px;
  margin-top: 4px;
  margin-right: 4px;
}


@media only screen and (max-width: 768px) {

  #infographic{
    margin-top: 50px;
  }

  #extra-info{
    margin-top: 50px;
  }
  /* General
  ------------ */
  .section {
    padding-top: 4px !important;
    height: 100%;
    padding-left: 2%;
    padding-right: 2%;
    max-height: inherit;
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
  .info-row{
    margin-top: 30px;
  }
  .info-card {
    margin-top: 20px;
    text-align:center;
  }
  #how-works{
    margin-top: 40px;
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
