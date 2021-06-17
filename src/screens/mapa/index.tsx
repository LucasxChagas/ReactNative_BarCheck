import * as React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MapSearch } from './components';
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme, FAB } from 'react-native-paper';
import { styles } from './styles'

export interface MapaScreenProps {
}

export function MapaScreen(props: MapaScreenProps) {

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);
    const { colors } = useTheme();

    return (
        <View>
            <View style={[styles.containerSearch, { backgroundColor: colors.primary }]}>
                <Searchbar
                    iconColor={colors.placeholder}
                    inputStyle={{ color: colors.text }}
                    style={styles.searchBar}

                    placeholder="Cidade, estado ou CEP"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />
                <Icon style={{ marginLeft: 10 }} name='list' size={25} color={colors.text} />
            </View>
            <ImageBackground imageStyle={{ opacity: 0.3, backgroundColor: 'black' }} style={styles.imageBackground} source={require('../../assets/map.png')} blurRadius={3}>
                <View style={styles.mapActions}>
                    <View style={[styles.actionContent, { backgroundColor: colors.primary }]}>
                        <Icon name='map-pin' size={25} color={colors.text} />
                    </View>
                    <View style={[styles.actionContent, { backgroundColor: colors.primary }]}>
                        <Icon name='undo' size={25} color={colors.text} />
                    </View>
                </View>

                <View style={[styles.mensageContainer, { backgroundColor: colors.background }]}>
                    <Text style={styles.titleMensage}>Não foram encontrados locais</Text>
                    <Text style={styles.subTitleMensage}>Não houve locais encontrados nesta área. Tente reduzir o zoom ou ir para outra região.</Text>
                </View>
            </ImageBackground>

        </View>
    );
}
