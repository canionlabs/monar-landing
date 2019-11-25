<template>
  <div id="navbar-scroll">
      <md-toolbar class="md-accent" md-elevation="0">
        <div class="md-toolbar-section-start">
          <img class="toolbar-logo" src="@/assets/logo/white.svg">
        </div>

        <div class="md-toolbar-section-end md-layout display-links">
          <a
            href="#" class="md-primary toolbar-item md-small-hide"
            v-text="$ml.with('VueJS').get('menuHome')">
          </a>
          <a
            href="#how-works" class="md-primary toolbar-item md-small-hide"
            v-text="$ml.with('VueJS').get('menuWork')">
          </a>
          <a
            href="#contact" class="md-primary toolbar-item md-small-hide"
            v-text="$ml.with('VueJS').get('menuContact')">
          </a>

          <div class="toolbar-item">
            <a href="#" @click="$ml.change('PT')"><span><img class="flag" src="@/assets/flags/brazil.svg"></span></a>
            <a href="#" @click="$ml.change('EN')"><span><img class="flag" src="@/assets/flags/eua.svg"></span></a>
          </div>
        </div>

        <div class="display-mobile">
          <md-menu md-size="auto" md-offset-5 md-direction="bottom-end" md-close-on-select>
            <md-button class="md-icon-button" md-menu-trigger>
              <menu-icon id="menu-iten"></menu-icon>
            </md-button>
            <md-menu-content class="icon-mobile">
              <md-menu-item>
                <a href="#" class="dropdown-itens" v-text="$ml.with('VueJS').get('menuHome')"></a>
              </md-menu-item>
              <md-menu-item>
                <a href="#how-works" class="dropdown-itens" v-text="$ml.with('VueJS').get('menuWork')"></a>
              </md-menu-item>
              <md-menu-item>
                <a href="#contact" class="dropdown-itens" v-text="$ml.with('VueJS').get('menuContact')"></a>
              </md-menu-item>
              <md-menu-item>
                <div class="toolbar-item">
                  <a href="#" @click="$ml.change('PT')"><span><img class="flag" src="@/assets/flags/brazil.svg"></span></a>
                  <a href="#" @click="$ml.change('EN')"><span><img class="flag" src="@/assets/flags/eua.svg"></span></a>
                </div>
              </md-menu-item>
            </md-menu-content>
          </md-menu>
        </div>

      </md-toolbar>
  </div>
</template>

<script>

export default {
  name: 'navbar',
}
</script>

<style lang="css" scoped>

/************MOBILE****************/
#menu-iten{
  color:white;
}
.icon-mobile{
  background-color: white;
}
.display-mobile{
  display:none;
}
.dropdown-itens{
  color:black;
}
.dropdown-itens:hover{
  color:rgba(229,81,51,0.96);
  text-decoration:none;
}
/************END-MOBILE****************/


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

@media only screen and (max-width: 768px) {
  .display-links{
    display:none;
  }
  .display-mobile{
    display:block;
  }
  .md-toolbar {
    padding-left: 25px;
  }
  .toolbar-logo {
    width: 150px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 961px){
  .display-links{
    display:none;
  }
  .display-mobile{
    display:block;
  }
}

</style>
