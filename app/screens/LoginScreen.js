import React, { useEffect } from 'react';
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
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {tonyCredentials, steveCredentials} from '../components/citizendb'
import ReactDOM from 'react-dom';


function LoginScreen({navigation}) { 

    const [data,setData] = React.useState({
        ssn: '',
        dob: '',
        validUser: false,
        citizenInfo: '',
        secureTextEntryssn: true,
        secureTextEntrydob: true,
    })
        
    const handledobChangessn = (val) => {
        setData({
            ...data,
            ssn: val,
            //validUser: false,
        });
    }
    const handledobChangedob = (val) => {
        setData({
            ...data,
            dob: val,
            //validUser: false,
        });
    }

    const updateSecureTextEntryssn = () => {
        setData({
            ...data,
            secureTextEntryssn: !data.secureTextEntryssn
        })
    }
    const updateSecureTextEntrydob = () => {
        setData({
            ...data,
            secureTextEntrydob: !data.secureTextEntrydob
        })
    }
    const checkCredentials = () =>{ 
        const allCitizens = [
            tonyCredentials,
            steveCredentials
        ];
        for (let citizen of allCitizens) {
            if(data.ssn === citizen.ssn) {
                //console.log(citizen.ssn);
                if(data.dob === citizen.dob) {
                    //console.log(citizen.dob);
                    data.validUser = true;
                    data.citizenInfo = citizen;
                    break
                } else {
                    data.validUser =false;
                }                    
            } else {
                data.validUser =false;
            }
        }
        if(data.validUser === true)
            navigation.navigate('Main',data.citizenInfo)
        else    
        Alert.alert("Not a Valid User");
    }

    

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#26558b" barStyle='light-content' />
            <View style={styles.header}>
                <Text style={styles.headerText}>Please Login!</Text>
            </View>
            <Animatable.View 
                style={styles.footer}
                animation="fadeInUpBig"
            >
                <Text style={styles.footerText}>Social Security Number</Text>
                <View style={styles.inputContainer}>
                    <FontAwesome
                        name="id-card"
                        color="black"
                        size={20}
                    />
                    <TextInput  
                        placeholder='Enter SSN'
                        keyboardType='numeric'
                        maxLength={9} 
                        style={styles.textInput}
                        autoCapitalize="none"
                        secureTextEntry={data.secureTextEntryssn ? true : false}
                        onChangeText={(val) => handledobChangessn(val)}
                        value={data.ssn}
                    /> 
                        <TouchableOpacity
                            onPress={updateSecureTextEntryssn}
                    >
                        {data.secureTextEntryssn ?
                            <Feather
                                name="eye-off"
                                color="grey"
                                size={20}
                            />
                        :
                            <Feather
                            name="eye"
                            color="grey"
                            size={20}
                            />
                        }
                        </TouchableOpacity>
                </View>
                <Text style={[styles.footerText, {marginTop: 35}]}>Date of Birth</Text>
                <View style={styles.inputContainer}>
                    <FontAwesome
                        name="calendar"
                        color="black"
                        size={20}
                    />
                    <TextInput  
                        placeholder='Enter DOB'
                        keyboardType='numeric'   
                        maxLength={8}
                        style={styles.textInput}
                        autoCapitalize="none"
                        secureTextEntry={data.secureTextEntrydob ? true : false}
                        onChangeText={(val) => handledobChangedob(val)}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntrydob}
                    >
                        {data.secureTextEntrydob ?
                        <Feather
                            name="eye-off"
                            color="grey"
                            size={20}
                        />
                        :
                        <Feather
                            name="eye"
                            color="grey"
                            size={20}
                        />
                        }
                    </TouchableOpacity>
                </View>

                <View style={styles.loginButton}>
                    <TouchableOpacity
                        onPress={checkCredentials}
                        style ={styles.login}
                    >
                        <LinearGradient
                            colors={['white', '#26558b']}
                            style={styles.login}
                        >
                            <Text style={[styles.buttonText, { color: 'white'}]}>Login</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('InstantID')}
                        style ={[styles.login, {
                            borderColor:'#26558b',
                            borderWidth: 1,
                            marginTop: 30

                        }]}
                    >
                        <Text style={[styles.buttonText,{color: '#26558b'}]}>Instant I.D.</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>

        </View>
    );
    
}



export default LoginScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#26558b'
      },
    header: {
          flex: 1,
          justifyContent: 'flex-end',
          paddingHorizontal: 20,
          paddingBottom: 50
      },
    footer: {
          flex: 3,
          backgroundColor: '#fff',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingHorizontal: 20,
          paddingVertical: 30
      },
    inputContainer: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    headerText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    loginButton: {
        alignItems: 'center',
        marginTop: 50,
    },
    login: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    footerText: {
        color: '#05375a',
        fontSize: 15
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -5,
        paddingLeft: 10,
        color: '#05375a',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

