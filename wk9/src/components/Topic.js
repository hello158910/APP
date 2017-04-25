import React from 'react';
import { ScrollView, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Grid, Row } from 'react-native-elements';

const Topic = () => {
    return (
        <View style={styles.container}>
            
                <Image style={styles.center01}  source={require('../assets/story.png')} />
           
                <Image style={styles.center02} source={require('../assets/test.png')} />
            
        </View>
        

    );
};
const styles = StyleSheet.create({
    
   container:{
       flex:1,
       justifyContent:'center',
       alignItems:'center'
   },
    center01 : {
        flex:1,
        resizeMode:'contain',
        backgroundColor:'#e98758',
    },
    center02 : {
        flex:1,
        resizeMode:'contain',
        backgroundColor:'#efb95a',
    },
})
export default Topic;