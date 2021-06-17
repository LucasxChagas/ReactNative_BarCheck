import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';

export interface ButtonProps {
    color: string
    textColor: string
    text: string
    onPress?: any
}

export function ButtonStart(props: ButtonProps) {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={[styles.button, { backgroundColor: props.color }]}>
                <Text style={[styles.buttonText, { color: props.textColor }]}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    );
}
export function ButtonStartOutline(props: ButtonProps) {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={[styles.buttonOutline, { borderColor: props.color }]}>
                <Text style={[styles.buttonText, { color: props.textColor }]}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        width: 350,
    },
    buttonOutline: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        borderWidth: 2,
        width: 350,
        marginTop: 20
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },

})
