import { v4 } from 'uuid';
import { IConsultasDTO } from '../dto/Consultas.dto';
import { ConsultasRepository } from '../repository/Consultas.repository';
import { ConsultasModel } from '../model/Consultas.model';



class ConsultasService {
    private ConsultasRepo = new ConsultasRepository();

    public async insert(dto: IConsultasDTO) {
        const id = v4();
        const consultasModel = new ConsultasModel(id, dto);
        await this.ConsultasRepo.save(consultasModel);
    }

    public async select() {
        return this.ConsultasRepo.list();
    }

}

export default new ConsultasService();