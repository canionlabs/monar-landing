<template>
    <div class="section-faq">
      <h1 class="section-title">PERGUNTAS FREQUENTES</h1>

      <div class="md-layout md-gutter md-alignment-center">
        <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
          <button class="collapsible">
            <span class="span-text">Quais alertas irei receber ao utilizar o MONAR?</span>
          </button>

          <div class="content">
            <p>Monitoramos a temperatura e a presença de energia elétrica no local onde o MONAR está instalado, portanto você receberá alertas se a temperatura fugir da faixa configurada, além de notificações caso haja uma falta de energia no lugar.</p>
          </div>
        </div>

        <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
          <button class="collapsible">
            <span class="span-text">Ainda vou precisar usar planilhas manuais ?</span>
          </button>

          <div class="content">
            <p>
              Não, através da nossa plataforma você poderá gerar o relatório térmico com a data desejada . Os dados coletados pelos sensores alimentam a planilha
            </p>
          </div>
        </div>
      </div>

      <div class="md-layout md-gutter md-alignment-center">
        <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
          <button class="collapsible">
            <span class="span-text">O sistema funciona mesmo sem energia ?</span>
          </button>

          <div class="content">
            <p>Sim. O MONAR é equipado com uma bateria de alta capacidade capaz de manter o sistema ligado e capturando informações por até 3 dias seguidos. Isso garante maior comodidade para o cliente mediante as oscilações de energia.</p>
          </div>
        </div>

        <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
          <button class="collapsible">
            <span class="span-text">Quais os intervalos de temperatura que a solução consegue monitorar?</span>
          </button>

          <div class="content">
            <p>O MONAR é capaz de monitorar cargas frias com temperaturas com faixas de -55º C até 125º C em tempo real.</p>
          </div>
        </div>
      </div>

      <div class="md-layout md-gutter md-alignment-center">
        <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
          <button class="collapsible">
            <span class="span-text">O que eu posso monitorar?</span>
          </button>

          <div class="content">
            <p>
              Com o MONAR você é capaz de monitorar vários tipos ativos refrigerados como: vacinas, bolsas sangue, compostos químicos em geral, reagentes, plasma, dentre outros.
            </p>
          </div>
        </div>

        <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
          <button class="collapsible">
            <span class="span-text">Como posso acompanhar a temperatura da minha carga fria ?</span>
          </button>

          <div class="content">
            <p>
              O MONAR possui um completo sistema web e mobile capaz de entregar informações em tempo real de várias unidades geograficamente distantes, demonstrando gráficos e um painel de controle no qual você pode acompanhar as variações de temperatura e gerenciar alertas.
            </p>
          </div>
        </div>
      </div>

      <div class="md-layout md-gutter md-alignment-center">
        <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
          <button class="collapsible">
            <span class="span-text">Tenho muitas pessoas responsáveis pela minha carga fria, é possível ter acesso com vários usuários?</span>
          </button>

          <div class="content">
            <p>
              Sim! É possível dividir usuários e grupos de usuários através da nossa plataforma, além de gerenciar os acessos de cada um.
            </p>
          </div>
        </div>

        <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
          <button class="collapsible">
            <span class="span-text">É possível definir uma temperatura específica para monitoramento em cada geladeira ?</span>
          </button>

          <div class="content">
            <p>
              Sim, é possível definir individualmente a temperatura de cada sensor.
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'faq',
    mounted: function(){
      var coll = document.getElementsByClassName("collapsible");
      var i;
      console.log(coll.length);
      for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var content = this.nextElementSibling;
          if (content.style.maxHeight){
          content.style.maxHeight = null;
          } else {
          content.style.maxHeight = content.scrollHeight + "px";
          }
          });
      }
    },
}
</script>

<style lang="scss">

$list-width: 100%;
.section-faq{
  padding-top: 40px;
  margin-bottom: 80px;
  height: 100%;
  padding-left: 7%;
  padding-right: 7%;
}

.section-title {
  text-transform: uppercase;
  font-size: 40px;
  font-weight: 700;
  line-height: 51px;
}
.collapsible {
  border: 1px solid transparent;
  border-radius: 4px;
  border-color:#E6E6E6;
  background-color: #f2f2f2;
  color: rgb(75, 75, 75);
  cursor: pointer;
  padding: 18px;
  margin-top: 10px;
  width: 100%;
  text-align: left;
  outline: none;
  font-size: 15px;
}

.active, .collapsible:hover {
  background-color: #E0E0E0;
}

.collapsible:before {
  content: '\002B';
  text-align: center;
  color: red;
  border-radius: 4px;
  font-weight: bold;
  margin-left: 1px;
}

.active:before {
  content: "\2212";
}

.content {
  padding: 0 18px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  background-color: #f1f1f1;
}
.span-text{
  padding-left: 2%;
}

</style>
