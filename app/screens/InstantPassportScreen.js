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

function InstantPassportScreen({navigation}) {

    let myID = require('../assets/MassID.jpg');
       
   
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Scan for Passport</Text>
            </View>
            <View style={styles.footer}>

            <View style = {{justifyContent: 'center',alignItems: 'center'}}>
                <QRCode
                    value='https://user-images.githubusercontent.com/89670135/154826638-901ecd33-0f1f-428a-b030-b601d1a14af1.jpg'
                    size={250}
                    color = "#26558b"
                />
            </View>
            <TouchableOpacity
                        onPress={() => navigation.navigate('InstantID')}
                        style ={[styles.login, {
                            borderColor:'#26558b',
                            borderWidth: 1,
                            marginTop: 30

                        }]}
                    >
                        <Text style={[styles.buttonText,{color: '#26558b'}]}>Driver's License</Text>
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

export default InstantPassportScreen;

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