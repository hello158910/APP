import React from 'react';
import {Text, View, Image} from 'react-native';

const Header = (props)=>{
    const {textStyle,viewStyle,imageStyle}=styles;
    
    return(
        <View style={viewStyle}>
            <Image style={imageStyle} source={require('./btn_back.png')}/>
            <Text style={textStyle}>{props.headerText}</Text>
            <Image style={imageStyle} source={require('./btn_like.png')}/>
        </View>
    );
};

const styles={
    viewStyle:{
        height:64,
        width:375,
        backgroundColor:'rgb(100,65,165)',
        flexDirection:'row',
        paddingTop:25,
        justifyContent:'space-between',
    },
    textStyle:{
        fontSize:18,
        color:'white',
        marginTop:5.5,
    },
    imageStyle:{
        height:33,
        width:33,
        marginLeft:8.5,
        marginRight:8.5,
    }
};

export default Header;