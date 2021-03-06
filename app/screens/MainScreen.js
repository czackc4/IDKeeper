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

function MainScreen({navigation}) {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    

    const openMenu=() => {
        navigation.openDrawer()
        const userName = navigation.getParam('first_name') + ' ' + navigation.getParam('last_name')
        module.exports={userName};
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: 20
                }}>
                    <TouchableOpacity onPress={openMenu}>
                        <FontAwesome
                            name="bars"
                            color="#fff"
                            size={25} 
                        />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>{navigation.getParam('first_name')} {navigation.getParam('last_name')}</Text>
                </View>
                <View style={{
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    paddingTop: 10
                }}>
                    <Text style={styles.secondaryText}>{navigation.getParam('country')}</Text>
                </View>
            </View>

            
            <View style={styles.footer}>
                <View>
                    <Text style={styles.footerText}>IDs and Licenses</Text>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('TDLScreen')}
                        style ={[styles.idButton, {
                            borderColor:'#26558b',
                            borderWidth: 1,
                            marginTop: 5

                        }]}
                    >
                        <Text style={[styles.buttonText,{color: '#26558b'}]}>Driver's License</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('TPPScreen')}
                        style ={[styles.idButton, {
                            borderColor:'#26558b',
                            borderWidth: 1,
                            marginTop: 30

                        }]}
                    >
                        <Text style={[styles.buttonText,{color: '#26558b'}]}>Passport</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('TPLScreen')}
                        style ={[styles.idButton, {
                            borderColor:'#26558b',
                            borderWidth: 1,
                            marginTop: 30

                        }]}
                    >
                        <Text style={[styles.buttonText,{color: '#26558b'}]}>Pilot License</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('TGPScreen')}
                        style ={[styles.idButton, {
                            borderColor:'#26558b',
                            borderWidth: 1,
                            marginTop: 30

                        }]}
                    >
                        <Text style={[styles.buttonText,{color: '#26558b'}]}>Firearm License</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:50}}>
                    <Text style={styles.footerText}>Extras</Text>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('TDocScreen')}
                        style ={[styles.idButton, {
                            borderColor:'#26558b',
                            borderWidth: 1,
                            marginTop: 5

                        }]}
                    >
                        <Text style={[styles.buttonText,{color: '#26558b'}]}>Legal Documentation</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('VScreen')}
                        style ={[styles.idButton, {
                            borderColor:'#26558b',
                            borderWidth: 1,
                            marginTop: 30

                        }]}
                    >
                        <Text style={[styles.buttonText,{color: '#26558b'}]}>Vote!</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    );
}

export default MainScreen;

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