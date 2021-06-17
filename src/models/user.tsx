/**
 * Classe com os atributos que a tarefa precisa ter
 */
export default class User {
    constructor(
        public id?: string,
        public email?: string,
        public nome?: string,
        public username?: string,
        public endereco?: string,
        public datanasc?: string,
    ) { }
}
