import React from 'react';
import {ImageBackground, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import bg from '../../assets/img/bg-make-mobile.jpg';

export function HomeView() {
  return (
    <ImageBackground source={bg} style={styles.background}>
      <SafeAreaView style={styles.view}>
        <View >
          <Text>Logo</Text>
          <Text>Make +</Text>
        </View>
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
