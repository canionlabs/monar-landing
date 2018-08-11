/*
* @Author: caiovictormc
* @Date:   2018-08-11 07:52:53
* @Last Modified by:   caiovictormc
* @Last Modified time: 2018-08-11 20:04:32
*/

import Vue from 'vue'
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage'

Vue.use(MLInstaller)

export default new MLCreate({
  initial: 'PT',
  save: process.env.NODE_ENV === 'production',
  languages: [
    new MLanguage('EN').create({
      menuHome: 'HOME',
      menuWork: 'HOW WE WORK',
      menuContact: 'CONTACT',
      presentationTitle: 'Avoid losses and reduce costs',
      presentationDescription: 'Monitoring platform for temperature, humidity and electricity',
      howTitle: 'HOW WE WORK',
      howDescription: 'The MONAR proposal is to reduce losses, increase useful life and improve quality of temperature-sensitive products through an IoT-based monitoring system, reducing costs and simplifying logistics.',
      monitoringTitle: 'Monitoring Module',
      monitoringText: 'Sensors capture temperature, humidity and absence of electrical energy and send it to our cloud.',
      connectivityTitle: 'Connectivity',
      connectivityText: 'Ensure consistency and data delivery in addition to 3G redundancy.',
      platformTitle: 'Platform',
      platformText: 'Remotely track all of your units in one place and receive reports and alerts.',
      setupTitle: 'Simple Setup',
      setupText: 'It is not necessary to carry out modifications to the equipment.',
      notificationTitle: 'INFORMED ANYWHERE',
      notificationText: 'Using our web platform you monitor the temperature and energy of all your establishments in real time and still receive alerts on thermal variations.',
      seedTitle: 'SEED ACCELERATORS',
      contactTitle: 'NOW ENSURE THE QUALITY OF YOUR PRODUCTS',
      contactText: 'Be in compliance with international regulations and avoid damages.',
      labelName: 'Full Name',
      labelCompany: 'Your Company',
      labelPost: 'Post',
      labelEmail: 'E-mail',
      labelPhone: 'Phone Number',
      labelTargets: 'Points for monitoring',
      contactButton: 'avoid losses now'
    }),

    new MLanguage('PT').create({
      menuHome: 'INÍCIO',
      menuWork: 'COMO FUNCIONAMOS',
      menuContact: 'CONTATO',
      presentationTitle: 'Evite perdas e reduza custos',
      presentationDescription: 'Plataforma de monitoramento de temperatura, umidade e energia elétrica',
      howTitle: 'COMO FUNCIONAMOS',
      howDescription: 'A proposta do MONAR é reduzir perdas, aumentar vida útil e melhorar qualidade de produtos sensíveis a temperatura através de um sistema de monitoramento baseado em IoT diminuindo custos e simplificando logística.',
      monitoringTitle: 'Módulo de Monitoramento',
      monitoringText: 'Sensores capturam temperatura, umidade e ausência de energia elétrica e enviam para a nossa nuvem.',
      connectivityTitle: 'Conectividade',
      connectivityText: 'Garantir consistência e entrega dos dados, além de redundância 3G.',
      platformTitle: 'Platforma',
      platformText: 'Acompanhe remotamente todas as suas unidades em um único local e receba relatórios e alertas.',
      setupTitle: 'Instalação simples e descomplicada',
      setupText: 'Não é necessário realizar reformas ou modificaçōes nos equipamentos.',
      notificationTitle: 'INFORMADO EM QUALQUER LUGAR',
      notificationText: 'Usando a nossa plataforma web você acompanha a temperatura e a energia de todos os seus estabelecimentos em tempo real e ainda recebe alertas sobre variaçōes térmicas.',
      seedTitle: 'ACELERADORAS',
      contactTitle: 'GARANTA A QUALIDADE DE SEUS PRODUTOS',
      contactText: 'Esteja de acordo com as normas dos orgãos regulatórias e evite prejuízos.',
      labelName: 'Nome completo',
      labelCompany: 'Nome da sua empresa',
      labelPost: 'Cargo',
      labelEmail: 'E-mail para contato',
      labelPhone: 'Telefone',
      labelTargets: 'Pontos para monitoramento',
      contactButton: 'Evite perdas agora'



    })
  ]
})