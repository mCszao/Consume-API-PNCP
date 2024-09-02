"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultasRepository = void 0;
const database_1 = __importDefault(require("../../config/database"));
const Consultas_model_1 = require("../model/Consultas.model");
class ConsultasRepository {
    constructor() {
        this.repository = new database_1.default().connection;
    }
    save(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.repository.query('INSERT INTO consultas (id, razao_social, cnpj, total_valor_contratos_periodo, data_inicial, data_final, data_consulta) VALUES ($1, $2, $3, $4, $5, $6, $7)', [entity.id, entity.razao_social, entity.cnpj, entity.total_valor_contratos_periodo, entity.data_inicial, entity.data_final, entity.data_consulta]);
            }
            catch (error) {
                console.log('Error: ' + error);
            }
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const list = [];
            try {
                let response = yield this.repository.query('SELECT * FROM consultas');
                response.rows.forEach((consulta) => list.push(Consultas_model_1.ConsultasModel.from(consulta.id, consulta.razao_social, consulta.cnpj, consulta.total_valor_contratos_periodo, consulta.data_inicial, consulta.data_final, consulta.data_consulta)));
            }
            catch (error) {
                console.error(error);
            }
            return list;
        });
    }
}
exports.ConsultasRepository = ConsultasRepository;
