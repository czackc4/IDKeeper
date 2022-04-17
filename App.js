import { StyleSheet, Text, View } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import Navigator from './routes/drawer';
import React, {useEffect } from'react';
import NavigationContainer from '@react-navigation/native';
import * as ScreenOrientation from 'expo-screen-orientation';


function App() {
  //"orientation": "default",
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);

  return (
      <Navigator/>
      
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
