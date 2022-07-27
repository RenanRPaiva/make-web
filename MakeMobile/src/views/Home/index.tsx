import React from 'react';
import {ImageBackground, SafeAreaView, StyleSheet, Text} from 'react-native';
import bg from '../../assets/img/bg-make-mobile.jpg';
import Logo from '../../assets/img/logo-make-white.svg';
import {CustomText} from '../../components/CustomText';

export function HomeView() {
  return (
    <ImageBackground source={bg} style={styles.background}>
      <SafeAreaView style={styles.view}>
        <SafeAreaView style={styles.logo}>
          <Logo />
          <Text style={styles.marca}>Make+</Text>
        </SafeAreaView>
        <Text style={styles.title}>Faça login e escolha os pedidos!</Text>
        <CustomText>Fazer login</CustomText>
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
  title: {
    fontSize: 36,
    textAlign: 'center',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 0, height: 4},
    textShadowRadius: 4,
    fontFamily: 'Molle-Italic',
  },
  marca: {
    fontSize: 36,
    fontFamily: 'NovaOval-Regular',
    color: '#FFFFFF',
    paddingHorizontal: 15,
  },
  logo: {
    flexDirection: 'row',
  },
});
