import * as React from 'react';
import { StyleSheet } from 'react-native';



export const styles = StyleSheet.create({
    titleBox: {
        flexDirection: 'row',
    },
    title: {
        marginTop: 60,
        marginBottom: 10,
        marginLeft: 20,
        fontSize: 26,
        width: 180

    },
    titleIcon: {
        marginTop: 70,
        marginLeft: 140,
        marginBottom: 10,
    },
    sDiv: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    sBar: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: 350,
        marginBottom: 5,
    },

    cDiv: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    cBox: {
        flexDirection: 'row',
        width: 350,
        height: 120,
        borderRadius: 15,
        marginVertical: 10
    },
    cText: {
        color: 'black',
    },
    cBarLogo: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 15,
        borderRadius: 15,
        width: 100,
        height: 100,
    },
    cBarTextBox: {
        marginTop: 10,
    },
    cBarName: {
        fontWeight: 'bold',
        fontSize: 19
    },
    cBarStarsList: {
        marginTop: 5,
        marginBottom: 5,
        flexDirection: 'row',
    },
    cBarStarRate: {
        marginLeft: 5,
        marginTop: 1,
        color: 'gray',
        fontSize: 15,
    },
    cBarButton: {
        marginTop: 4,
        width: 100,
        height: 28,
        borderRadius: 8,
    },
    cBarButtonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginVertical: 4,
    }
});

