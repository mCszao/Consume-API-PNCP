export function contractContainerFactory(contrato) {
    return `
    <div class='contrato'>
      <h3>${contrato.nomeRazaoSocialFornecedor}</h3>
      <p>Objeto do Contrato: <strong>${contrato.objetoContrato}</strong></p>
      <p>
        <i>Inicio Vigência: ${contrato.dataVigenciaInicio}</i> /
        <i>Fim Vigência: ${contrato.dataVigenciaFim}</i>
      </p>
      <strong>R$${Number(contrato.valorInicial).toFixed(2)}</strong>
    </div>
    <hr/> 
  `;
}