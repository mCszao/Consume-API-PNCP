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
const Analytics_model_1 = require("../model/Analytics.model");
const Analytics_repository_1 = require("../repository/Analytics.repository");
class AnalyticsService {
    constructor() {
        this.AnalyticsRepo = new Analytics_repository_1.AnalyticsRepository();
    }
    insert(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = (0, uuid_1.v4)();
            const analyticsModel = new Analytics_model_1.AnalyticsModel(id, dto);
            yield this.AnalyticsRepo.save(analyticsModel);
        });
    }
    select() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.AnalyticsRepo.list();
        });
    }
}
exports.default = new AnalyticsService();
