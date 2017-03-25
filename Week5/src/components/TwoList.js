import React from 'react';
import {Text, View, Image} from 'react-native';

const TwoList=()=>{
    const {bg,picStyle}=styles;

    return(
         <View style={bg}>
            <Image style={picStyle} source={require('./img_leagueoflegends.png')}/>
            <Image style={picStyle} source={require('./img_counterstrike.png')}/>
            <Image style={picStyle} source={require('./img_hearthstone.png')}/>
            <Image style={picStyle} source={require('./img_dota2.png')}/>
            <Image style={picStyle} source={require('./img_h1z1.png')}/>
            <Image style={picStyle} source={require('./img_destiny.png')}/>
        </View>
    );
};

const styles={
    bg:{
        flexDirection:'row',
        flexWrap:'wrap',
    },
    picStyle:{
        height:180,
        width:180,
        marginLeft:5,
        marginTop:5,
    },
};

export default TwoList;