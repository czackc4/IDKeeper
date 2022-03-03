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


function MainScreen({navigation}) {

    

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

            
            <View style={styles.footer}></View>

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
});