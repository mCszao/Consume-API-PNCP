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
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const Consultas_repository_1 = require("../repository/Consultas.repository");
const Consultas_model_1 = require("../model/Consultas.model");
class ConsultasService {
    constructor() {
        this.ConsultasRepo = new Consultas_repository_1.ConsultasRepository();
    }
    insert(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = (0, uuid_1.v4)();
            const consultasModel = new Consultas_model_1.ConsultasModel(id, dto);
            yield this.ConsultasRepo.save(consultasModel);
        });
    }
    select() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.ConsultasRepo.list();
        });
    }
}
exports.default = new ConsultasService();
