import { formatCnpj } from "../utils/formatter";

export function enterpriseHeader(contrato) {
    return `
    <hr/>
      <h2 class='orgao-entidade'>${contrato.orgaoEntidade.razaoSocial} <i class="bi bi-building-fill-check"></i> </h2>
      <i>${formatCnpj(contrato.orgaoEntidade.cnpj)}</i>
    <hr class='fw-4'/>
  `
}