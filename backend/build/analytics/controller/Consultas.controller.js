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
const Consultas_service_1 = __importDefault(require("../service/Consultas.service"));
class ConsultasController {
    add(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('Nova requisição');
                const dto = req.body;
                console.log(dto);
                yield Consultas_service_1.default.insert(dto);
                return res.status(200).json(dto);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = [];
            try {
                result = yield Consultas_service_1.default.select();
                return res.status(200).json(result);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    }
}
exports.default = new ConsultasController();
