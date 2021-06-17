import { useTheme } from 'react-native-paper';
import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Input, Button, colors } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


// MapSearch
export interface MapSearchProps {


}

export function MapSearch(props: MapSearchProps) {
    return (
        <View>
            <View style={styles.containerSearch}>

            </View>
            <View style={styles.containerMap}>

            </View>
        </View>

    );
}


const styles = StyleSheet.create({
    containerSearch: {
        width: '100%',
        height: 100,
        backgroundColor: '#f7931e',
        flexDirection: 'row',
        padding: 15
    },
    containerMap: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        flexDirection: 'row',
        padding: 15
    },


})
