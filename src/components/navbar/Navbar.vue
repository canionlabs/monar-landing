<template>
  <div>
      <md-toolbar class="md-accent" md-elevation="0">
        <div class="md-toolbar-section-start">
          <img class="toolbar-logo" src="@/assets/logo/white.svg">
        </div>
        <div class="md-toolbar-section-end">
          <a href="#" class="md-primary toolbar-item">INÍCIO</a>
          <a href="#" class="md-primary toolbar-item">COMO FUNCIONAMOS</a>
          <a href="#" class="md-primary toolbar-item">CONTATO</a>
          <!-- <a class="md-primary toolbar-item link-disable">
            LINGUAGEM: 
          </a> -->
          <div class="toolbar-item">
            <a href="#"><span><img class="flag" src="@/assets/flags/brazil.svg"></span></a>
            <a href="#"><span><img class="flag" src="@/assets/flags/eua.svg"></span></a>
          </div>
        </div>
      </md-toolbar>
  </div>
</template>

<script>

export default {
  name: 'navbar'
}
</script>

<style lang="css" scoped>
.md-toolbar {
  background-color: transparent;
  height: 112px;
  padding-right: 132px;
  padding-left: 132px;
  position: absolute;
}

.toolbar-logo {
  width: 154.2px;
}

.md-primary {
  font-size: 18px;
  font-weight: 700;
  color: #FFFFFF;
}

.toolbar-item {
  min-width: 0px;
  margin: 0px;
  margin-left: 8px !important;
  margin-right: 8px !important;
}

.toolbar-item:last-child {
  margin-left: 8px !important;
}

.toolbar-item:hover {
 min-width: 0px;
 margin: 0px;
}

.link-disable {
  text-decoration: none !important;
}

.flag:last-child {
  margin-left: 5px;
}
</style>
