import { useNavigation } from '@react-navigation/native';
import { useTheme, FAB, Searchbar } from 'react-native-paper';
import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { HeaderThree } from '../components/components'
import { FavItem } from './components';
import { Icon } from 'react-native-elements';
import { styles } from './styles';

export interface BarDisponivelScreenProps {

}

export default function BarDisponivelScreen(props: BarDisponivelScreenProps) {

    const { colors } = useTheme();
    const nav = useNavigation();

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);

    return (
        <View style={{ flex: 1, backgroundColor: colors.placeholder }}>
            <View style={[styles.containerSearch, { backgroundColor: colors.primary }]}>
                <Searchbar
                    iconColor={colors.placeholder}
                    inputStyle={{ color: colors.text }}
                    style={styles.searchBar}

                    placeholder="Cervejarias ou bares"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />
                <Icon style={{ marginLeft: 10 }} name='list' size={25} color={colors.text} />
            </View>
            <View style={{ backgroundColor: colors.background }}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', padding: 10 }}>
                    <Text style={{ fontWeight: 'bold', color: colors.text }}>SELECIONADOS RECENTEMENTE</Text>
                    <TouchableOpacity onPress={() => console.log('LIMPAR')}>
                        <Text style={{ fontWeight: 'bold', color: colors.primary }} >LIMPAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ backgroundColor: colors.background, width: '100%', height: '100%' }}>

                <TouchableOpacity onPress={() => nav.navigate('barPerfil')}>
                    <View style={{ backgroundColor: colors.accent, width: '95%', height: 125, margin: 5, borderRadius: 5 }}>
                        <View style={{ flexDirection: 'row', alignContent: 'center' }}>
                            <Image style={{ width: 90, height: 90, borderRadius: 5, marginTop: 18, marginLeft: 10 }}
                                source={require('../../assets/MinhaCasaRestoBar.png')} />
                            <View style={{ marginTop: 18, marginLeft: 8 }}>
                                <Text style={{ color: colors.text, fontWeight: 'bold', fontSize: 18 }}>Minha Casa RestoBar</Text>
                                <Text style={{ color: colors.placeholder }}>Praça do Conjunto Inocoop, S/N </Text>
                                <Text style={{ color: colors.placeholder }}>Cidade Universitária, Maceió - AL </Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

            </View>
        </View>

    );
}
