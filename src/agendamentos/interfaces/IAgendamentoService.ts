import { AgendamentoDto } from "../dto/agendamentoDto";

export interface IAgendamentoService { 
    agendarConsulta(agendamento: AgendamentoDto): Promise<BaseResponse>
}