import { formatDateToShow, formatMoney } from "../utils/formatter";

export function contractContainer(contrato) {
    return `
    <div class='contrato'>
      <h3>${contrato.nomeRazaoSocialFornecedor}</h3>
      <p>Objeto do Contrato: <strong>${contrato.objetoContrato}</strong></p>
      <p>
        Inicio Vigência: <i class='inicio-vig'>${formatDateToShow(contrato.dataVigenciaInicio)}</i> /
        Fim Vigência: <i class='fim-vig'>${formatDateToShow(contrato.dataVigenciaFim)}</i>
      </p>
      <strong>R$${formatMoney(contrato.valorInicial)}</strong>
    </div>
    <hr/> 
  `;
}