import { useNavigation } from '@react-navigation/native';
import { useTheme, FAB } from 'react-native-paper';
import * as React from 'react';
import { View, Text } from 'react-native';
import { HeaderThree } from '../components/components'
import { FavItem } from './components';

export interface FavoritosScreenProps {

}

export function FavoritosScreen(props: FavoritosScreenProps) {

    const { colors } = useTheme();
    const nav = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            <View>
                <HeaderThree text="Favoritos" />
                <FavItem title="Minha Casa RestoBar" desc="Praça do Conjunto Inocoop, S/N - Cidade Universitária, Maceió - AL" cep="57072-018" rate="5.00" onPress={() => nav.navigate('barPerfil')}
                    backgroundColor={colors.background} borderColor={colors.accent} color={colors.text} colorDesc={colors.placeholder} href={require('../../assets/MinhaCasaRestoBar.png')} />
            </View>
            <FAB
                style={{ position: 'absolute', margin: 16, right: 0, bottom: 0, backgroundColor: colors.primary }}
                icon="beer"
                color={colors.text}
                onPress={() => nav.navigate('barDisponivel')}
            />
        </View>

    );
}
