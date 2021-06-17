import * as React from 'react';
import { View, Text, Alert } from 'react-native';
import { styles } from './styles'
import { useTheme, Button, FAB } from 'react-native-paper';
import Reserva from '../../models/reserva'
import { HeaderThree } from '../components/components'
import { ItemReserva } from './components';
import { FlatList } from 'react-native-gesture-handler';
import { useReservasProvider } from '../../providers/reserva';
import { useNavigation, useRoute } from '@react-navigation/native';

export interface ReservasScreenProps {
}

export function ReservasScreen(props: ReservasScreenProps) {

    console.disableYellowBox = true;

    const nav = useNavigation();
    const route = useRoute();

    const [reservas, setReservas] = React.useState<Reserva[]>([])
    const [searchQuery, setSearchQuery] = React.useState('');

    const reservasProvider = useReservasProvider();
    reservasProvider.buscarTodos().then(resultados => setReservas(resultados));

    const { colors } = useTheme();

    //Exclui uma tarefa pelo ID
    const excluir = (id: any) => {
        Alert.alert("Cancelar Reserva", "Deseja realmente cancelar essa reserva?", [
            {
                text: 'Sim', onPress: () => {
                    reservasProvider.excluir(id);
                }
            },
            { text: 'Não' }
        ])
    }

    //@ts-ignore
    // let {email} = route.params; 


    return (
        <View style={{ flex: 1, backgroundColor: colors.placeholder, width: '100%', height: '100%', }}>
            <HeaderThree text="Reservas" />

            <FlatList
                data={reservas}
                keyExtractor={(r) => String(r.id)}
                extraData={reservas}
                renderItem={({ item }) => (
                    <ItemReserva
                        reserva={item}
                        onEditar={(reserva => nav.navigate('reservaCad', { reserva }))}
                        onExcluir={excluir} />
                )}
            />



            {/* // CASO NÃO TENHA RESERVA
            <View style={{ backgroundColor: colors.accent, width: '100%', height: 300, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ backgroundColor: colors.background, height: 280, width: 380, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>

                    <Text style={{ fontWeight: 'bold' }}>Ops... Parece que você ainda não tem uma reserva.</Text>
                    <Text style={{ textAlign: 'center' }}>Veja os bares disponíveis e faça a sua primeira reserva!</Text>
                    <Button mode="contained" style={{ marginTop: 30, width: 250, }} onPress={() => nav.navigate('barDisponivel')}> BARES DISPONÍVEIS </Button>
                </View>
            </View> */}






            <FAB
                style={{ position: 'absolute', margin: 16, right: 0, bottom: 0, backgroundColor: colors.primary }}
                icon="beer"
                color={colors.text}
                onPress={() => nav.navigate('barDisponivel')}
            />

        </View>
    );
}
