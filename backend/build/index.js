"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./config/database"));
class App {
    constructor() {
        this.server = (0, express_1.default)();
        this.routes();
        this.syncDB();
    }
    routes() {
        this.server.route('/').get((req, res) => {
            res.send('Welcome to source');
        });
    }
    syncDB() {
        new database_1.default();
    }
}
const port = 8080;
const app = new App().server;
app.listen(port, () => {
    console.log("Servidor iniciado na porta: " + port);
});
