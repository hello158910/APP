import React, { Component } from 'react';
import { ScrollView, Text, Image } from 'react-native';
import { Card, ButtonGroup } from 'react-native-elements';


import albums from '../json/albums.json';
import Panel from './Panel';


// Make a component
class PageOne extends Component {
  state = { albums: [] };

  componentWillMount() {
    this.setState({ albums });
    console.log(this.state);
  }

 constructor() {
        super()
        this.state = {
            selectedIndex: 2
        }
        this.updateIndex = this.updateIndex.bind(this)
    }
    updateIndex(selectedIndex) {
        this.setState({ selectedIndex })
    }


  render() {
     const buttons = ['Hello', 'World', 'Buttons']
        const { selectedIndex } = this.state
    return (
      
      <ScrollView>
        {this.state.albums.map((album) => (
          <Panel
              key={album.title}
              album={{...album}}
              navigation={this.props.navigation}
            />
        ))}

      <ButtonGroup
                onPress={this.updateIndex}
                selectedIndex={selectedIndex}
                buttons={buttons}
                containerStyle={{ height: 100 }} />
  



      </ScrollView>

    );
  }
}

export default PageOne;
