/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  StatusBar,
  Text,
  View,
  Image,
  TabBarIOS,
} from 'react-native';
import Header from './src/components/Header';
import Nav from './src/components/Nav';
import OneList from './src/components/OneList';
import Footer from './src/components/Footer';

export default class Week5 extends Component {
  render() {
    return (
      <View style={styles.bg}>
          <StatusBar barStyle="light-content" />
          <Header headerText={'Hearthstone'} />
          <Nav />
          <OneList />
          <Footer />
      </View>

    );
  }
}

const styles = StyleSheet.create({
    bg:{
        flex:1,
        backgroundColor:'rgb(241,241,241)',        
        //justifyContent:'center',
        //alignItems:'center',
    }
});

AppRegistry.registerComponent('Week5', () => Week5);
