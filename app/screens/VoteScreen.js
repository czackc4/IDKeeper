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

function VoteScreen({navigation}) {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    

    const openMenu=() => {
        navigation.openDrawer()
        const userName = navigation.getParam('first_name') + ' ' + navigation.getParam('last_name')
        module.exports={userName};
    }

    const votingMessage=() => {
        Alert.alert("There is no elections today, voting is unavailable");
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
                    <TouchableOpacity onPress={() => navigation.navigate('Main')}
                        style ={[styles.idButton, {
                            borderColor:'#fff',
                            borderWidth: 1,
                            marginTop: 5,
                            width: '20%',

                        }]}>
                            <Text style={[styles.buttonText,{color: '#fff'}]}>Back</Text>
                    </TouchableOpacity>
                    <Text style={[styles.headerText,{color: '#fff'}]}>Anthony Stark</Text>
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
                    <Text style={[styles.headerText,{marginBottom: 30}]}>California Elections</Text>
                </View>
                <View>
                    <Text style={[styles.footerText,{fontWeight: 'bold',fontSize: 20, marginBottom: 10}]}>Upcoming Statewide Elections</Text>

                    <Text style={[styles.footerText,{marginLeft: 30}]}>June 7, 2022, Primary Election</Text>

                    <Text style={[styles.footerText,{fontWeight: 'bold',fontSize: 20, marginTop: 20, marginBottom: 10}]}>Upcoming County Elections</Text>

                    <Text style={[styles.footerText,{marginLeft: 30}]}>No elections scheduled at this time</Text>

                    <Text style={[styles.footerText,{fontWeight: 'bold',fontSize: 20, marginTop: 20, marginBottom: 10}]}>Upcoming Special Vacancy Elections</Text>

                    <Text style={[styles.footerText,{marginLeft: 30}]}>April 19, 2022, Assembly District 17 Special General Election</Text>
                    
                </View>
                <View>
                    <Text style={[styles.headerText,{marginTop: 20,marginBottom: 30}]}>US Congressional Elections</Text>
                </View>
                <View>
                    <Text style={[styles.footerText,{fontWeight: 'bold',fontSize: 20, marginBottom: 10}]}>U.S Senate Election</Text>

                    <Text style={[styles.footerText,{marginLeft: 30}]}>November 8, 2022</Text>

                    <TouchableOpacity
                        onPress={votingMessage}
                        style ={[styles.idButton, {
                            borderColor:'#26558b',
                            borderWidth: 1,
                            marginTop: 30

                        }]}
                    >
                        <Text style={[styles.buttonText,{color: '#26558b'}]}>Vote Today</Text>
                    </TouchableOpacity>

                    
                </View>


            </View>

        </SafeAreaView>
    );
}

export default VoteScreen;

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
        color: '#05375a',
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
        fontSize: 15,
    },
});