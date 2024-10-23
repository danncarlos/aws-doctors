import { Validator } from 'fluentvalidation-ts';
import { AgendamentoDto } from '../dto/agendamentoDto';
import { dateRegex } from '../../util/global.util';

class AgendamentoDtoValidator extends Validator<AgendamentoDto> {
    constructor() {
        super();

        this.ruleFor('medicoId')
            .notNull()
            .greaterThanOrEqualTo(0)
            .withMessage('medicoId não pode ser nulo');

        this.ruleFor('pacienteNome')
            .notNull()
            .notEmpty()
            .withMessage('pacienteNome não pode ser nulo ou vazio');

        this.ruleFor('dtAgendamento')
            .matches(dateRegex)
            .withMessage('dtAgendamento deve estar no formato YYYY-MM-DD HH:mm');
    }
}

export { AgendamentoDtoValidator }