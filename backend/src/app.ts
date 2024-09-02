import express, { Application } from "express";
import Database from "./config/database";
import router from "./routes/router";

class App {
    public server: Application;

    constructor() {
        this.server = express();
        this.routes();
        this.syncDB();
    }

    protected routes(): void {
        this.server.use(router);
    }

    protected syncDB(): void {
        new Database();
    }
}

export default new App();
