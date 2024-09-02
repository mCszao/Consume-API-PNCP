"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Consultas_controller_1 = __importDefault(require("../consultas/controller/Consultas.controller"));
const router = express_1.default.Router();
router.use(express_1.default.json({ limit: '10mb' }));
router.use(express_1.default.urlencoded({ limit: '10mb', extended: true }));
router.use((0, cors_1.default)());
router.post('/add', Consultas_controller_1.default.add);
router.get('/consult', Consultas_controller_1.default.getAll);
router.get('/', (req, res) => {
    res.send('Bem vindo a raiz da API');
});
exports.default = router;
