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

function TonyMLScreen({navigation}) { 
    //ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);

    const goBack = () =>{
        navigation.navigate('TDocScreen');
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
        
    }

    const [QROpen, setQROpen] = useState(false);
    const [DetailOpen, setDetailOpen] = useState(false);
    

    return(
      <SafeAreaView style={styles.container}>

          <View style={styles.header}>
              <Image style ={styles.image} source={
                  require('../assets/Tony_ML.png')} />
          </View>





        <View style={styles.footer}>
          <View style={styles.button}>

            <Modal visible={QROpen} animationType='slide'style={{ justifyContent: 'flex-end', margin: 0 }}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <QRCode
                        value='https://user-images.githubusercontent.com/89670135/163493939-531ce0b0-174d-4dc4-a5db-6432558d2ddc.png'
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
                <View style={{flex: 1, justifyContent: 'space-evenly', alignItems: 'center' , flexDirection: 'column', marginTop: 30}}>
                    <View>
                        <Image style ={[styles.caliLogo, {marginBottom: 5}]} source={
                            require('../assets/Cali_Logo.png')} />
                    </View>
                    <View style={{flex: 1, justifyContent: 'space-evenly', alignSelf: 'flex-start' , flexDirection: 'row', marginTop: 30}}>
                        <View style={styles.detailRowOne}>
                    
                            <Text style={[styles.text, {marginBottom: 5}]}>First Person:</Text> 
                            <Text style={styles.text}>First Name:</Text>
                            <Text style={styles.text}>Current Last Name:</Text>
                            <Text style={styles.text}>Birth Last Name:</Text>
                            <Text style={styles.text}>Date of Birth:</Text>
                            <Text style={styles.text}>Place of Birth:</Text>
                            <Text style={[styles.text, {marginBottom: 10}]}>Name of Father:</Text>


                            <Text style={[styles.text, {marginBottom: 5}]}>Second Person:</Text> 
                            <Text style={styles.text}>First Name:</Text>
                            <Text style={styles.text}>Current Last Name:</Text>
                            <Text style={styles.text}>Birth Last Name:</Text>
                            <Text style={styles.text}>Date of Birth:</Text>
                            <Text style={styles.text}>Place of Birth:</Text>
                            <Text style={[styles.text, {marginBottom: 10}]}>Name of Father:</Text>

                            <Text style={styles.text}>Date of Marriage:</Text>
                            <Text style={styles.text}>County of Marriage:</Text>
                        </View>
                        <View style={styles.detailRowTwo}>
                        
                            <Text style={[styles.answerText, {marginBottom: 5}]}></Text> 
                            <Text style={styles.answerText}>Anthony</Text>
                            <Text style={styles.answerText}>Stark</Text>
                            <Text style={styles.answerText}>Stark</Text>
                            <Text style={styles.answerText}>05/29/1970</Text>
                            <Text style={styles.answerText}>Manhattan, NY</Text>
                            <Text style={[styles.answerText, {marginBottom: 10}]}>Howard Stark</Text>


                            <Text style={[styles.answerText, {marginBottom: 5 }]}></Text> 
                            <Text style={styles.answerText}>Virginia</Text>
                            <Text style={styles.answerText}>Stark</Text>
                            <Text style={styles.answerText}>Potts</Text>
                            <Text style={styles.answerText}>04/10/1972</Text>
                            <Text style={styles.answerText}>Sacramento, CA</Text>
                            <Text style={[styles.answerText, {marginBottom: 10}]}>Mr. Potts</Text>

                            <Text style={styles.answerText}>07/24/2018</Text>
                            <Text style={styles.answerText}>Malibu County</Text>
                        </View>
                    </View>
                </View>
                <View style={ {justifyContent: 'flex-start', alignItems: 'flex-start' , flexDirection: 'row'}}>
                    <TouchableOpacity
                        onPress={() => setDetailOpen(false)}
                        style ={[styles.menuButton, {
                        borderColor:'#26558b',
                        borderWidth: 1,
                        marginTop: 20,
                        marginBottom: 20,
                        marginLeft: 30,
                        width: '20%'
                        }]}
                    >
                        <Text style={[styles.buttonText,{color: '#26558b'}]}>Back</Text>
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
                }]}
                >
                <Text style={[styles.buttonText,{color: '#26558b'}]}>Details</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={goBack}
                style ={[styles.menuButton, {
                    borderColor:'#26558b',
                    borderWidth: 1,
                }]}
                >
                <Text style={[styles.buttonText,{color: '#26558b'}]}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
}
export default TonyMLScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#26558b',
        flexDirection: 'column',
        alignItems: 'flex-start'
      },
    header: {
        flex: 3,
        justifyContent: 'center',
        width: '100%'
    },
  footer: {
        flex: .4,
        width: '90%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        paddingHorizontal: 20,
        marginHorizontal: 20,
        marginBottom: 30,
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
        width: '28%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    button: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center'

    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    image: {
        width: 275,
        height: 525,
        alignSelf: 'center',
        justifyContent: 'center',
        resizeMode: 'contain',
        aspectRatio: 1
    },
    detailRowOne: {
        alignSelf: 'flex-start',
        justifyContent: 'center',
        marginLeft: 10
    },
    detailRowTwo: {
        alignSelf: 'flex-start',
        justifyContent: 'center',
        marginLeft: 40,
    },
    text: {
        //color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    },
    answerText: {
        //color: '#fff',
        fontSize: 20
    },
    signature: {
        width: 200,
        height: 100,
        resizeMode: 'contain',
    },
    caliLogo: {
        width: 300,
        height: 150,
        resizeMode: 'contain',
        marginTop: -20,
    }
});