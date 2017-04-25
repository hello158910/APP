import React,{Component} from 'react';
import { ScrollView, View,Image,TouchableOpacity } from 'react-native';
import { Button, Card, Text, PricingCard, Tile } from 'react-native-elements';

import theme from '../json/theme.json';

const Category =(props)=>{
  const {title}=props.navigation.state.params;  

state = { theme: [] };

goToTheme=(theme)=>{
  this.props.navigation.navigate('Theme', {...theme});
};
  
  return(
    <ScrollView>
        <View style={{marginTop:"5%",marginLeft:"5%"}}>
        <Image style={{width:"95%",height:147.3,resizeMode:'contain'}} source={require('../assets/topic.png')} />
        <TouchableOpacity
              onPress={()=>this.goToTheme()}
              style={{flex:1}}
            />
      </View>
       <View style={{marginTop:"2%",marginLeft:"5%"}}>
        <Image style={{width:"95%",height:147.3,resizeMode:'contain'}} source={require('../assets/topic.png')} />
        <TouchableOpacity
              onPress={()=>this.goToTheme()}
              style={{flex:1}}
            />
      </View>

       <View style={{marginTop:"2%",marginLeft:"5%"}}>
        <Image style={{width:"95%",height:147.3,resizeMode:'contain'}} source={require('../assets/topic.png')} />
        <TouchableOpacity
              onPress={()=>this.goToTheme()}
              style={{flex:1}}
            />
      </View>

       <View style={{marginTop:"2%",marginLeft:"5%"}}>
        <Image style={{width:"95%",height:147.3,resizeMode:'contain'}} source={require('../assets/topic.png')} />
        <TouchableOpacity
              onPress={()=>this.goToTheme()}
              style={{flex:1}}
            />
      </View>
    </ScrollView>

  );
};

export default Category;