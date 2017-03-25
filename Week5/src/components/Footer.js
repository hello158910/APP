import React from 'react';
import {Text, View, Image} from 'react-native';

const Footer=()=>{
    const{lineStyle,containerStyle,btnStyle,picStyle,textStyle}=styles;

    return(
        <View style={styles.TapStyle}>
            <View style={lineStyle}>
            </View>
            <View style={containerStyle}>
                <View style={btnStyle}>
                    <Image style={picStyle} source={require('./btn_games_selected.png')} />
                    <Text style={[textStyle ,{color:'rgb(100,65,165)'}]}>Games</Text>
                </View>
                <View style={btnStyle}>
                    <Image style={picStyle} source={require('./btn_channels.png')} />
                    <Text style={textStyle}>Channels</Text>
                </View>
                <View style={btnStyle}>
                    <Image style={picStyle} source={require('./btn_following.png')} />
                    <Text style={textStyle}>Following</Text>
                </View>
                <View style={btnStyle}>
                    <Image style={picStyle} source={require('./btn_me.png')} />
                    <Text style={textStyle}>Me</Text>
                </View>
            </View>
        </View>
    );
}

const styles={
    TapStyle:{
       position:'absolute',
       bottom:0,
    },
    lineStyle:{
        width:375,
        height:1,
        backgroundColor:'rgba(0,0,0,0.2)',
    },
    containerStyle:{
        width:375,
        height:49,
        flexDirection:'row',
        backgroundColor:'white'
    },
    btnStyle:{
        height:49,
        alignItems:'center',
    },
    picStyle:{
        width:93.725,
        height:49,
        backgroundColor:'white',
    },
    textStyle:{
        fontSize:10,
        color:'rgb(187,187,187)',
        position:'absolute',
        bottom:1,   
    }
};

export default Footer;