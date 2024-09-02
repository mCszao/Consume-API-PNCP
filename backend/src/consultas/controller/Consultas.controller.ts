import { Request, Response } from 'express';
import { IConsultasDTO } from '../dto/Consultas.dto';
import ConsultasService from '../service/Consultas.service';
class ConsultasController {
    public async add(req: Request, res: Response): Promise<Response> {
        try {
            console.log('Nova requisição');
            const dto = req.body as IConsultasDTO;
            console.log(dto);
            await ConsultasService.insert(dto);
            return res.status(200).json(dto);
        } catch (error) {
            return res.status(500).json(error);
        }
    }


    public async getAll(req: Request, res: Response,): Promise<Response> {
        let result = [] as any;
        try {
            result = await ConsultasService.select();
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    } 
}

export default new ConsultasController();