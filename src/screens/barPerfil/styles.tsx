import * as React from 'react';
import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageBackground: {
        width: '100%',
        height: 280,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    barContainer: {
        width: '90%',
        height: 250,
        borderRadius: 10,
    },
    barProfile: {
        width: '100%',
        height: 150,
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        flexDirection: 'row'
    },
    barActions: {
        width: '100%',
        height: 50,
        flexDirection: 'row'
    },
    actionItem: {
        width: '50%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderTopWidth: 1,
        borderLeftWidth: 1
    },
    actionItemText: {
        fontWeight: 'bold',
        fontSize: 12
    },
    barProfileLogoContent: {
        alignItems: 'center',
        width: '30%',
        height: '100%',

    },
    barProfileLogo: {
        marginTop: 10,
        width: 90,
        height: 90,
        borderRadius: 10,
    },
    barProfileContent: {
        marginTop: 10,
        width: 240,
        height: 130,
    },
    barProfileContentTitle: {
        marginBottom: 8,
        fontWeight: 'bold',
        fontSize: 18,
    },
    barProfileContentDesc: {
        fontSize: 14,
    },
    barDetails: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        borderStyle: 'dashed',
        borderBottomWidth: 1,
    },
    barDetailsLeft: {
        width: '30%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    barDetailsRight: {
        width: '70%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    barDetailsText: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    about: {
        marginTop: 10,
        width: '100%',
        height: 200,
    },
    aboutTitle: {
        marginTop: 10,
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 15
    },
    aboutDesc: {
        marginTop: 5,
        marginLeft: 10,
        fontSize: 15
    },
    fotos: {
        marginTop: 10,
        width: '100%',
        height: 130,
    },
    fotosTitle: {
        marginTop: 10,
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 15
    },
    fotosImgs: {
        marginTop: 8,
        marginLeft: 10,
        borderRadius: 10,
        width: 55,
        height: 55,
    },
    maisFotosImgs: {
        marginTop: 8,
        marginLeft: 10,
        borderRadius: 10,
        width: 55,
        height: 55,
    },

    // modal
    centeredView: {
        flex: 1,
        backgroundColor: 'rgba(48,48,48, 0.8)',
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        width: 350,
        height: 350,
        elevation: 10
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }



});

