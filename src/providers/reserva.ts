//@ts-nocheck
import firebase from 'firebase'
import 'firebase/firestore'
import Reserva from '../models/reserva';

export class ReservasProvider {

    private userID: string;
    private db: firebase.firestore.CollectionReference;

    public constructor() {
        this.userID = firebase.auth().currentUser?.uid
        this.db = firebase.firestore().collection('reservas');
    }

    /**
        * Cadastra uma nova reserva
        * @param reserva 
    */
    cadastrar(reserva: Reserva) {
        let doc = this.db.doc();
        reserva.usuarioID = this.userID;
        reserva.id = doc.id;
        doc.set(reserva);
    }

    /**
        * Edita uma reserva
        * @param reserva 
    */
    editar(reserva: Reserva) {
        this.db.doc(reserva.id).set(reserva);
    }

    /**
        * Exclui uma reserva
        * @param id 
    */
    excluir(id: string) {
        this.db.doc(id).delete();
    }

    /**
        * Busca todas as reservas de um usuário
    */

    async buscarTodos(): Promise<Reserva[]> {
        let resultado = await this.db.where('usuarioID', '==', this.userID).get();
        let reservas = [];
        resultado.forEach(reserva => {
            reservas.push(reserva.data())
        })
        return reservas;
    }

    /**
        * Retorna a reserva com ID informado
        * @param id 
    */
    async buscar(id: string): Promise<Reserva> {
        let resultado = await this.db.doc(id).get();
        let reserva = null
        if (resultado.exists) reserva = resultado.data();
        return reserva;
    }

}

export const useReservasProvider = () => new ReservasProvider()