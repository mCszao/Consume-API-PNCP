const PNCP_URL = 'https://pncp.gov.br/api/consulta/v1/contratos';
const SAVE_URL = 'http://localhost:3000/add';

export async function getDataPncp(inicial, final, cnpj) {
    try {
      let resposta = await fetch(`${PNCP_URL}?dataInicial=${inicial}&dataFinal=${final}&cnpjOrgao=${cnpj}&pagina=1`)
      return await resposta.json();
    } catch (error) {
      alert('Não foi possível completar a consulta, por favor tente novamente');
      console.error(error);
    }
  }

export async function saveConsultData(object) {
    await fetch(SAVE_URL,
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify(object)
      }) 
}
  