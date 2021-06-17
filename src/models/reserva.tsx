/**
 * Classe com os atributos que a tarefa precisa ter
 */
export default class Reserva {
    constructor(
        public id?: string,
        public nomeReserva?: string,
        public horario?: string,
        public data?: string,
    ) { }
}
