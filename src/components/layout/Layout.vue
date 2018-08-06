<template>
  <div class="layout">
    <navbar></navbar>
    <router-view></router-view>
    <div class="footer">
      <div class="footer-row">
        <a href="#" class="footer-item footer-img">
          <img src="@/assets/icons/facebook/white.svg">
        </a>
        <a href="#" class="footer-item footer-img">
          <img src="@/assets/icons/instagram/white.svg">
        </a>
        <a href="#" class="footer-item footer-img">
          <img src="@/assets/icons/linkedin/white.svg">
        </a>
      </div>
      <div class="footer-row">
        <a href="#" class="footer-item">INÍCIO</a>
        <a href="#how-works" class="footer-item">COMO FUNCIONAMOS</a>
        <a href="#contact" class="footer-item">CONTATO</a>
      </div>
      <div class="footer-row">
        ©2018. Todos os direitos reservados.&nbsp;<a href="http://canionlabs.io" target="_blank">CanionLabs </a>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../navbar/Navbar'

export default {
  name: 'layout',
  components: {
    Navbar
  }
}
</script>

<style lang='css'>
.footer-row {
  margin-bottom: 20px;
  margin-top: 20px;
}

.footer-item {
  font-size: 18px;
  margin-right: 20px;
  margin-left: 20px;
  color: #FFFFFF;
  font-weight: 700;
}

.footer {
  color: #FFFFFF;
  padding-top:25px;
  bottom: 0;
  padding-bottom: 8px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(90deg, #E55133 0%, #DF2B61 34%, rgba(151,20,127,0.88) 70%, rgba(175,24,129,0.72) 100%);
}

.footer a {
  color: #FFFFFF;
}

@media only screen and (max-width: 768px) {
  .footer-item {
    font-size: 14px;
    margin-right: 6px;
    margin-left: 6px;
  }
}
</style>