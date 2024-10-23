import { IMedico } from "./IMedico";

export interface IAgendaService { 
    obterAgendas(): Promise<IMedico[]>;
}