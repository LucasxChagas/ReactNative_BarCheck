import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button, useTheme } from 'react-native-paper'
import Reserva from '../../models/reserva';

export interface ItemReservaProps {
    reserva: Reserva
    onEditar(reserva: Reserva): any;
    onExcluir(id: any): any;
}

export function ItemReserva(props: ItemReservaProps) {

    const { reserva } = props;
    const { colors } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Image style={{ width: 100, height: 100, borderRadius: 5, marginTop: 5, marginLeft: 10 }}
                source={require('../../assets/MinhaCasaRestoBar.png')} />
            <View style={{ marginLeft: 8 }}>
                <Text style={styles.title}>Minha Casa RestoBar</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontWeight: 'bold', }}>Horário: </Text>
                    <Text>{reserva.horario}</Text>
                    <Text style={{ fontWeight: 'bold', marginLeft: 15 }}>Data: </Text>
                    <Text>{reserva.data}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontWeight: 'bold', }}>Responsável: </Text>
                    <Text>{reserva.nomeReserva}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 2 }}>
                    <Button style={[{ width: 90, borderRadius: 8, backgroundColor: colors.primary }]} mode="contained" onPress={() => props.onEditar(reserva)}>Editar</Button>
                    <Button style={[{ marginLeft: 5, width: 135, borderRadius: 8, backgroundColor: 'red' }]} mode="contained" onPress={() => props.onExcluir(reserva.id)}>Cancelar</Button>
                </View>
            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        marginTop: 10,
        width: '95%',
        height: 130,
        alignSelf: 'center',
        borderRadius: 8,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    }
});