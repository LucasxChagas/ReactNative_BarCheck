import * as React from 'react';
import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 200,
    },
    btnRound: {
        borderRadius: 30,
    },
    h1: {
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
    loginT: {
        marginTop: 80,
        fontSize: 40,
    },
    loginTS: {
        fontSize: 14,
        marginTop: -7,
        marginBottom: 45
    },
    loginS: {
        textAlign: 'center',
        color: '#f6f4c7',
        fontSize: 14,
        marginBottom: 30
    },
    erro: {
        color: "white", fontSize: 20,
        textAlign: "right",
        marginBottom: 10,
        marginTop: -20
    },
    erroLogin: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white'
    },
    cadastro: {
        marginTop: 30,
        marginBottom: -50,

    },
    btn: {
        width: 300,
        height: 40
    }

});