import { StyleSheet, Text, View } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import Navigator from './routes/drawer';
import React, {useEffect } from'react';
import NavigationContainer from '@react-navigation/native';


function App() {
  const {landscape} = useDeviceOrientation();

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
