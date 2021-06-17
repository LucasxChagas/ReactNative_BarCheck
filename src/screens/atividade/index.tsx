import * as React from 'react';
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import { Searchbar, DefaultTheme, Button } from 'react-native-paper';

import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles'
import { StatusBar } from 'expo-status-bar';
import { HeaderThree } from '../components/components'
import { useTheme, FAB } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export interface AtividadeScreenProps { }

export function AtividadeScreen(props: AtividadeScreenProps) {

    const nav = useNavigation();
    const [searchQuery, setSearchQuery] = React.useState('');
    const { colors } = useTheme();

    return (
        <View style={{ flex: 1, backgroundColor: colors.placeholder, width: '100%', height: '100%' }}>
            <HeaderThree text="Atividade" />
            <View style={{ backgroundColor: colors.accent, width: '100%', height: 300, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ backgroundColor: colors.background, height: 280, width: 380, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold' }}>Parece que você não tem Atividade de amigos.</Text>
                    <Text style={{ textAlign: 'center' }}>Vamos adicionar alguns amigos!</Text>
                    <Button mode="contained" style={{ marginTop: 30, width: 250, }} onPress={() => console.log('Pressed')}> ADICIONAR AMIGOS </Button>

                </View>
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
