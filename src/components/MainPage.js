import React, { Component } from 'react';
import { View, ScrollView, Text, Image, Button, TouchableOpacity, } from 'react-native';
import { List, ButtonGroup } from 'react-native-elements';
import {
    Card,
    CardImage,
    CardTitle,
    CardContent
} from 'react-native-card-view';


import albums from '../json/albums.json';
import tests from '../json/123.json';
import Panel from './Panel';


// Make a component
class MainPage extends Component {


    constructor() {
        super()
        this.state = {
            selectedIndex: 0
        }
        this.updateIndex = this.updateIndex.bind(this)
    }
    updateIndex(selectedIndex) {
        this.setState({ selectedIndex })
        if (selectedIndex == 0) this.setState({
            first:false,
            one: true,
            two: false,
            three: false
        })
        else if (selectedIndex == 1) this.setState({
            first:false,
            one: false,
            two: true,
            three: false
        })
        else if (selectedIndex == 2) this.setState({
            first:false,
            one: false,
            two: false,
            three: true
        })
    }


    state = {
        tests:[],
        albums: [],
        first:true,
        one: false,
        two: false,
        three: true,
    };
First(){
       
            return (

                <View>
                    {this.state.albums.map((album) => (

                        <Card>
                            < CardImage >
                                <TouchableOpacity
                                    //key={album.title}
                                    onPress={() => this.goToTheme(album)}>
                                    <Image
                                        style={{ width: 401, height: 26 }}
                                        source={{ uri: "https://getmdl.io/assets/demos/image_card.jpg" }}
                                    />

                                </TouchableOpacity>
                            </CardImage>
                        </Card>
                    ))}
                </View>
            );
        
    }
    FirstButton() {
        if (this.state.one) {
            console.log("one");
            return (

                <View>
                    {this.state.albums.map((album) => (

                        <Card>
                            < CardImage >
                                <TouchableOpacity
                                    //key={album.title}
                                    onPress={() => this.goToTheme(album)}>
                                    <Image
                                        style={{ width: 401, height: 326 }}
                                        source={{ uri: "https://getmdl.io/assets/demos/image_card.jpg" }}
                                    />

                                </TouchableOpacity>
                            </CardImage>
                        </Card>
                    ))}
                </View>
            );
        }
    }
    SecondButton() {
         if (this.state.two) {
            console.log("two");
            return (

                <View>
                    {this.state.tests.map((album) => (

                        <Card>
                            < CardImage >
                                <TouchableOpacity
                                    //key={album.title}
                                    onPress={() => this.goToTheme(album)}>
                                    <Image
                                        style={{ width: 401, height: 126 }}
                                        source={{ uri: "https://getmdl.io/assets/demos/image_card.jpg" }}
                                    />

                                </TouchableOpacity>
                            </CardImage>
                        </Card>
                    ))}
                </View>
            );
        }
    }

    ThirdButton() {
        if (this.state.three) {
            console.log("three");
            return (

                <View>
                    {this.state.albums.map((album) => (

                        <Card>
                            < CardImage >
                                <TouchableOpacity
                                    //key={album.title}
                                    onPress={() => this.goToTheme(album)}>
                                    <Image
                                        style={{ width: 401, height: 226 }}
                                        source={{ uri: "https://getmdl.io/assets/demos/image_card.jpg" }}
                                    />

                                </TouchableOpacity>
                            </CardImage>
                        </Card>
                    ))}
                </View>
            );
        }
    }

    componentWillMount() {
        this.setState({ albums });
        this.setState({ tests });
        console.log(this.state);
        console.log('ohoh');
        this.updateIndex(0);
    }

    goToTheme = (album) => {
        this.props.navigation.navigate('Details', { ...album });
    };

    render() {
        const { album } = this.props;
        const { test } = this.props;

        const buttons = ['Hello', 'World', 'Buttons']
        const { selectedIndex } = this.state

        return (
            <View style={styles.container}>

<ButtonGroup
                    //     style={{position:'absolute'}}
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    containerStyle={{ height: 30 }} />
            <ScrollView >
                
                    
                
                {/*{this.First()}*/}
                {this.FirstButton()}
                {this.SecondButton()}
                {this.ThirdButton()}



                <Card>
                    <CardTitle>
                        <Text>Testing</Text>
                    </CardTitle>
                    <CardImage>
                        <Image
                            style={{ width: 402, height: 256 }}
                            source={{ uri: "https://images-na.ssl-images-amazon.com/images/I/51qmhXWZBxL.jpg" }} />
                    </CardImage>
                </Card>
            </ScrollView>
</View>
        );
    }
}

const styles = {
    container: {
        backgroundColor: '#f6f6f6',
        flex: 1,
    }
};
export default MainPage;
