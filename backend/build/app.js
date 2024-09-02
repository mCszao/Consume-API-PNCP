"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./config/database"));
const router_1 = __importDefault(require("./routes/router"));
class App {
    constructor() {
        this.server = (0, express_1.default)();
        this.routes();
        this.syncDB();
    }
    routes() {
        this.server.use(router_1.default);
    }
    syncDB() {
        new database_1.default();
    }
}
exports.default = new App();
