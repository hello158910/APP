import React from 'react';
import {Text, View, Image} from 'react-native';

const Nav =()=>{
    const {clickBar,clickedText,textStyle,optionStyle,navStyle}=styles;

    return(
    <View style={navStyle}>
        <View style={optionStyle}>
            <Text style={textStyle}>LIVE</Text>
            <View style={clickBar}></View>
        </View>
        <View style={optionStyle}>
            <Text style={textStyle, clickedText}>RECENT</Text>
        </View>
    </View>
    );
};

const styles={
    textStyle:{
        fontSize:13,
        color:'rgb(100,65,165)',
    },
    clickedText:{
        color:'rgb(187,187,187)',
    },
    optionStyle:{
        width:187.5,
        height:44,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
    },
    navStyle:{
        flexDirection:'row',
    },
    clickBar:{
        position:'absolute',
        height:5,
        width:187.5,
        backgroundColor:'rgb(100,65,165)',
        bottom:0,
    },
};

export default Nav;