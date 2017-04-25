import React ,{Component} from 'react';
import { ScrollView, View,TouchableOpacity, Image,StyleSheet } from 'react-native';
import { List,ListItem } from 'react-native-elements';

import theme from '../json/theme.json';
// Make a component
class Collection extends Component {
state = { theme: [] };

    componentWillMount() {
    this.setState({ theme });
  }

goToTheme=(theme)=>{
  this.props.navigation.navigate('Theme', {...theme});
};

render(){

  return (
    <ScrollView>
      <View style={{marginTop:"5%",marginLeft:"5%"}}>
         {this.state.theme.map((theme) => (
          <View style={styles.themeStyle} key={theme.title}>
            
            <TouchableOpacity
              onPress={()=>this.goToTheme(theme )}
              style={{flex:1}}
            >
            <Image style={styles.imgStyle} source={{uri: theme.path}} />
            </TouchableOpacity>
          </View>
          ))}
       {/* <Image style={{width:"95%",height:147.3,resizeMode:'contain'}} source={require('../assets/topic.png')} />
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
            />*/}
      </View>
    </ScrollView>
  );
};
}

const styles = StyleSheet.create({

  themeStyle:{
    height:180,
    width:"90%",
    marginLeft:12,
    marginTop:20
  },

  imgStyle:{
    flex:1
  }

});

export default Collection;
