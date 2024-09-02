"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsModel = void 0;
const js_base64_1 = require("js-base64");
class AnalyticsModel {
    constructor(uuid, dto) {
        this.id = uuid;
        this.razao_social = dto.razaoSocial;
        this.cnpj = dto.cnpj;
        this.total_contrato = dto.totalContrato;
        this.json_consult = js_base64_1.Base64.encode(dto.jsonConsult);
    }
    static from(id, razaoSocial, cnpj, totalContrato, jsonConsult) {
        return new AnalyticsModel(id, { razaoSocial, cnpj, totalContrato, jsonConsult });
    }
}
exports.AnalyticsModel = AnalyticsModel;
