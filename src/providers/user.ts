//@ts-nocheck
import firebase from 'firebase'
import 'firebase/firestore'
import User from '../models/user';

export class UserProvider {

    private userID: string;
    private db: firebase.firestore.CollectionReference;

    public constructor() {
        this.userID = firebase.auth().currentUser?.uid
        this.db = firebase.firestore().collection('usuarios');
    }

    /**
        * Edita uma usuario
        * @param user 
    */
    editar(user: User) {
        this.db.doc(firebase.auth().currentUser?.uid).set(user);
    }

    /**
        * Busca os dados do usuario
    */

    async buscar(id: string): Promise<User> {
        let resultado = await this.db.doc(id).get();
        let user = null
        if (resultado.exists) user = resultado.data();
        return user;
    }

}

export const useUserProvider = () => new UserProvider()