<template>
  <div class="contact">
    <div class="section small-pad" id="contact">
      <img class="background-monar" src="@/assets/logo/monar.svg">
      <h1 class="section-title" v-text="$ml.with('VueJS').get('contactTitle')"></h1>
      <p class="little-description" v-text="$ml.with('VueJS').get('contactText')"></p>
      <div>
        <div class="form-box">
          <form action="https://formspree.io/caio@canionlabs.io" method="POST">
            <md-field>
              <label v-text="$ml.with('VueJS').get('labelName')"></label>
              <md-input id="name" name="nome" required=true></md-input>
            </md-field>
            <md-field>
              <label v-text="$ml.with('VueJS').get('labelCompany')"></label>
              <md-input id="company" name="empresa" required=true></md-input>
            </md-field>
            <md-field>
              <label v-text="$ml.with('VueJS').get('labelPost')"></label>
              <md-input id="post" name="cargo" required=true></md-input>
            </md-field>
            <md-field>
              <label v-text="$ml.with('VueJS').get('labelEmail')"></label>
              <md-input type="email" id="email" name="_replyto" required=true></md-input>
            </md-field>
            <md-field>
              <label v-text="$ml.with('VueJS').get('labelPhone')"></label>
              <md-input id="phone" name="telefone" required=true></md-input>
            </md-field>
            <md-field>
              <label v-text="$ml.with('VueJS').get('labelTargets')"></label>
              <md-input id="targets" name="qtd de pontos"></md-input>
            </md-field>
            <md-field style="display: none">
              <input type="hidden" name="_language" value="pt-BR" />
            </md-field>
            <div>
              <md-button type="submit" class="form-button" value="Send" v-text="$ml.with('VueJS').get('contactButton')">
              </md-button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact'
}
</script>

<style lang='scss'>
</style>
