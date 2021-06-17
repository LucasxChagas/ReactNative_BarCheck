import { useTheme } from 'react-native-paper';
import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export interface InputsProps {
    text?: string;
    icon?: string;
    errorMensage?: any;
    placeholder: string;
    senha?: boolean;
    label: string;
    onChangeText(text: string): void;
    onBlur?: any;
    value?: string;
}

export function Inputs(props: InputsProps) {

    const { colors } = useTheme();

    return (
        <View>
            {props.text && <Text style={styles.texto}>{props.text}</Text>}
            <Input
                onBlur={props.onBlur}
                placeholder={props.placeholder}
                leftIcon={{ type: 'font-awesome', name: props.icon, size: 20, color: '#f7931e' }}
                leftIconContainerStyle={styles.icon}
                placeholderTextColor={colors.placeholder}
                errorStyle={{ color: colors.text }}
                errorMessage={props.errorMensage}
                inputContainerStyle={styles.containerInput}
                label={props.label}
                labelStyle={styles.label}
                onChangeText={(text) => props.onChangeText(text)}
                secureTextEntry={props.senha}
                inputStyle={{ color: colors.text }}
                value={props.value}
            />
        </View>
    );
}


// LoginButtons
export interface LoginButtonsProps {
    color?: string
    title?: string
    textColor?: string
    colorIcon?: string
    nameIcon?: string
    onPress?: any
}

export function LoginButtons(props: LoginButtonsProps) {
    return (
        <View>
            <Button
                buttonStyle={[styles.button, { backgroundColor: props.color }]}
                titleStyle={styles.buttonText}
                iconContainerStyle={styles.icon}
                title={props.title}
                onPress={props.onPress}
                icon={{ type: 'font-awesome', name: props.nameIcon, size: 25, color: props.colorIcon }}
            />
        </View>
    );

}
// /LoginButtons

// NoActivity
export interface NoActivityProps {
    textColor?: string;
    textSubColor?: string;
    iconColor?: string;
    buttonTextColor?: string;
}

export function NoActivity(props: NoActivityProps) {
    return (
        <View style={{ width: '100%', height: 300, justifyContent: 'center', alignItems: 'center' }}>
            <Icon name='frown-o' size={50} color={props.iconColor} />
            <Text style={[styles.textActivity, { color: props.textColor }]}>Você ainda não tem atividade</Text>
            <Text style={[styles.textSubActivity, { color: props.textSubColor }]}>Retorne e experimente novas reservas!</Text>
            <Button title=" CONFERIR " titleStyle={{ color: props.buttonTextColor }} buttonStyle={styles.buttonActivity} />
        </View>
    );

}
// /NoActivity


// Header
export interface Header {
    text: string;
    onPress?: any;

}

export function Header(props: Header) {
    return (
        <View style={styles.headerContainer}>
            <View style={{ flexDirection: 'row' }}>
                <Icon name='arrow-left' size={25} onPress={props.onPress} />
                <Text style={{ fontWeight: 'bold', paddingLeft: 15, fontSize: 19 }}>{props.text}</Text>
            </View>
        </View>
    );
}


export interface HeaderTwoProps {
    text: string;
    onPress?: any;
    onPressSave?: any;

}

export function HeaderTwo(props: HeaderTwoProps) {
    return (
        <View style={styles.headerContainer}>
            <View style={{ flexDirection: 'row' }}>
                <Icon name='arrow-left' size={25} onPress={props.onPress} />
                <Text style={{ fontWeight: 'bold', paddingLeft: 15, fontSize: 19 }}>{props.text}</Text>
            </View>
            <TouchableOpacity onPress={props.onPressSave}>
                <Text style={{ fontWeight: 'bold', paddingTop: 5 }}>SALVAR</Text>
            </TouchableOpacity>
        </View>
    );
}

export interface HeaderThreeProps {
    text: string;
    onPress?: any;

}

export function HeaderThree(props: HeaderThreeProps) {
    return (
        <View style={styles.headerContainer}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold', paddingLeft: 15, fontSize: 19 }}>{props.text}</Text>
            </View>
        </View>
    );
}

export interface HeaderFourProps {
    text: string;
    color?: string;
    colorIcon?: string;

}

export function HeaderFour(props: HeaderFourProps) {
    return (
        <View style={styles.headerContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontWeight: 'bold', paddingLeft: 15, fontSize: 19 }}>{props.text}</Text>
            </View>
            <Icon name='cogs' size={25} color={props.colorIcon} />
        </View>
    );
}
// /Header


const styles = StyleSheet.create({

    textActivity: {
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 15,
    },
    textSubActivity: {
        fontSize: 12,
    },
    buttonActivity: {
        borderRadius: 8, marginTop: 15, backgroundColor: '#f8931f'
    },

    headerContainer: {
        width: '100%',
        height: 60,
        backgroundColor: '#f7931e',
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-between'
    },



    texto: {
        fontSize: 20,
    },
    containerInput: {
        borderBottomColor: '#f7931e',
        marginBottom: 5,
        width: 350,
    },

    button: {
        marginBottom: 15,
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        width: 350,
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    icon: {
        marginHorizontal: 5,
    },
    label: {
        color: '#f7931e',
    },


})
