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

function TonyDLScreen({navigation}) { 
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);

    const goBack = () =>{
        navigation.navigate('Main');
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
        
    }

    const [QROpen, setQROpen] = useState(false);
    const [DetailOpen, setDetailOpen] = useState(false);
    

    return(
      <SafeAreaView style={styles.container}>

          <View style={styles.header}>
              <Image style ={styles.image} source={
                  require('../assets/Tony_DL.png')} />
          </View>





        <View style={styles.footer}>
          <View style={styles.button}>

            <Modal visible={QROpen} animationType='slide'style={{ justifyContent: 'flex-end', margin: 0 }}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <QRCode
                        value='https://user-images.githubusercontent.com/89670135/163010633-f046f19e-a8f5-4351-b981-d316aeb80056.png'
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
                        <Text style={styles.text}>Last Name:     Stark</Text>
                        <Text style={styles.text}>First Name:    Anthony</Text>
                        <Text style={styles.text}>Address:         10880 Malibu Point</Text>
                        <Text style={styles.text}>City:                 Malibu</Text>
                        <Text style={styles.text}>State:              California</Text>
                        <Text style={styles.text}>Zip Code:        90263</Text>
                    </View>
                    <View style={styles.detailRowTwo}>
                        <Text style={styles.text}>Date of Birth:     05/29/1970</Text>
                        <Text style={styles.text}>Eye Color:           Brown</Text>
                        <Text style={styles.text}>Gender:               Male</Text>
                        <Text style={styles.text}>Height:                 6'1"</Text>
                        <Text style={styles.text}>Date ID Issued    04/01/2021</Text>
                        <Text style={styles.text}>Date EXP:            05/29/2025</Text>
                    </View>
                </View>
                <View style={ {flex: .5, marginLeft: '-13.5%',justifyContent: 'space-evenly', alignItems: 'center' , flexDirection: 'row'}}>
                    <Text style={styles.text}>License #:   AA1234567</Text>
                    <Text style={[styles.text, {marginLeft: '-1%'}]}>Organ Donor:  Y</Text>
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
                    <Text style={[styles.text,{marginLeft:40,marginRight:-50}]}>Signature:</Text>
                    <Image style ={styles.signature} source={
                        require('../assets/Tony_Signature.png')} />
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
                <Text style={[styles.buttonText,{color: '#26558b'}]}>Details</Text>
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
export default TonyDLScreen;

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
        width: '100%',
        height: undefined,
        alignSelf: 'center',
        marginTop: '40%',
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
    }
});