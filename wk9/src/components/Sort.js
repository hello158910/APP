import React, { Component } from 'react';
import { ScrollView,StyleSheet,View,Image,TouchableOpacity } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';

import sort from '../json/sort.json';

// Make a component
class Sort extends Component {

  componentWillMount(){
    this.setState({sort});
  }

  goToPageTwo=(sort)=>{
    this.props.navigation.navigate('Category',{...sort});
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.test}>
        <View style={styles.container}>
          {this.state.sort.map((sort)=>(
          <View key={sort.title} style={styles.iconFrame}>
           <TouchableOpacity
              onPress={()=>this.goToPageTwo(sort)}
              style={{flex:1}} >
              <Image style={styles.iconStyle} source={{uri: sort.path}} />
              </TouchableOpacity>
          </View>
          ))}
         
        
        </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  test:{
    flex:1
  },
  container:{
    marginTop:"5%",
    flexWrap:'wrap',
    flexDirection:'row',
    justifyContent:'space-around',
  },
  iconFrame:{
    height:133,
    marginTop:"2%"
  },
  iconStyle:{
    width:133,
    height:133
   }
})
export default Sort;
