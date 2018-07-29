<template>
  <div class="layout">
    <navbar></navbar>
    <router-view></router-view>
    <div class="footer" style="background-color: grey;">
      ©2018. Todos os direitos reservados.&nbsp;<a href="http://canionlabs.io" target="_blank">CanionLabs </a>
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

<style lang='scss'>
  .footer {
    padding-top:25px;
    bottom: 0;
    padding-bottom: 8px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>