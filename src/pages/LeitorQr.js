import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';


export default function LeitorQr(props) {
  return (
    
    <View style={styles.container}>
        <Text>Page LeitorQr</Text>
        <Button
        title="Home"
        onPress = {()=> {props.navigation.navigate('Home')}}
        />
        <Button title="Ler QrCode" onPress = { ()=> {props.navigation.navigate('Scanner')}}> </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
