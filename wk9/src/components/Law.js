import React from 'react';
import { ScrollView, View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Grid, Row } from 'react-native-elements';

const QA = () => {
    return (
        
        <View style={styles.containers}>
          
            <Image style={styles.text02} source={require('../assets/lawarticle_03.png')} />
           
        </View>

    );
};
const styles = StyleSheet.create({
    containers: {
        flex: 1,
         justifyContent:'center',
       alignItems:'center'
    },
    text02:{
        flex:1,
         resizeMode:'contain',
    }
   
})
export default QA;