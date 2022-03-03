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
} from 'react-native';

function settingsScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text> Settings Screen</Text>
        </View>
    );
}

export default settingsScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#26558b'
      },
});