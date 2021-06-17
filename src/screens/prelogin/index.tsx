import * as React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import { styles } from './styles'
import { StatusBar } from 'expo-status-bar';
import { ButtonStart, ButtonStartOutline } from './componenets';
import { useNavigation } from '@react-navigation/native';
import { useTheme, Button } from 'react-native-paper';


export interface PreLoginScreenProps { }

export default function PreLoginScreen(props: PreLoginScreenProps) {

    const nav = useNavigation();
    const { colors } = useTheme();

    return (
        <ImageBackground source={require('./../../assets/BackgroundImage.png')} style={styles.background}>
            <View style={[styles.container, { backgroundColor: colors.backdrop }]}>
                <Image style={styles.logo} source={require('./../../assets/BarCheckLogo.png')} />
                <Text style={[styles.text, { color: colors.text }]}>Antes de se cadastrar ou fazer login, você {"\n"} concorda com os nossos {""}
                    <Text style={{ textDecorationLine: 'underline', fontWeight: 'bold' }}>Termos</Text> e {""} {"\n"}
                    <Text style={{ textDecorationLine: 'underline', fontWeight: 'bold' }}>Políticas de Privacidade</Text>.
                </Text>
                <Button mode="contained" labelStyle={styles.btnText} style={styles.btnContained} onPress={() => nav.navigate('cadastro')}>Cadastrar-se</Button>
                <Button mode="outlined" style={[styles.btnOutlined, { borderColor: colors.primary }]} color={colors.primary} onPress={() => nav.navigate('login')}>Fazer Login</Button>
                {/* <ButtonStart color="#f8931f" text="Cadastrar-se" textColor="#ffffff" />
                <ButtonStartOutline color="#f8931f" text="Fazer Login" textColor="#f8931f" onPress={() => nav.navigate('login')} /> */}
            </View>
        </ImageBackground>
    );
}
