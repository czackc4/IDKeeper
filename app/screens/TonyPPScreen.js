import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    TextInput,
    Platform,
    StatusBar,
    Alert,
    SafeAreaView,
    Image,
    Modal,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as ScreenOrientation from 'expo-screen-orientation';
import QRCode from 'react-native-qrcode-svg';

function TonyPPScreen({navigation}) { 
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);

    const goBack = () =>{
        navigation.navigate('Main');
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
        
    }

    const [QROpen, setQROpen] = useState(false);
    const [DetailOpen, setDetailOpen] = useState(false);
    const [newPageOpen, setNewPageOpen] = useState(false);

    const prevPage=() => {
        setDetailOpen(true);
        setNewPageOpen(false);
    }
    

    return(
      <SafeAreaView style={styles.container}>

          <View style={styles.header}>
              <Image style ={styles.image} source={
                  require('../assets/Tony_PP.png')} />
          </View>





        <View style={styles.footer}>
          <View style={styles.button}>

            <Modal visible={QROpen} animationType='slide'style={{ justifyContent: 'flex-end', margin: 0 }}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <QRCode
                        value='https://user-images.githubusercontent.com/89670135/163011858-d157de54-ecd2-4eba-8bce-85764dd52ce2.png'
                        size={250}
                        color = "#26558b"
                    />
                    <TouchableOpacity
                        onPress={() => setQROpen(false)}
                        style ={[styles.menuButton, {
                        borderColor:'#26558b',
                        borderWidth: 1,
                        marginTop: 20,
                        width: '20%'
                    
                        }]}
                    >
                        <Text style={[styles.buttonText,{color: '#26558b'}]}>Back</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

            <Modal visible={DetailOpen} animationType='fade'style={{ justifyContent: 'flex-end', margin: 0 }}>
                <View style={{flex: 1, justifyContent: 'space-evenly', alignItems: 'center' , flexDirection: 'row', marginTop: 30}}>
                    <View style={styles.detailRowOne}>
                        <Image style ={styles.stamps} source={
                            require('../assets/Passport_Stamps/HongKong.png')} />
                        <Image style ={styles.stamps} source={
                            require('../assets/Passport_Stamps/Australia.png')} />
                    </View>
                    <View style={styles.detailRowTwo}>
                        <Image style ={styles.stamps} source={
                            require('../assets/Passport_Stamps/Berlin.png')} />
                        <Image style ={styles.stamps} source={
                            require('../assets/Passport_Stamps/Liechttenstein.png')} />
                    </View>
                    <View style={styles.detailRowTwo}>
                        <Image style ={styles.stamps} source={
                            require('../assets/Passport_Stamps/Canada.png')} />
                        <Image style ={styles.stamps} source={
                            require('../assets/Passport_Stamps/London.png')} />
                    </View>
                    <View style={styles.detailRowTwo}>
                        <Image style ={styles.stamps} source={
                            require('../assets/Passport_Stamps/Paris.png')} />
                        <Image style ={styles.stamps} source={
                            require('../assets/Passport_Stamps/Singapore.png')} />
                    </View>
                </View>
                <View style={ {justifyContent: 'space-evenly', alignItems: 'center' , flexDirection: 'row'}}>
                    <TouchableOpacity
                        onPress={() => setDetailOpen(false)}
                        style ={[styles.menuButton, {
                        borderColor:'#26558b',
                        borderWidth: 1,
                        marginTop: 20,
                        marginBottom: 20,
                        marginLeft: -30,
                        width: '20%'
                        }]}
                    >
                        <Text style={[styles.buttonText,{color: '#26558b'}]}>Back</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => setNewPageOpen(true)}
                        style ={[styles.menuButton, {
                        borderColor:'#26558b',
                        borderWidth: 1,
                        marginTop: 20,
                        marginBottom: 20,
                        marginLeft: -30,
                        width: '20%'
                        }]}
                    >
                        <Text style={[styles.buttonText,{color: '#26558b'}]}>Next Page</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <Modal visible={newPageOpen} animationType='fade'style={{ justifyContent: 'flex-end', margin: 0 }}>
                <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' , flexDirection: 'row', marginTop: 30}}>
                    <View style={styles.detailRowOne}>
                        <Image style ={styles.stamps} source={
                            require('../assets/Passport_Stamps/Madrid.png')} />
                        <Image style ={styles.stamps} source={
                             require('../assets/Passport_Stamps/Rome.png')} />
                    </View>
                </View>
                <View style={ {justifyContent: 'space-evenly', alignItems: 'center' , flexDirection: 'row'}}>
                    <TouchableOpacity
                        onPress={prevPage}
                        style ={[styles.menuButton, {
                        borderColor:'#26558b',
                        borderWidth: 1,
                        marginTop: 20,
                        marginBottom: 20,
                        marginLeft: -30,
                        width: '20%'
                        }]}
                    >
                    <Text style={[styles.buttonText,{color: '#26558b'}]}>Previous Page</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

            <TouchableOpacity
                onPress={() => setQROpen(true)}
                style ={[styles.menuButton, {
                    borderColor:'#26558b',
                    borderWidth: 1,
                    
                }]}
                >
                <Text style={[styles.buttonText,{color: '#26558b'}]}>QR Code</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                onPress={() => setDetailOpen(true)}
                style ={[styles.menuButton, {
                    borderColor:'#26558b',
                    borderWidth: 1,
                    marginTop: 30
                }]}
                >
                <Text style={[styles.buttonText,{color: '#26558b'}]}>Stamps</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={goBack}
                style ={[styles.menuButton, {
                    borderColor:'#26558b',
                    borderWidth: 1,
                    marginTop: 30
                }]}
                >
                <Text style={[styles.buttonText,{color: '#26558b'}]}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
}
export default TonyPPScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#26558b',
        flexDirection: 'row',
        alignItems: 'center'
      },
    header: {
        flex: 3,
        justifyContent: 'center',
        width: '100%'
    },
  footer: {
        flex: .4,
        height: '90%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        paddingHorizontal: 20,
        marginHorizontal: 20,
        justifyContent: 'space-evenly',
        
    },
    headerText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
    },
    secondaryText: {
        color: '#fff',
        //fontWeight: 'bold',
        fontSize: 15,
    },
    menuButton: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    button: {
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        alignItems: 'center'

    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    image: {
        width: '90%',
        height: undefined,
        alignSelf: 'center',
        marginTop: '30%',
        justifyContent: 'center',
        transform: [{ rotate: '-90deg' }],
        resizeMode: 'contain',
        aspectRatio: 1
    },
    detailRowOne: {
        alignSelf: 'flex-start',
        justifyContent: 'flex-start',
        marginLeft: 10,
    },
    detailRowTwo: {
        alignSelf: 'flex-start',
        justifyContent: 'flex-end',
        marginLeft: 20,
    },
    text: {
        //color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    },
    signature: {
        width: 200,
        height: 100,
        resizeMode: 'contain',
    },
    stamps: {
        width: 200,
        height: 100,
        resizeMode: 'contain',
        marginTop: 10
    }
});