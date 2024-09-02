import express, { Request, Response } from 'express';
import cors from 'cors';
import AnalyticsController from '../analytics/controller/Consultas.controller';

const router = express.Router();
router.use(express.json({limit: '10mb'}));
router.use(express.urlencoded({ limit: '10mb', extended: true }));
router.use(cors());

router.post('/add', AnalyticsController.add);
router.get('/consult', AnalyticsController.getAll);
router.get('/', (req: Request, res: Response) => {
    res.send('Bem vindo a raiz da API');
})

export default router;