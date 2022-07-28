import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {ImageBackground, SafeAreaView, StyleSheet, Text} from 'react-native';
import bg from '../../assets/img/bg-make-mobile.jpg';
import Logo from '../../assets/img/logo-make-white.svg';
import {CustomButton} from '../../components/CustomButton';
import {RootStackParamList} from '../../routes';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeView({navigation}: Props) {
  const handlePressLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <ImageBackground source={bg} style={styles.background}>
      <SafeAreaView style={styles.view}>
        <SafeAreaView style={styles.logo}>
          <Logo />
          <Text style={styles.marca}>Make+</Text>
        </SafeAreaView>
        <Text style={styles.title}>Faça login e escolha os pedidos!</Text>
        <CustomButton size="lg" onPress={handlePressLogin}>
          Fazer login
        </CustomButton>
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
