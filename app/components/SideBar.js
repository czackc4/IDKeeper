import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Image,
    Alert,
    ScrollView,
    ImageBackgroundBase,
    ImageBackground
} from 'react-native';
import {DrawerNavigatorItems} from 'react-navigation-drawer';

//import {userName} from '../screens/MainScreen'


export default Sidebar = props => (
    <ScrollView>
        <ImageBackground 
            source={require('../assets/americanFlag.jpg')}
            style={{width: undefined, padding: 16, paddingTop: 30}}
            imageStyle={{opacity:0.3}}>
            <Image source={(require('../assets/IDPic.jpg'))} style = {styles.IDPic} />
            <Text style={styles.userName}>Anthony Stark</Text>
        </ImageBackground>
        
        <View style={styles.container}>
            <DrawerNavigatorItems {...props} />
        </View>
    </ScrollView>
);

const styles = StyleSheet.create({
    IDPic: {
        borderRadius:40,
        borderColor: '#26558b',
        width: 80,
        height: 80,
        borderWidth: 3, 
    },
    userName: {
        color: '#26558b',
        marginVertical: 8,
        fontWeight: '800',
        fontSize: 20,
    },
    container:{
        flex: 1
    }
});