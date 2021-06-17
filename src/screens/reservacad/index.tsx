import * as React from 'react';
import { View, Text, Image, StyleSheet, Platform } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme, FAB, TextInput, Button } from 'react-native-paper';
import { Input } from 'react-native-elements';
import { Formik } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';

import Reserva from '../../models/reserva';
import * as Permissions from 'expo-permissions';
import { useReservasProvider } from '../../providers/reserva';

import { Header, HeaderThree, Inputs } from '../components/components'
import { FavItem } from './components';

export interface ReservaCadScreenProps {

}

export function ReservaCadScreen(props: ReservaCadScreenProps) {

    const { colors } = useTheme();

    const route = useRoute();
    const [exibirCalendario, setExibirCalendario] = React.useState(false);
    const reservasProvider = useReservasProvider();

    //@ts-ignore
    const reserva: Reserva = (route.params?.reserva == null ? { id: null, nomeReserva: '', horario: '', data: moment().format('DD/MM/YYYY') } : route.params?.reserva)
    const titulo = (reserva.id == null ? 'Realizar ' : 'Editar ') + "Reserva";

    const nav = useNavigation();


    //@ts-ignore
    //Salvar
    const salvar = async (dados) => {
        console.log(dados);
        if (!dados.id)
            reservasProvider.cadastrar(dados);
        else
            reservasProvider.editar(dados);
        nav.navigate('reservas');
    }

    return (

        <View style={{ flex: 1 }}>
            <View>
                <Header text={titulo} onPress={() => nav.goBack()} />
            </View>
            <View style={{ backgroundColor: colors.background, width: '100%', height: 135 }}>

                <View style={{ backgroundColor: colors.accent, width: '95%', height: 125, margin: 5, borderRadius: 5 }}>
                    <View style={{ flexDirection: 'row', alignContent: 'center' }}>
                        <Image style={{ width: 90, height: 90, borderRadius: 5, marginTop: 18, marginLeft: 10 }}
                            source={require('../../assets/MinhaCasaRestoBar.png')} />
                        <View style={{ marginTop: 18, marginLeft: 8 }}>
                            <Text style={{ color: colors.text, fontWeight: 'bold', fontSize: 18 }}>Minha Casa RestoBar</Text>
                            <Text style={{ color: colors.placeholder }}>Praça do Conjunto Inocoop, S/N </Text>
                            <Text style={{ color: colors.placeholder }}>Cidade Universitária, Maceió - AL </Text>
                        </View>
                    </View>
                </View>
            </View>

            <Formik
                initialValues={reserva}
                validationSchema={Yup.object().shape({
                    nomeReserva: Yup.string().required('Nome obriatório.'),
                    horario: Yup.string().required('Horário obriatório.'),
                    data: Yup.string().required('Data obrigatória.')
                })}
                onSubmit={salvar}
            >
                {({ values, setFieldValue, handleSubmit, handleChange, errors, touched, handleBlur, setFieldTouched }) => (
                    <View style={{ padding: 5 }}>

                        {/* NOME RESERVA */}
                        <Inputs placeholder="Digite o nome do responsável." value={values.nomeReserva} onChangeText={handleChange('nomeReserva')} onBlur={handleBlur("nomeReserva")}
                            errorMensage={errors.nomeReserva} label="Nome do Responsável" />
                        {touched.nomeReserva}

                        {/* HORA */}
                        <Inputs placeholder="Digite o horário." value={values.horario} onChangeText={handleChange('horario')} onBlur={handleBlur("horario")}
                            errorMensage={errors.horario} label="Horário" />
                        {touched.horario}


                        {/* DATA */}
                        {/* VERSÃO WEB */}
                        {Platform.OS == "web" &&
                            <><Text style={{ marginLeft: 5 }}>Data</Text><Input maxLength={10} placeholder="Digite a data" value={values.data} onChangeText={handleChange('data')} onBlur={handleBlur("data")}></Input></>
                        }

                        {/* VERSÃO NATIVO */}
                        {Platform.OS != "web" &&
                            <TouchableOpacity onPress={() => setExibirCalendario(true)}>
                                <Inputs placeholder="" value={values.data} onChangeText={handleChange('data')} onBlur={handleBlur("data")}
                                    errorMensage={errors.data} label="Data" />
                            </TouchableOpacity>}
                        {/* <TouchableOpacity onPress={() => setExibirCalendario(true)}>
                                 <Text style={{ fontSize: 20, marginBottom: 10 }}>{values.data}</Text>
                            </TouchableOpacity> */}
                        {exibirCalendario && <DateTimePicker value={moment(values.data, 'DD/MM/YYYY').toDate()}
                            mode={'date'}
                            maximumDate={new Date(2030, 11, 31)}
                            minimumDate={new Date(2020, 0, 1)}
                            display="default"
                            onChange={(event: any, data: any) => {
                                const dataFormatada = moment(data).format('DD/MM/YYYY');
                                setFieldValue('data', dataFormatada);
                                setFieldTouched('data', true);
                                setExibirCalendario(false);
                            }} />}
                        {touched.data && errors.data && <Text style={styles.erro}>{errors.data}</Text>}

                        {/* BOTÃO SALVAR */}
                        <Button mode="contained" style={{ width: '95%', alignSelf: 'center' }} onPress={() => handleSubmit()}> SALVAR </Button>
                    </View>)}
            </Formik>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    img: {
        height: 300,
        width: 300
    },
    erro: { fontSize: 20, textAlign: "center", marginBottom: 20, marginTop: -10, color: 'red' }
});