import * as React from 'react';
import { View, Text, ImageBackground, Image, ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PerfilHeader, PerfilLista } from './components';
import { HeaderTwo, Inputs } from '../components/components'
import { Formik } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme, TextInput, Button } from 'react-native-paper';
import { Avatar, Input } from 'react-native-elements';
import { NoActivity } from '.././components/components'
import User from '../../models/user';
import { useUserProvider } from '../../providers/user';
import { styles } from './styles'
import firebase from 'firebase'
import { useFocusEffect } from '@react-navigation/native';
import { useState } from 'react';



export interface EditarPerfilScreenProps {
}

// @ts-ignore
export default function EditarPerfilScreen({ route }) {

    const { colors } = useTheme();

    // const route = useRoute();
    const [exibirCalendario, setExibirCalendario] = React.useState(false);
    const userProvider = useUserProvider();

    //@ts-ignore
    const user: User = (route.params?.user == null ? { id: null, nome: null, email: '', username: '', endereco: '', datanasc: moment().format('DD/MM/YYYY') } : route.params?.user)

    const nav = useNavigation();

    console.disableYellowBox = true;

    //@ts-ignore
    //Salvar
    const salvar = async (dados) => {
        userProvider.editar(dados);
        nav.navigate('perfil');
    }

    const deslogar = () => {
        firebase.auth().signOut()
        nav.navigate('prelogin')
    }
    const [users, setUsers] = useState<any>(null);
    useFocusEffect(() => {
        (async () => {
            const userID = firebase.auth().currentUser?.uid;

            //Busca
            const result = await firebase.firestore().collection('usuarios').doc(userID).get();

            //Joga no state
            setUsers(result.data())
        })()
    });

    const [usuario, setUsuario] = useState(route.params?.username);
    const [nome, setNome] = useState(route.params?.nome);
    const [endereco, setEndereco] = useState(route.params?.endereco);
    const [datanasc, setDatanasc] = useState(route.params?.datanasc);

    //@ts-ignore
    const atualizar = async () => {
        firebase.firestore().collection('usuarios').doc(firebase.auth().currentUser?.uid).update({
            username: usuario,
            nome: nome,
            endereco: endereco,
            datanasc: datanasc,
        });
        nav.goBack();
    }

    return (
        <View style={{ backgroundColor: colors.accent }}>
            <HeaderTwo text="Editar Perfil" onPress={() => nav.goBack()} onPressSave={atualizar} />
            <ScrollView>
                <ImageBackground imageStyle={{ opacity: 0.3, backgroundColor: 'black' }} style={styles.imageBackground} source={require('../../assets/BackgroundPerfil.png')} blurRadius={3}>
                    <Icon name='camera' size={25} color="white" />
                </ImageBackground>
                <View style={{ width: '100%', height: '100%', backgroundColor: colors.background }}>
                    <ImageBackground imageStyle={{ opacity: 0.7, backgroundColor: 'black', borderRadius: 500 }}
                        style={{ backgroundColor: 'black', marginLeft: 10, marginTop: -55, height: 100, width: 100, borderRadius: 500, alignItems: 'center', justifyContent: 'center' }}
                        source={require('../../assets/profile.png')} blurRadius={3}>
                        <Icon name='camera' size={25} color="white" />
                    </ImageBackground>

                    <TextInput
                        label="User"
                        style={{ backgroundColor: colors.background, width: '99%', alignSelf: 'flex-end' }}
                        value={usuario} onChangeText={setUsuario}
                    />
                    <TextInput
                        label="Nome"
                        style={{ backgroundColor: colors.background, width: '99%', alignSelf: 'flex-end' }}
                        value={nome} onChangeText={setNome}
                    />
                    <TextInput
                        label="Endereço"
                        style={{ backgroundColor: colors.background, width: '99%', alignSelf: 'flex-end', marginTop: 20 }}
                        value={endereco} onChangeText={setEndereco}
                    />
                    <TextInput
                        label="Aniversário"
                        style={{ backgroundColor: colors.background, width: '99%', alignSelf: 'flex-end' }}
                        value={datanasc} onChangeText={setDatanasc}
                    />
                    <Button labelStyle={{ color: 'white' }} style={{ marginBottom: 140, width: '99%', alignSelf: 'center', marginTop: 15, backgroundColor: colors.primary }} onPress={deslogar} mode="contained" >Sair</Button>
                </View>
            </ScrollView>


        </View>
    );
}
