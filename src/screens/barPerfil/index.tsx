import * as React from 'react';
import { View, Text, ImageBackground, Image, ScrollView, Modal, Pressable, TouchableOpacity, Platform } from 'react-native';
import { PerfilHeader, PerfilLista } from './components';
import { Header } from '../components/components'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme, TextInput, Button } from 'react-native-paper';
import { Avatar } from 'react-native-elements';
import { NoActivity } from '../components/components'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Alert } from 'react-native';



export interface BarPerfilScreenProps {
}

export default function BarPerfilScreen(props: BarPerfilScreenProps) {

    const { colors } = useTheme();
    const nav = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);


    return (
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: colors.accent }}>
                <Header text="Minha Casa Restobar" onPress={() => nav.goBack()} />
            </View>
            <ImageBackground imageStyle={{ opacity: 0.3, backgroundColor: 'black' }} style={styles.imageBackground} source={require('../../assets/RestobarCapa.png')} blurRadius={3}>
                <View style={[styles.barContainer, { backgroundColor: colors.background }]}>
                    <View style={styles.barProfile}>

                        <View style={styles.barProfileLogoContent}>
                            <Image style={styles.barProfileLogo} source={require('../../assets/MinhaCasaRestoBar.png')} />
                        </View>
                        <View style={styles.barProfileContent}>
                            <Text style={styles.barProfileContentTitle}>Minha Casa RestoBar</Text>
                            <Text style={[styles.barProfileContentDesc, { color: colors.placeholder }]}>Praça do Conjunto Inocoop, S/N - Cidade Universitária, Maceió - AL</Text>
                            <Text style={[styles.barProfileContentDesc, { color: colors.placeholder }]}>57072-018</Text>
                            <View style={{ flexDirection: 'row', marginTop: 15, }}>
                                <Icon name='star' size={22} color='#ffb902' />
                                <Text style={{ marginTop: 4 }}>x</Text>
                                <Text style={{ marginTop: 4, marginLeft: 8, fontWeight: 'bold' }}>5,00 Média</Text>
                            </View>
                        </View>

                    </View>
                    <View style={styles.barActions}>
                        <View style={[styles.actionItem, { borderTopColor: colors.text, borderRightColor: colors.text }]}>
                            <Icon style={{ marginRight: 4 }} name='map-marker' size={22} color={colors.text} />
                            <Text style={styles.actionItemText}>ENCONTRE</Text>
                        </View>
                        <View style={[styles.actionItem, { borderTopColor: colors.text, borderRightColor: colors.text }]}>
                            <Icon style={{ marginRight: 4 }} name='heart' size={22} color={colors.text} />
                            <Text style={styles.actionItemText}>ADICIONAR FAVORITO</Text>
                        </View>
                    </View>
                    <Button style={{ paddingVertical: 6, borderBottomEndRadius: 10, borderBottomStartRadius: 10, }} mode="contained" onPress={() => nav.navigate('reservaCad')}>
                        CHECK-IN
                    </Button>
                </View>
            </ImageBackground>
            <View style={{ width: '100%', height: 150, backgroundColor: colors.background }}>
                <View style={[styles.barDetails, { borderBottomColor: colors.accent }]}>
                    <View style={styles.barDetailsLeft}>
                        <Text style={styles.barDetailsText}>VOCÊ</Text>
                    </View>
                    <View style={styles.barDetailsRight}>
                        <Text style={styles.barDetailsText}>0 Check-ins</Text>
                    </View>
                </View>
                <View style={[styles.barDetails, { borderBottomColor: colors.accent }]}>
                    <View style={styles.barDetailsLeft}>
                        <Text style={styles.barDetailsText}>AMIGOS</Text>
                    </View>
                    <View style={styles.barDetailsRight}>
                        <Text style={styles.barDetailsText}>0 Check-ins</Text>
                    </View>
                </View>
                <View style={[styles.barDetails, { borderBottomColor: colors.accent }]}>
                    <View style={styles.barDetailsLeft}>
                        <Text style={styles.barDetailsText}>TOTAL</Text>
                    </View>
                    <View style={styles.barDetailsRight}>
                        <Text style={styles.barDetailsText}>100k Check-ins</Text>
                    </View>
                </View>
            </View>
            <ScrollView>
                <View style={[styles.about, { backgroundColor: colors.background }]}>
                    <Text style={[styles.aboutTitle]}>SOBRE</Text>
                    <Text style={[styles.aboutDesc, { color: colors.placeholder }]}>UM BAR NA PARTE ALTA DA CIDADE QUE TOCA MUITO MPB E ROCK ACÚSTICO!</Text>
                </View>
                <View style={[styles.fotos, { backgroundColor: colors.background }]}>
                    <Text style={[styles.fotosTitle]}>FOTOS</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={[styles.fotosImgs, { backgroundColor: colors.accent }]} />
                        <View style={[styles.fotosImgs, { backgroundColor: colors.accent }]} />
                        <View style={[styles.fotosImgs, { backgroundColor: colors.accent }]} />
                        <View style={[styles.fotosImgs, { backgroundColor: colors.accent }]} />
                        <View style={[styles.maisFotosImgs, { backgroundColor: colors.accent, justifyContent: 'center' }]} >
                            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 6 }}>
                                <View style={{ marginHorizontal: 1, width: 8, height: 8, backgroundColor: colors.placeholder }}></View>
                                <View style={{ marginHorizontal: 1, width: 8, height: 8, backgroundColor: colors.placeholder }}></View>
                                <View style={{ marginHorizontal: 1, width: 8, height: 8, backgroundColor: colors.placeholder }}></View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                <View style={{ marginHorizontal: 1, marginVertical: 1, width: 8, height: 8, backgroundColor: colors.placeholder }}></View>
                                <View style={{ marginHorizontal: 1, marginVertical: 1, width: 8, height: 8, backgroundColor: colors.placeholder }}></View>
                                <View style={{ marginHorizontal: 1, marginVertical: 1, width: 8, height: 8, backgroundColor: colors.placeholder }}></View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                <View style={{ marginHorizontal: 1, width: 8, height: 8, backgroundColor: colors.placeholder }}></View>
                                <View style={{ marginHorizontal: 1, width: 8, height: 8, backgroundColor: colors.placeholder }}></View>
                                <View style={{ marginHorizontal: 1, width: 8, height: 8, backgroundColor: colors.placeholder }}></View>
                            </View>
                            <Text style={{ alignSelf: 'center', color: colors.placeholder, fontSize: 10, fontWeight: 'bold' }}>Mais</Text>
                        </View>

                    </View>
                </View>
            </ScrollView>

        </View>
    );
}



