<template>
  <div class="contact">
    <div class="section small-pad" id="contact">
      <img class="background-monar" src="@/assets/logo/monar.svg">
      <h1 class="section-title">Garanta a qualidade de seus produtos</h1>
      <p class="little-description">
        Esteja de acordo com as normas dos orgãos regulatórias e evite prejuízos.
      </p>
      <div>
        <div class="form-box">
          <form action="https://formspree.io/caio@canionlabs.io" method="POST">
            <md-field>
              <label>Nome completo</label>
              <md-input id="name" name="nome" required=true></md-input>
            </md-field>
            <md-field>
              <label>Nome da sua empresa</label>
              <md-input id="company" name="empresa" required=true></md-input>
            </md-field>
            <md-field>
              <label>Cargo</label>
              <md-input id="post" name="cargo" required=true></md-input>
            </md-field>
            <md-field>
              <label>E-mail para contato</label>
              <md-input type="email" id="email" name="_replyto" required=true></md-input>
            </md-field>
            <md-field>
              <label>Telefone</label>
              <md-input id="phone" name="telefone" required=true></md-input>
            </md-field>
            <md-field>
              <label>Pontos para monitoramento</label>
              <md-input id="targets" name="qtd de pontos"></md-input>
            </md-field>
            <md-field style="display: none">
              <input type="hidden" name="_language" value="pt-BR" />
            </md-field>
            <div>
              <md-button type="submit" class="form-button" value="Send">Evite perdas agora</md-button>
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
