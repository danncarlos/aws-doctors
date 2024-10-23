import { AgendamentoService } from '../agendamentos/services/agendamentoService';
import { AgendamentoDto } from '../agendamentos/dto/agendamentoDto';

describe('Agendamento Service - Validar Campos', () => {
    let service: AgendamentoService;

    beforeEach(() => {
        service = new AgendamentoService();
    });

    it('deve retornar erro se algum campo estiver faltando', async () => {
        const agendamento: Partial<AgendamentoDto> = {
            medicoId: 1,
            pacienteNome: ''
        };
        const result = await service.agendarConsulta(agendamento as AgendamentoDto);

        expect(result.success).toBe(false);
        expect(result.data[0].field).toBe('pacienteNome - pacienteNome não pode ser nulo ou vazio');
    });

    it('deve retornar sucesso se todos os campos estiverem presentes', async () => {
        const agendamento: AgendamentoDto = {
            medicoId: 1,
            pacienteNome: 'John Doe',
            dtAgendamento: '2024-10-06 09:00'
        };
        const result = await service.agendarConsulta(agendamento);

        expect(result.success).toBe(true);
        expect(result.data.mensagem).toBe('Agendamento realizado com sucesso');
    });
});
