"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultasModel = void 0;
class ConsultasModel {
    constructor(uuid, dto) {
        this.id = uuid;
        this.razao_social = dto.razaoSocial;
        this.cnpj = dto.cnpj;
        this.total_contratos_periodo = dto.totalContratosPeriodo;
        this.data_inicial = dto.dataInicial;
        this.data_final = dto.dataFinal;
        this.data_consulta = dto.dataConsulta;
    }
    static from(id, razaoSocial, cnpj, totalContratosPeriodo, dataInicial, dataFinal, dataConsulta) {
        return new ConsultasModel(id, { razaoSocial, cnpj, totalContratosPeriodo, dataInicial, dataFinal, dataConsulta });
    }
}
exports.ConsultasModel = ConsultasModel;
