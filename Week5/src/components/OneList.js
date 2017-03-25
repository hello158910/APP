import React from 'react';
import {Text, View, Image} from 'react-native';

const OneList=()=>{
    const {picStyle}=styles;

    return(
         <View>
            <Image style={picStyle} source={require('./img_firebat.png')}/>
            <Image style={picStyle} source={require('./img_forsen.png')}/>
            <Image style={[picStyle, {height:144}]} source={require('./img_kolento.png')}/>
        </View>
    );
};

const styles={
    picStyle:{
        height:200,
        width:365,
        marginTop:5.5,
        marginLeft:4.5
    },
};

export default OneList;