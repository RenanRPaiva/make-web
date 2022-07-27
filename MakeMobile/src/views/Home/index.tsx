import React from 'react';
import {Image, ImageBackground, SafeAreaView, StyleSheet, Text} from 'react-native';
import bg from '../../assets/img/bg-make-mobile.jpg';

export function HomeView() {
  return (
    <ImageBackground source={bg} style={styles.background}>
      <SafeAreaView style={styles.view}>
        <Image source={require('../../assets/img/logo-make-white.svg')} />
        <Text>Make +</Text>
        <Text>Faça login e escolha os pedidos!</Text>
        <Text>Fazer login</Text>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  view: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    flex: 1,
  },
});
