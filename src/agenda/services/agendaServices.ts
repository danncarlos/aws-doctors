import { IAgendaService } from "../interfaces/IAgendaService";
import { IMedico } from "../interfaces/IMedico";

export class AgendaService implements IAgendaService {
    public async obterAgendas(): Promise<IMedico[]> {
        return [
            {
                id: 1,
                nome: "Dr. João Silva",
                especialidade: "Cardiologista",
                horarios_disponiveis: [
                    "2024-10-05 09:00",
                    "2024-10-05 10:00",
                    "2024-10-05 11:00"
                ]
            },
            {
                id: 2,
                nome: "Dra. Maria Souza",
                especialidade: "Dermatologista",
                horarios_disponiveis: [
                    "2024-10-06 14:00",
                    "2024-10-06 15:00"
                ]
            },
            {
                id: 3,
                nome: "Dr. Carlos Pereira",
                especialidade: "Neurologista",
                horarios_disponiveis: [
                    "2024-10-07 08:00",
                    "2024-10-07 09:30",
                    "2024-10-07 11:00"
                ]
            },
            {
                id: 4,
                nome: "Dra. Ana Clara",
                especialidade: "Pediatra",
                horarios_disponiveis: [
                    "2024-10-08 10:00",
                    "2024-10-08 11:30",
                    "2024-10-08 13:00"
                ]
            },
            {
                id: 5,
                nome: "Dr. Roberto Lima",
                especialidade: "Ortopedista",
                horarios_disponiveis: [
                    "2024-10-09 14:00",
                    "2024-10-09 15:30",
                    "2024-10-09 16:30"
                ]
            },
            {
                id: 6,
                nome: "Dra. Fernanda Almeida",
                especialidade: "Ginecologista",
                horarios_disponiveis: [
                    "2024-10-10 09:00",
                    "2024-10-10 10:30",
                    "2024-10-10 12:00"
                ]
            },
            {
                id: 7,
                nome: "Dr. Felipe Martins",
                especialidade: "Oftalmologista",
                horarios_disponiveis: [
                    "2024-10-11 11:00",
                    "2024-10-11 12:30",
                    "2024-10-11 14:00"
                ]
            },
            {
                id: 8,
                nome: "Dra. Laura Silva",
                especialidade: "Endocrinologista",
                horarios_disponiveis: [
                    "2024-10-12 08:30",
                    "2024-10-12 10:00",
                    "2024-10-12 11:30"
                ]
            }
        ];
    }
}