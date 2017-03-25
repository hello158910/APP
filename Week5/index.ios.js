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
  Image
} from 'react-native';
import Page from './page1';
//import Page from './page2';
//import Page from './page3';
const Week5=()=>(
  <Page />
);

AppRegistry.registerComponent('Week5', () => Week5);
