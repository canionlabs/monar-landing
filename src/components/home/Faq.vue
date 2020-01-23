<template>
    <div class="section-faq">
      <h1 class="section-title">PERGUNTAS FREQUENTES</h1>
      
      <div class="md-layout md-gutter">
        <div class="md-layout-item">
          <button class="collapsible">Como serei alertado sobre algum problema ?</button>
          
          <div class="content">
            <p>Os alertas emitidos pelo MONAR podem ser enviados por diversas modalidades: alerta no celular, SMS, email e WhatsApp.</p>
          </div>
        </div>
        
        <div class="md-layout-item">
          <button class="collapsible">Quais alertas irei receber ao utilizar o MONAR?</button>
          
          <div class="content">
            <p>Monitoramos a temperatura e a presença de energia elétrica no local onde o MONAR está instalado, portanto você receberá alertas se a temperatura fugir da faixa configurada, além de notificações caso haja uma falta de energia no lugar.</p>
          </div>
        </div>
      </div>

      <div class="md-layout md-gutter">
        <div class="md-layout-item">
          <button class="collapsible">O sistema funciona mesmo sem energia ?</button>
          
          <div class="content">
            <p>Sim. O MONAR é equipado com uma bateria de alta capacidade capaz de manter o sistema ligado e capturando informações por até 3 dias seguidos. Isso garante maior comodidade para o cliente mediante as oscilações de energia.</p>
          </div>
        </div>

        <div class="md-layout-item">
          <button class="collapsible">Quais o intervalo de temperatura que a solução consegue monitorar?</button>
          
          <div class="content">
            <p>O MONAR é capaz de monitorar cargas frias com temperaturas com faixas de -55º C até 125º C em tempo real.</p>
          </div>
        </div>
      </div>

      <div class="md-layout md-gutter">
        <div class="md-layout-item">
          <button class="collapsible">
            O que eu posso monitorar?
          </button>
          
          <div class="content">
            <p>
              Com o MONAR você é capaz de monitorar vários tipos artigos refrigerados como: vacinas, bolsas sangue, compostos químicos em geral, reagentes, plasma, dentre outros.
            </p>
          </div>
        </div>

        <div class="md-layout-item">
          <button class="collapsible">
            Como posso acompanhar a temperatura da minha carga fria ?
          </button>
          
          <div class="content">
            <p>
              O MONAR possui um completo sistema web e mobile capaz de entregar informações em tempo real de várias unidades geograficamente distantes, demonstrando gráficos e um painel de controle no qual você pode acompanhar as variações de temperatura e gerenciar alertas.
            </p>
          </div>
        </div>
      </div>

      <div class="md-layout md-gutter">
        <div class="md-layout-item">
          <button class="collapsible">
            Qual o valor do MONAR?
          </button>
          
          <div class="content">
            <p>
              Os planos de acesso ao sistema são baseados em assinatura mensal com um valor fixo de R$ X,X por módulo requeridos. Você terá acesso ao equipamento sem custo adicional de instalação.
            </p>
          </div>
        </div>

        <div class="md-layout-item">
          <button class="collapsible">
            Ainda vou precisar usar planilhas manuais ?
          </button>
          
          <div class="content">
            <p>
              Não, através da nossa plataforma você poderá gerar o relatório térmico com a data desejada . Os dados coletados pelos sensores alimentam a planilha
            </p>
          </div>
        </div>
      </div>
      
      <div class="md-layout md-gutter">
        <div class="md-layout-item">
          <button class="collapsible">
            Tenho muitas pessoas responsáveis pela minha carga fria, é possível ter acesso com vários usuários?
          </button>
          
          <div class="content">
            <p>
              Sim! É possível dividir usuários e grupos de usuários através da nossa plataforma, além de gerenciar os acessos de cada um.
            </p>
          </div>
        </div>

        <div class="md-layout-item">
          <button class="collapsible">É possível definir uma temperatura específica para monitoramento em cada geladeira ?</button>
          
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
  border-radius: 4px;
  background-color: rgb(209, 209, 209);
  color: rgb(75, 75, 75);
  cursor: pointer;
  padding: 18px;
  margin-top: 10px;
  width: 100%;
  border: none;
  text-align: center;
  outline: none;
  font-size: 15px;
}

.active, .collapsible:hover {
  background-color: rgb(168, 168, 168);
}

.collapsible:after {
  content: '\002B';
  color: rgb(46, 46, 46);
  font-weight: bold;
  float: left;
  margin-left: 5px;
}

.active:after {
  content: "\2212";
}

.content {
  padding: 0 18px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  background-color: #f1f1f1;
}

</style>