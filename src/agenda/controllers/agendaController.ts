import { AgendaService } from '../services/agendaServices';
import { IAgendaService } from './../interfaces/IAgendaService';
import { APIGatewayProxyHandler } from 'aws-lambda';

const agendaService: IAgendaService = new AgendaService();

export const obterAgendas: APIGatewayProxyHandler = async (event) => {
    const medicos = await agendaService.obterAgendas();

    return {
        statusCode: 200,
        body: JSON.stringify({ medicos }),
    };
};