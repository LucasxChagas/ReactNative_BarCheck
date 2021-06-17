import * as React from 'react';
import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    containerSearch: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchBar: {
        width: 330,
        height: 45,
        borderRadius: 3
    },
    mapContent: {
        backgroundColor: '#d3d2d1',
        height: '100%'
    },
    mapActions: {
        marginRight: 8,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    actionContent: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        marginVertical: 5,
        borderRadius: 5,
    },
    mensageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 400,
        borderRadius: 10,
        width: 350,
        height: 120,
        backgroundColor: 'red'
    },
    titleMensage: {
        marginTop: -5,
        marginVertical: 6,
        fontWeight: 'bold'
    },
    subTitleMensage: {
        textAlign: 'center',
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black'
    },


});

