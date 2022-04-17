import React from 'react';
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
    SafeAreaView
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as ScreenOrientation from 'expo-screen-orientation';

function Tony_DocScreen({navigation}) {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: 20
                }}>
                     <TouchableOpacity
                        onPress={() => navigation.navigate('Main')}
                        style ={[styles.idButton, {
                            borderColor:'#fff',
                            borderWidth: 1,
                            marginTop: 5,
                            width: '20%',

                        }]}>
                            <Text style={[styles.buttonText,{color: '#fff'}]}>Back</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Anthony Stark</Text>
                </View>
                <View style={{
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    paddingTop: 10
                }}>
                    <Text style={styles.secondaryText}>United States of America</Text>
                </View>
            </View>

            
            <View style={styles.footer}>
                <View>
                    <Text style={styles.footerText}>Documentation</Text>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('TBCScreen')}
                        style ={[styles.idButton, {
                            borderColor:'#26558b',
                            borderWidth: 1,
                            marginTop: 5,

                        }]}
                    >
                        <Text style={[styles.buttonText,{color: '#26558b'}]}>Birth Certificate</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('TSSCScreen')}
                        style ={[styles.idButton, {
                            borderColor:'#26558b',
                            borderWidth: 1,
                            marginTop: 30,

                        }]}
                    >
                        <Text style={[styles.buttonText,{color: '#26558b'}]}>Social Security Card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('TMLScreen')}
                        style ={[styles.idButton, {
                            borderColor:'#26558b',
                            borderWidth: 1,
                            marginTop: 30

                        }]}
                    >
                        <Text style={[styles.buttonText,{color: '#26558b'}]}>Marriage License</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    );
}

export default Tony_DocScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#26558b'
      },
    header: {
        flex: .25,
        paddingHorizontal: 20,
        paddingBottom: 50,
    },
  footer: {
        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
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
    button: {
        alignItems: 'center',
        marginTop: 5,
    },
    idButton: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    footerText: {
        color: '#05375a',
        fontSize: 20
    },
});