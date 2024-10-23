import { APIGatewayProxyHandler } from 'aws-lambda';
import { AgendamentoDto } from '../dto/agendamentoDto';
import { IAgendamentoService } from '../interfaces/IAgendamentoService';
import { AgendamentoService } from '../services/agendamentoService';

const agendamentoService: IAgendamentoService = new AgendamentoService();

export const agendarConsulta: APIGatewayProxyHandler = async (event) => {
    try {
        if (!event.body) {
            throw ({
                code: 'NULL_BODY',
                message: 'Body NULL, por favor verifique as informações e tende novamente.'
            });
        }

        const agendamento: AgendamentoDto = JSON.parse(event.body);
        const result = await agendamentoService.agendarConsulta(agendamento);

        if (!result.success) {
            return {
                statusCode: 400,
                body: JSON.stringify({ result }),
            }
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ result }),
        };
    }
    catch (err) {
        const error = err as Error;
        //log ${error.stack}

        return {
            statusCode: 400,
            body: JSON.stringify({ error })
        }
    }
};