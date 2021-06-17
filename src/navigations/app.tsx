import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AtividadeScreen } from '../screens/atividade';
import { FavoritosScreen } from '../screens/favoritos';
import { PerfilScreen } from '../screens/perfil';
import { ReservasScreen } from '../screens/reservas';
import { MapaScreen } from '../screens/mapa';
import { Appearance } from 'react-native';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';



const ColorScheme = Appearance.getColorScheme();

const Tab = createMaterialBottomTabNavigator();

//App
export const NavegacaoApp = () => (
    <Tab.Navigator activeColor="#f7931e" barStyle={{ backgroundColor: ColorScheme == 'dark' ? 'black' : 'white' }} shifting={true}>
        <Tab.Screen name="atividade" component={AtividadeScreen} options={{
            tabBarLabel: 'Atividade', tabBarIcon: ({ color }) => (<Icon name="beer" size={20} color={color} />),
        }} />
        <Tab.Screen name="map" component={MapaScreen} options={{
            tabBarLabel: 'Mapa', tabBarIcon: ({ color }) => (<Icon name="map-o" color={color} size={20} />),
        }} />
        <Tab.Screen name="reservas" component={ReservasScreen} options={{
            tabBarLabel: 'Reservas', tabBarIcon: ({ color }) => (<Icon name="calendar" color={color} size={20} />),
        }} />
        <Tab.Screen name="favoritos" component={FavoritosScreen} options={{
            tabBarLabel: 'Favoritos', tabBarIcon: ({ color }) => (<Icon name="heart-o" color={color} size={20} />),
        }} />
        <Tab.Screen name="perfil" component={PerfilScreen} options={{
            tabBarLabel: 'Perfil', tabBarIcon: ({ color }) => (<Icon name="user-circle" color={color} size={20} />),
        }} />

    </Tab.Navigator>

)