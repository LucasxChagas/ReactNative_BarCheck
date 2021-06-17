import * as React from 'react';
import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 250,
        height: 250,
    },
    text: {
        color: '#e5daae',
        fontSize: 14,
        marginTop: 70,
        marginBottom: -60,
        textAlign: 'center',
        paddingBottom: 150
    },
    background: {
        width: '100%',
        height: '100%'

    },
    btnContained: {
        width: 300,
    },
    btnOutlined: {
        marginTop: 10,
        width: 300,
        borderWidth: 2,
    },
    btnText: {
        color: '#ffffff'

    },
    imageBackground: {
        width: '100%',
        height: 210,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    imageTitulos: {
        color: '#e1e1e1',
    },
    imageSubTitulos: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
    },
    nickname: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 15
    },
    dataCadastro: {
        paddingTop: 5,
        fontWeight: 'bold',
        color: '#e1e1e1',
        fontSize: 10
    },
    listContainer: {
        marginTop: 10,
        width: '100%',
        height: 150,
    }
});

