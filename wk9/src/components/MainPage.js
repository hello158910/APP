import React, { Component } from 'react';
import { ScrollView,View,Text,StyleSheet,TouchableOpacity,Image } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';

import theme from '../json/theme.json';
// Make a component
class MainPage extends Component {
   state = { theme: [] };

    componentWillMount() {
    this.setState({ theme });
  }

    goToPageTwo = (theme) => {
    this.props.navigation.navigate('Theme', { ...theme });
  };

  render() {
    return (
      <ScrollView>
     {/*   <View style={[{marginTop:76}, styles.BannerStyle]}>
          <Text style={styles.textStyle}>News</Text>
        </View>*/}
        <View style={styles.themeFrame1}>
          <ScrollView horizontal={true} >
          {this.state.theme.map((theme) => (
          <View style={styles.theme1Style} key={theme.title}>
            
            <TouchableOpacity
              onPress={()=>this.goToPageTwo(theme )}
              style={{flex:1}}
            >
            <Image style={styles.imgStyle} source={{uri: theme.path}} />
            </TouchableOpacity>
          </View>
          ))}
          </ScrollView>
        </View>
        <View style={styles.BannerStyle}>
          <Text style={styles.textStyle}>Updated</Text>  
        </View>
        <View style={styles.themeFrame}>
           <ScrollView horizontal={true} >
          {this.state.theme.map((theme) => (
          <View style={styles.themeStyle} key={theme.title}>
            
            <TouchableOpacity
              onPress={()=>this.goToPageTwo(theme )}
              style={{flex:1}}
            >
            <Image style={styles.imgStyle} source={{uri: theme.path}} />
            </TouchableOpacity>
          </View>
          ))}
          </ScrollView>
        </View>
        <View style={styles.BannerStyle}>
            <Text style={styles.textStyle}>Hot</Text>  
        </View>
        <View style={styles.themeFrame}>
           <ScrollView horizontal={true} >
              {this.state.theme.map((theme) => (
          <View style={styles.themeStyle} 
            key={theme.title}>
            <TouchableOpacity
              onPress={()=>this.goToPageTwo(theme )}
              style={{flex:1}}
            >
            <Image style={styles.imgStyle} source={{uri: theme.path}} />
            </TouchableOpacity>
          </View>
          ))}
          </ScrollView>
        </View>
            <View style={styles.BannerStyle}>
          <Text style={styles.textStyle}>Recommand</Text>  
        </View>
        <View style={styles.themeFrame}>
           <ScrollView horizontal={true} >
          {this.state.theme.map((theme) => (
          <View style={styles.themeStyle} key={theme.title}>
            
            <TouchableOpacity
              onPress={()=>this.goToPageTwo(theme )}
              style={{flex:1}}
            >
            <Image style={styles.imgStyle} source={{uri: theme.path}} />
            </TouchableOpacity>
          </View>
          ))}
          </ScrollView>
        </View>
      </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
  containers:{
    flex:1,

  },
  BannerStyle:{
    height:40,
    backgroundColor:'#DAE2E5',
    justifyContent:'center',
    paddingLeft:20
  },
  themeFrame:{
    height:100,
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'center'
  },
    themeFrame1:{
    height:200,
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'center'
  },
  themeStyle:{
    height:80,
    width:150,
    marginLeft:15

  },
  theme1Style:{
      height:180,
    width:350,
    marginLeft:15

  },
  textStyle:{
    color:'#575F72'
  },
  imgStyle:{
    flex:1
  }

});
export default MainPage;
