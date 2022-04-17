import React, {useState, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Image,
    Alert,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

function InstantIDScreen({navigation}) {

    let myID = require('../assets/Tony_DL.png');
       
   
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Scan for Driver's License</Text>
            </View>
            <View style={styles.footer}>

            <View style = {{justifyContent: 'center',alignItems: 'center'}}>
                <QRCode
                    value='https://user-images.githubusercontent.com/89670135/163010633-f046f19e-a8f5-4351-b981-d316aeb80056.png'
                    size={250}
                    color = "#26558b"
                />
            </View>
            <TouchableOpacity
                        onPress={() => navigation.navigate('InstantPassport')}
                        style ={[styles.login, {
                            borderColor:'#26558b',
                            borderWidth: 1,
                            marginTop: 30

                        }]}
                    >
                        <Text style={[styles.buttonText,{color: '#26558b'}]}>Passport</Text>
            </TouchableOpacity>
            <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}
                        style ={[styles.login, {
                            borderColor:'#26558b',
                            borderWidth: 1,
                            marginTop: 30

                        }]}
                    >
                        <Text style={[styles.buttonText,{color: '#26558b'}]}>Back to Login</Text>
            </TouchableOpacity>            


            </View>

        </View>
    );
}

export default InstantIDScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#26558b'
      },
      header: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'flex-start',
        paddingHorizontal: 20,
        paddingBottom: 30
    },
  footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    title: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        flexShrink: 1,
        //paddingBottom:60,
    },
    footer_text: {
        color: '#26558b',
        fontSize: 18,
        fontWeight: 'bold',
        flexShrink: 1,
        paddingTop: 20,
    },
    login: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});