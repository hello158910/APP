import React ,{Component} from 'react';
import { ScrollView, View,TouchableOpacity, Image,StyleSheet } from 'react-native';
import { List, ListItem, Card } from 'react-native-elements';

import albums from '../json/albums.json';
// Make a component
class Collection extends Component {
state = { albums: [] };

    componentWillMount() {
    this.setState({ albums });
  }

goToTheme=(album)=>{
  this.props.navigation.navigate('Theme', {...album});
};

render(){

  return (
    <ScrollView>
      <View style={{marginTop:"5%",marginLeft:"5%"}}>
         {this.state.albums.map((album) => (
            
            <TouchableOpacity
            key={album.title}
            onPress={() => this.goToTheme(album)}>
                <Card
                
                    image={{ uri: album.image }}>
                </Card>
                </TouchableOpacity>
          ))}
 
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