import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Image,
} from 'react-native';

//import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function WelcomeScreen({navigation})  {
    const { colors } = useTheme();


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image
                        animation="bounceIn"
                        duraton="1500"
                source={require('../assets/ssn.jpg')}
                style={styles.logo}
                resizeMode='stretch'
                />
            </View>
            <Animatable.View 
                style={styles.footer}
                animation="fadeInUpBig"
            >
                <Text style={styles.title}>Welcome to I.D     Keeper!</Text>
                <View style={styles.button}>
                <TouchableOpacity  onPress={() => navigation.navigate('Login')}>
                    <LinearGradient
                        colors={['white', '#26558b']}
                        style={styles.signIn}
                    >
                        <Text style={{color: '#fff'}}>Login</Text>
                    </LinearGradient>
                </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
}

export default WelcomeScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    container: {
        flex: 1,
        backgroundColor: "#26558b"
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold',
        flexShrink: 1,
    },
});

