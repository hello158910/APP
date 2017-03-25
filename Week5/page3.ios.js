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
    TabBarIOS,
} from 'react-native';
import Search from './src/components/Search';
import TwoList from './src/components/TwoList';
import Footer from './src/components/Footer';
export default class Week5 extends Component {
    render() {
        return (
        <View style={styles.bg}>
          <Search />
          <TwoList />
          <Footer />
        </View>

        );
    }
}

const styles = {
    bg: {
        flex: 1,
        backgroundColor: 'rgb(241,241,241)',
    }
};

AppRegistry.registerComponent('Week5', () => Week5);
