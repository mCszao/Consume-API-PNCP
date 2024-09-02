import * as api from "./services/api";
import { formatDateToSearch, formatMoney } from "./utils/formatter";
import { enterpriseHeader } from "./components/enterprise-header";
import { contractContainer } from "./components/contract-container";

const btn = document.querySelector('.consulta');

//Adicionando eventos ao botão e ao input do cnpj
btn.onclick = initClickEvent;
document.querySelector('.cnpj').onkeypress = (e) => {
  if(e.currentTarget.value.length >= 14) {
    e.currentTarget.value = String(e.currentTarget.value).slice(0, 13) ;
  }
}

//Iniciando totalizador de contratos globalmente
let totContratosConsultados = 0;

async function initClickEvent(e) {
  //Salvando os valores das datas em memória, valores puros e tratados
  const dataInicial = document.querySelector('.dataInicial').value;
  const dataFinal = document.querySelector('.dataFinal').value;
  const dataInicialTratada = formatDateToSearch(dataInicial);
  const dataFinalTratada = formatDateToSearch(dataFinal);
  const cnpj = document.querySelector('.cnpj').value;


  if(new Date(dataInicial) > new Date(dataFinal)) {
    alert('A data inicial precisa ser anterior a data final');
    return;
  }

  //Iniciando requisição a api pncp
  e.currentTarget.innerText = 'Carregando...';
  const res = await api.getDataPncp(dataInicialTratada, dataFinalTratada, cnpj);
  btn.innerText = 'Consultar';

  //Verificando se existe retorno iterável e caso exista, que seja mostrado na tela 
  if(res == undefined) return;
  mostrarContratosNaTela(res.data)

  //Enviando objeto da consulta no corpo da requisição para salvar os dados consultados
  const object = {
    "razaoSocial" : res.data[0].orgaoEntidade.razaoSocial,
    "cnpj" : res.data[0].orgaoEntidade.cnpj,
    "totalContratosPeriodo": totContratosConsultados,
    "dataInicial" : dataInicial,
    "dataFinal": dataFinal,
    "dataConsulta": new Date()
  };
  await api.saveConsultData(object);
}

function mostrarContratosNaTela(contratos) {
  totContratosConsultados = 0;
  const containerResultado = document.querySelector('.resultados');
  containerResultado.innerHTML = enterpriseHeader(contratos[0]);
  Array.from(contratos).forEach((contrato) => {
    containerResultado.innerHTML += contractContainer(contrato)
    totContratosConsultados += contrato.valorInicial;
  })
  containerResultado.innerHTML += `
    <strong class='tot-valor'>Valor total dos contratos: R$${formatMoney(totContratosConsultados)}</strong>;
  `
}

