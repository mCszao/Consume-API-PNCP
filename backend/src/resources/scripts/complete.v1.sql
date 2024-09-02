CREATE DATABASE pncp_contract_db;

CREATE TABLE consultas(
 id UUID NOT NULL PRIMARY KEY, 
 razao_social VARCHAR(255) NOT NULL,
 cnpj VARCHAR(14) NOT NULL,
 total_contratos_periodo VARCHAR(255) NOT NULL,
 data_inicial DATE NOT NULL,
 data_final DATE NOT NULL,
 data_consulta DATE NOT NULL
);