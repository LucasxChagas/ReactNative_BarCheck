import React, { useState } from 'react';
import { View, StyleSheet, Text, ImageBackground, ActivityIndicator, Image, Alert, TouchableOpacity, ToastAndroid, ScrollView } from 'react-native';
import { LoginButtons, Inputs } from '../components/components';
import { styles } from "./syles";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { useTheme, Button, TextInput } from 'react-native-paper';
import firebase from 'firebase'
import 'firebase/firestore'

export interface CadastroScreenProps { }

export default function CadastroScreen(props: CadastroScreenProps) {

    const nav = useNavigation();
    const [erro, setErro] = useState('');
    const { colors } = useTheme();



    const cadastrar = async (dados: any) => {

        firebase.auth().createUserWithEmailAndPassword(dados.email, dados.senha)
            .then((usuario) => {
                if (usuario.user)
                    firebase.firestore().collection('usuarios').doc(usuario.user?.uid).set({
                        username: dados.username,
                        email: dados.email
                    })

                // Realtime Database
                // firebase.database().ref('usuarios').child(usuario.user?.uid).set(dados)
                nav.navigate('app')
            })

            .catch(erro => {
                console.log(erro.code, erro.message)
                if (erro.code == 'auth/email-already-in-use')
                    Alert.alert(
                        "E-mail já cadastrado!",
                        "O e-mail em questão, já possui cadastro.",
                        [
                            {
                                text: "OK",
                            }
                        ]
                    );
                else
                    Alert.alert(
                        "Algo deu errado!",
                        "Não foi possível cadastrar usuário.",
                        [
                            {
                                text: "OK",
                            }
                        ]
                    ); ''
            })
    }

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Text style={[styles.loginT, { color: colors.text }]}>Cadastre-se!</Text>
            <Text style={[styles.loginTS, { color: colors.text }]}>Faça o cadastro para continuar.</Text>
            <Formik
                initialValues={{ username: '', email: '', senha: '' }}
                validationSchema={Yup.object().shape({
                    username: Yup.string().required('Username obrigatório.'),
                    email: Yup.string().required('E-mail obrigatório.').email('Digite um e-mail válido.'),
                    senha: Yup.string().required('Senha obrigatória.').min(6, 'A senha precisa ter no mínimo, 6 caracteres.')
                })}
                onSubmit={cadastrar}>
                {({ errors, handleChange, handleSubmit, isSubmitting, touched, handleBlur }) => (
                    <View style={{ alignItems: 'center' }}>

                        <Inputs icon="user" errorMensage={errors.username} label="Username" placeholder="Digite o seu Username." onBlur={handleBlur("username")} onChangeText={handleChange("username")} />
                        {touched.username}
                        <Inputs icon="envelope" errorMensage={errors.email} label="E-mail" placeholder="Digite o seu e-mail." onBlur={handleBlur("email")} onChangeText={handleChange("email")} />
                        {touched.email}
                        <Inputs icon="lock" errorMensage={errors.senha} label="Senha" placeholder="Digite a sua senha." senha onBlur={handleBlur("senha")} onChangeText={handleChange("senha")} />
                        {touched.senha}


                        {erro != "" && <Text style={[styles.erroLogin]}>{erro}</Text>}
                        {isSubmitting && <Button labelStyle={{ color: 'white' }} style={[styles.btn, { backgroundColor: colors.primary }]} loading mode="contained">Cadastrando</Button>}
                        {!isSubmitting && <Button labelStyle={{ color: 'white' }} style={[styles.btn, { backgroundColor: colors.primary }]} icon="sign-in" mode="contained" onPress={() => handleSubmit()}>Cadastrar-se</Button>}
                        <Text style={{ color: colors.text, marginBottom: 10, marginTop: 10, fontWeight: 'bold' }}> Ou </Text>
                        <Button labelStyle={{ color: 'white' }} style={[styles.btn, { backgroundColor: '#2467b6' }]} icon="facebook" mode="contained" onPress={() => console.log('Login com Facebook')}>Cadastre-se com o Facebook</Button>
                        <Button labelStyle={{ color: 'white' }} style={[styles.btn, { backgroundColor: '#ff4131', marginTop: 10, }]} icon="google" mode="contained" onPress={() => console.log('Login com Google')}>Cadastre-se com o Google</Button>
                    </View>
                )}
            </Formik>
            <Text style={[styles.cadastro, { color: colors.text }]}>
                Já possui cadastro? {'\n'} Toque <Text onPress={() => nav.navigate('login')} style={{ textDecorationLine: 'underline', fontWeight: 'bold' }}>aqui</Text> para fazer o login!
            </Text>
        </View>
    );
}



