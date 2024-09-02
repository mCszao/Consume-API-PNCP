import { IConsultasDTO } from "../dto/Consultas.dto";

export interface IConsultasModel {
    id: string;
    razao_social: string;
    cnpj: string;
    total_contratos_periodo: string;
    data_inicial: string;
    data_final: string;
    data_consulta: string;
}

export class ConsultasModel implements IConsultasModel {
    id: string;
    razao_social: string;
    cnpj: string;
    total_contratos_periodo: string;
    data_inicial: string;
    data_final: string;
    data_consulta: string;

    constructor(uuid: string, dto: IConsultasDTO) {
        this.id= uuid;
        this.razao_social = dto.razaoSocial;
        this.cnpj = dto.cnpj;
        this.total_contratos_periodo  = dto.totalContratosPeriodo;
        this.data_inicial = dto.dataInicial;
        this.data_final = dto.dataFinal;
        this.data_consulta = dto.dataConsulta;
    }

    public static from(id: string, razaoSocial: string, cnpj: string, totalContratosPeriodo: string, dataInicial: string, dataFinal: string, dataConsulta: string) {
        return new ConsultasModel(id, {razaoSocial, cnpj, totalContratosPeriodo, dataInicial, dataFinal, dataConsulta});
    }
}