import { QueryResult } from 'pg';
import Database from '../../config/database';
import { ConsultasModel } from '../model/Consultas.model';


interface IConsultasRepository {
    save(entity: ConsultasModel): Promise<void>;
    list(): Promise<ConsultasModel[]>;
}

export class ConsultasRepository implements IConsultasRepository {
    private repository = new Database().connection;

    public async save(entity: ConsultasModel): Promise<void> {
        try {
            await this.repository.query(
                'INSERT INTO consultas (id, razao_social, cnpj, total_valor_contratos_periodo, data_inicial, data_final, data_consulta) VALUES ($1, $2, $3, $4, $5, $6, $7)',
                [entity.id, entity.razao_social, entity.cnpj, entity.total_valor_contratos_periodo, entity.data_inicial, entity.data_final, entity.data_consulta]
            );
        } catch (error) {
            console.log('Error: ' + error);
        }
    }

    public async list(): Promise<ConsultasModel[]>  {
        const list = [] as any;
        try {
           let response = await this.repository.query('SELECT * FROM consultas') as QueryResult<ConsultasModel>;
           response.rows.forEach((consulta) => list.push(ConsultasModel.from(
            consulta.id,
            consulta.razao_social,
            consulta.cnpj,
            consulta.total_valor_contratos_periodo,
            consulta.data_inicial,
            consulta.data_final, 
            consulta.data_consulta)));
        } catch (error) {
            console.error(error)
        }
        return list;
    }   

}