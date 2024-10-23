import { dateRegex } from "../../util/global.util";
import { AgendamentoDto } from "../dto/agendamentoDto";
import { IAgendamentoService } from "../interfaces/IAgendamentoService";
import { AgendamentoDtoValidator } from "../validators/agendamentoDtoValidator";

export class AgendamentoService implements IAgendamentoService {
    public async agendarConsulta(agendamento: AgendamentoDto): Promise<BaseResponse> {
        const camposInvalidos = this.validarCampos(agendamento);
        if (camposInvalidos.length > 0) {
            return {
                success: false,
                data: camposInvalidos.map(field => ({ field }))
            };
        }


        return {
            success: true,
            data: {
                mensagem: 'Agendamento realizado com sucesso',
                agendamento
            }
        };
    }

    private validarCampos(agendamento: AgendamentoDto): string[] {
        const camposInvalidos: string[] = [];
        const validator = new AgendamentoDtoValidator().validate(agendamento);

        Object.entries(validator).forEach(([key, value]) => {
            if (value !== null || value !== undefined || value !== '') {
                camposInvalidos.push(`${key} - ${value}`);
            }
        });

        return camposInvalidos;
    }
}