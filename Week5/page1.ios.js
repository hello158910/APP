/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
} from 'react-native';

export default class Week5 extends Component {
  render() {
    return (
      <View style={styles.bg}>
           <StatusBar hidden={true} barStyle="light-content" />

          <View style={styles.logo}>
              <Image style={{height:100,width:210}} source={require('./src/components/logo_twitch.png')}/>
              
          </View>
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
    bg:{
        flex:1,
        backgroundColor:'rgb(100,65,165)',        
        justifyContent:'center',
        alignItems:'center',
        
    },
    logo:{
        height:100,
        width:210,             
    },
});

AppRegistry.registerComponent('Week5', () => Week5);
