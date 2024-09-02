import * as api from "./services/api";
import { beautyDate } from "./utils/formatter";

import { contractContainerFactory } from "./utils/factory";

const btn = document.querySelector('.consulta');
btn.onclick = initClickEvent;
document.querySelector('.cnpj').onkeypress = (e) => {
  if(e.currentTarget.value.length >= 14) {
    e.currentTarget.value = String(e.currentTarget.value).slice(0, 13) ;
  }
}

let totContratosConsultados = 0;

async function initClickEvent(e) {
  const dataInicial = document.querySelector('.dataInicial').value;
  const dataFinal = document.querySelector('.dataFinal').value;
  const dataInicialTratada = beautyDate(dataInicial);
  const dataFinalTratada = beautyDate(dataFinal);
  const cnpj = document.querySelector('.cnpj').value;

  e.currentTarget.innerText = 'Carregando...';
  const res = await api.getDataPncp(dataInicialTratada, dataFinalTratada, cnpj);
  btn.innerText = 'Consultar';
  if(res == undefined) return;
  showResultOnScreen(res.data)
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

function showResultOnScreen(contratos) {
  const containerResultado = document.querySelector('.resultados');
  containerResultado.innerHTML = `
    <hr/>
      <h2>${contratos[0].orgaoEntidade.razaoSocial}</h2>
      <i>${contratos[0].orgaoEntidade.cnpj}</i>
    <hr/>
  `;
  Array.from(contratos).forEach((contrato) => {
    containerResultado.innerHTML += contractContainerFactory(contrato)
    totContratosConsultados += contrato.valorInicial;
  })

  containerResultado.innerHTML += `
    <strong>Valor total dos contratos: R$${Number(totContratosConsultados).toFixed(2)}</strong>;
  `
}

