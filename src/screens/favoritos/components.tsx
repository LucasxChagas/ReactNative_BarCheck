import { useTheme } from 'react-native-paper';
import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Input, Button, colors } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


// FavItem
export interface FavItemProps {
    title?: string;
    desc?: string;
    cep?: string;
    rate?: string;
    href?: any;
    backgroundColor?: string;
    color?: string;
    colorDesc?: string;
    borderColor?: string;
    onPress?: any;

}

export function FavItem(props: FavItemProps) {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={[styles.container, { backgroundColor: props.backgroundColor }]}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={props.href} />
                </View>

                <View style={[styles.contentContainer, { borderColor: props.borderColor }]}>
                    <Text style={[styles.contentTitle, { color: props.color }]}>{props.title}</Text>
                    <Text style={[styles.contentDesc, { color: props.colorDesc }]}>{props.desc}</Text>
                    <Text style={[styles.contentDesc, { color: props.colorDesc }]}>{props.cep}</Text>
                    <View style={styles.contentRate}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name='star' size={22} color='#ffb902' />
                            <Text style={{ marginTop: 4 }}>x</Text>
                        </View>
                        <Text style={[styles.contentRateText, { color: props.color }]}>{props.rate} Média</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 120,
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoContainer: {
        width: '30%',
        height: 120,
        justifyContent: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        borderRadius: 5,

    },
    contentContainer: {
        width: '70%',
        height: 120,
        borderBottomWidth: 1.3,
    },
    contentTitle: {
        marginTop: 6,
        fontWeight: 'bold',
        fontSize: 18,
    },
    contentDesc: {
        fontSize: 14,
    },
    contentRate: {
        flexDirection: 'row'
    },
    contentRateText: {
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 8,
        marginTop: 2
    }

})
