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

function settingsScreen({navigation}) {

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
                    <Text style={[styles.headerText,{marginBottom: 10}]}>Report a Problem</Text>
                </View>
                <View>
                    <Text style={[styles.footerText,{fontWeight: 'bold',fontSize: 20, marginBottom: 10}]}>(555) 123-4567</Text>
                    <Text style={[styles.footerText,{fontWeight: 'bold',fontSize: 20, marginBottom: 20}]}>helpDesk@IDKeeper.com</Text>

                    <Text style={[styles.headerText,{marginBottom: 10}]}>Add a New ID or License</Text>
                    <Text style={[styles.footerText,{fontWeight: 'bold',fontSize: 20, marginBottom: 10}]}>Schedule a meeting with your local government representive.</Text>
                    <Text style={[styles.footerText,{marginLeft: 30}]}>Lauren Drydle</Text>
                    <Text style={[styles.footerText,{marginLeft: 30}]}>(555) 234-5678</Text>
                    <Text style={[styles.footerText,{marginLeft: 30}]}>Lauren.Drydle@california.gov</Text>

                    <Text style={[styles.headerText,{marginBottom: 10,marginTop: 20}]}>Update a curent ID or License</Text>
                    <Text style={[styles.footerText,{fontWeight: 'bold',fontSize: 20, marginBottom: 10}]}>Schedule a meeting with your local government representive.</Text>
                    <Text style={[styles.footerText,{marginLeft: 30}]}>Lauren Drydle</Text>
                    <Text style={[styles.footerText,{marginLeft: 30}]}>(555) 234-5678</Text>
                    <Text style={[styles.footerText,{marginLeft: 30}]}>Lauren.Drydle@california.gov</Text>
                </View>


            </View>
        </SafeAreaView>
    );
}

export default settingsScreen;
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