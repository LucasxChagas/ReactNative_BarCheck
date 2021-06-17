import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import LoginScreen from '../screens/login/index';
import CadastroScreen from '../screens/cadastro/index';
import PreLoginScreen from '../screens/prelogin/index';
import EditarPerfilScreen from '../screens/editarPerfil/index';
import { NavegacaoApp } from './app';
import BarPerfilScreen from '../screens/barPerfil';
import BarDisponivelScreen from '../screens/barDisponivel';
import firebase from 'firebase';
import { View } from 'react-native';
import { ReservaCadScreen } from '../screens/reservacad';

const Stack = createStackNavigator();

const initial = () => {
    const nav = useNavigation();

    firebase.auth().onAuthStateChanged(usuario => {
        nav.navigate((usuario ? 'app' : 'prelogin'))
    })

    return <View />
}

export const NavegacaoPrincipal = () => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ animationEnabled: true, gestureDirection: "horizontal", headerShown: false }}>
            <Stack.Screen name="initial" component={initial} />
            <Stack.Screen name="prelogin" component={PreLoginScreen} />
            <Stack.Screen name="login" component={LoginScreen} options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} />
            <Stack.Screen name="cadastro" component={CadastroScreen} options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} />
            <Stack.Screen name="app" component={NavegacaoApp}
                options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} />
            <Stack.Screen name="editarPerfil" component={EditarPerfilScreen} options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} />
            <Stack.Screen name="barPerfil" component={BarPerfilScreen} options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} />
            <Stack.Screen name="barDisponivel" component={BarDisponivelScreen} options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} />
            <Stack.Screen name="reservaCad" component={ReservaCadScreen} options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} />
        </Stack.Navigator>
    </NavigationContainer>
)