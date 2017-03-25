import React from 'react';
import { Text, View, Image } from 'react-native';

const Search = () => {
    return (
        <View style={styles.header}>
            <View style={styles.search}>
                <Image style={styles.searchIcon} source={require('./icon_search.png')} />
                <Text style={styles.textStyle}>Search</Text>
            </View>
            <Image style={styles.castIcon} source={require('./btn_cast.png')} />
        </View>

    );
};

const styles = {
    header: {
        height: 64,
        backgroundColor: 'rgb(100,65,165)',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:20
    },
    search: {
        width: 320,
        height: 30,
        backgroundColor: 'rgb(49,31,83)',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems:'center',
    },
    searchIcon:{ 
        height: 18, 
        width: 18, 
        marginLeft: 8.5 
    },
    textStyle:{
        color:'rgb(185,163,227)',
        marginLeft:8.5
    },
    castIcon:{
        height:33,
        width:33,
        marginLeft:5
    },
};

export default Search;