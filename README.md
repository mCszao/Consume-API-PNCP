# Consume-API-PNCP

# Tecnologias
    Frontend:
        Linguagens: HTML5, CSS3 e JAVASCRIPT
        Bibliotecas: Vite
    Backend:
        Linguagem: TypeScript
        Bibliotecas: express, uuid, pg, cors (todos com seus respectivos @types)

# Requisitos

Antes de prosseguir com a instalação, certifique-se de ter os seguintes requisitos instalados em sua máquina:

    node v.18.*
    Container contendo imagem do banco de dados POSTGRESQL ou server disponibilizados pela distribuidora e o pgAdmin ou qualquer outra interface visual com suporte ao POSTGRESQL
    (user: postgres, password: root, port: 5432)
    ...

# Instalação

    Navegue até a pasta src/resources/database/scripts.
    Copie os comandos SQL do arquivo complete.v1.sql ou separadamento na ordem de criação respeitando as regras do SQL.

    No Frontend: - Navegue até a pasta frontend e execute o comando npm install ou do gerenciador de pacotes de sua preferência.
    	 - [YARN] Caso opte por utilizar outro gerenciador diferente do yarn após experimentar o yarn, tenha certeza de remover o arquivo yarn.lock da raiz para não causar problemas com os gerenciadores.

    No Backend   - Navegue até a pasta backend e execute o comando npm install ou do gerenciador de pacotes de sua preferência.
    	  - [YARN] Caso opte por utilizar outro gerenciador diferente do yarn após experimentar o yarn, tenha certeza de remover o arquivo yarn.lock da raiz para não causar problemas com os gerenciadores.
    	 - Caso opte por escolher outro nome de banco de dados ou quaisquer dados de configuração à base de dados navegue até src/config/database.ts e altere os atributos da classe Database.
         - Caso queira utilizar outro driver de conexão ao banco de dados, navegue até src/config/database.ts altere o objeto recebido pela connection na classe Database.

# Comandos de Inicialização

    Frontend:
        - Navegue até a pasta frontend e execute o comando npm run dev ou do gerenciador escolhido.

    No Backend:
        - Navegue até a pasta backend e execute o comando npm run dev ou do gerenciador escolhido.

# Observações
    As requisições de consulta são realizadas feitas para api do pncp e a mesma apresentou muitos erros internos no servidor durantes meus teste, portanto pode ser que precise fazer a requisição repetidas vezes para que veja o resultado final. Uma alternativa é fazer requisições de com período curto entre a data inicial e final.

    Os prints da aplicação estão na raiz no projeto na pasta screenshots.

