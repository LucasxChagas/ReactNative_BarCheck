import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, ScrollView } from 'react-native';
import { PerfilHeader, PerfilLista } from './components';
import { HeaderFour, Inputs } from '../components/components';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme, FAB } from 'react-native-paper';
import { Avatar } from 'react-native-elements';
import { NoActivity } from '.././components/components'
import { styles } from './styles'
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native'
import { useUserProvider } from '../../providers/user';

import User from '../../models/user'
import firebase from 'firebase';
import 'firebase/firestore'



export interface PerfilScreenProps {
    user: User
    onEditar(user: User): any;
}

export function PerfilScreen(props: PerfilScreenProps) {

    const { colors } = useTheme();
    const nav = useNavigation();


    const [user, setUser] = useState<any>(null);

    useFocusEffect(() => {
        (async () => {
            const userID = firebase.auth().currentUser?.uid;

            //Busca
            const result = await firebase.firestore().collection('usuarios').doc(userID).get();

            //Joga no state
            setUser(result.data())
        })()
    });

    React.useEffect(() => {
        console.ignoredYellowBox = ['Setting a timer']
        console.disableYellowBox = true;
    }, [])


    return (
        <View style={{ flex: 1, backgroundColor: colors.accent }}>

            <HeaderFour color={colors.text} colorIcon={colors.text} text="Perfil" />
            <ScrollView>
                <ImageBackground imageStyle={{ opacity: 0.3, backgroundColor: 'black' }} style={styles.imageBackground} source={require('../../assets/BackgroundPerfil.png')} blurRadius={3}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={[styles.imageTitulos, { alignSelf: 'flex-end', paddingRight: 20, color: 'white' }]}>RESERVAS</Text>
                            <Text style={[styles.imageSubTitulos, { alignSelf: 'flex-end', paddingRight: 20, color: 'white' }]}>-</Text>
                        </View>
                        <Avatar size={80} rounded source={require('../../assets/profile.png')} >
                            <Avatar.Accessory onPress={() => nav.navigate('editarPerfil', {
                                datanasc: user.datanasc,
                                email: user.email,
                                endereco: user.endereco,
                                id: user.id,
                                nome: user.nome,
                                username: user.username,
                            })} name="pencil-alt" type="font-awesome-5" size={25} />
                        </Avatar>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={[styles.imageTitulos, { alignSelf: 'flex-start', paddingLeft: 20, color: 'white' }]}>BARES</Text>
                            <Text style={[styles.imageSubTitulos, { alignSelf: 'flex-start', paddingLeft: 20, color: 'white' }]}>-</Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', paddingTop: 15, alignItems: 'center' }}>
                        {user && <Text style={[styles.nickname, { color: 'white' }]}>{user.nome}</Text>}
                        {user && <Text style={[styles.dataCadastro, { color: 'white' }]}> {user.username} </Text>}
                    </View>
                </ImageBackground>


                <PerfilLista
                    borderColor={colors.accent} containerTitle="RESERVAS" containerNew="NOVA RESERVA" containerColor={colors.background} actionColor={colors.text}
                    newColor={colors.primary} itemTitle={colors.text} itemSubTitle={colors.accent} />
                <NoActivity textColor={colors.text} textSubColor={colors.text} iconColor={colors.text} buttonTextColor={colors.text} />

            </ScrollView>
            <FAB
                style={{ position: 'absolute', margin: 16, right: 0, bottom: 0, backgroundColor: colors.primary }}
                icon="beer"
                color={colors.text}
                onPress={() => nav.navigate('barDisponivel')}
            />

        </View>
    );
}
