import { useTheme } from 'react-native-paper';
import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Input, Button, colors } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


// PerfilHeader
export interface PerfilHeaderProps {
    text: string;
    color?: string;
    colorIcon: string;

}

export function PerfilHeader(props: PerfilHeaderProps) {
    return (
        <View style={styles.container}>
            <Text style={[styles.texto, { color: props.color }]}>{props.text}</Text>
            <Icon name='cogs' size={25} color={props.colorIcon} />
        </View>
    );
}

export interface PerfilListaProps {
    containerTitle: string;
    containerNew: string;
    containerColor: string;
    actionColor: string;
    newColor: string;
    borderColor: string;
    itemTitle: string;
    itemSubTitle: string;

}

export function PerfilLista(props: PerfilListaProps) {
    return (
        <View style={[styles.containerRes, { backgroundColor: props.containerColor }]}>
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, paddingVertical: 10, }}>
                    <Text style={[styles.actionContainerRes, { color: props.actionColor }]}>{props.containerTitle} ►</Text>
                    <Text style={[styles.newContainerRes, { color: props.newColor }]}>{props.containerNew}</Text>
                </View>
                <View style={[styles.itemRes, { borderColor: props.borderColor }]}>
                    <View style={{ flexDirection: 'row' }}>
                        {/* <Image style={styles.itemImage} source={require('./../../assets/MinhaCasaRestoBar.png')} /> */}
                        <View style={{ backgroundColor: '#d3d2d1', width: 40, height: 40, marginLeft: 10, marginTop: 10, borderRadius: 8, }} />
                        <View style={{ backgroundColor: '#d3d2d1', width: 40, height: 40, marginLeft: 10, marginTop: 10, borderRadius: 8, }} />
                        <View style={{ backgroundColor: '#d3d2d1', width: 40, height: 40, marginLeft: 10, marginTop: 10, borderRadius: 8, }} />
                    </View>
                    <Text style={[styles.itemResTitle, { color: props.itemTitle }]}>Lista de Reservas</Text>
                    <Text style={[styles.itemResSubTitle, { color: props.itemSubTitle }]}>- item</Text>
                    <Text style={[styles.itemResSubTitle, { color: props.itemSubTitle }]}>Atualizado: --, 2021</Text>
                </View>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        backgroundColor: '#f7931e',
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-between'
    },
    texto: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    containerRes: {
        width: '100%',
        height: 200,
    },
    actionContainerRes: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },
    newContainerRes: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 15,
    },
    itemRes: {
        marginLeft: 10,
        width: 185,
        height: 146,
        borderWidth: 0.4,
        borderRadius: 5,
    },
    itemImage: {
        marginTop: 10,
        marginLeft: 10,
        width: 40,
        height: 40,
        borderRadius: 8,
    },
    itemResTitle: {
        marginTop: 18,
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 17
    },
    itemResSubTitle: {
        marginTop: 2,
        marginLeft: 10,
    }

})
