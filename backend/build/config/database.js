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
const pg_1 = require("pg");
class Database {
    constructor() {
        this.USERNAME_DB = 'postgres';
        this.PASSWORD_DB = 'root';
        this.PORT_DB = 5432;
        this.DATABASE_NAME_DB = 'pncp_contract_db';
        this.HOST_DB = 'localhost';
        this.connection = new pg_1.Pool({
            user: this.USERNAME_DB,
            host: this.HOST_DB,
            database: this.DATABASE_NAME_DB,
            password: this.PASSWORD_DB,
            port: this.PORT_DB,
        });
        this.testConnect();
    }
    testConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.connection.query('SELECT NOW()');
                console.log('Connection with database has been established successfully');
            }
            catch (error) {
                console.log('Connection with database has been failed');
            }
        });
    }
}
exports.default = Database;
