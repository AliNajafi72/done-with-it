
import React from 'react';
import { StyleSheet, Text, View, Image, Platform, ImageBackground } from 'react-native';
import ButtonComponent from '../../components/button-component/ButtonComponent';

import styles from './styles';
import background from '../../../assets/background.jpg';
import logo from '../../../assets/logo-red.png';

export default function Welcome() {
  return (
    <View style={styles.conatiner}>
      <ImageBackground style={styles.image} source={background} blurRadius={3}>
        <View style={styles.conatiner}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={logo}/>
            <Text style={styles.title}>Sell What You Don't Need Anymore!</Text>
          </View>
          <View style={styles.buttonContainer}>
            <ButtonComponent style={styles.button} text='login' color="primaryColor"/>
          </View>
          <View style={styles.buttonContainer}>
            <ButtonComponent style={styles.button} text='signup' color="secondaryColor"/>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
