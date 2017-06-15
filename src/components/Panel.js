import React, { Component } from 'react';
import {
    LayoutAnimation,
    Animated,
    PanResponder,
    Text,
    TouchableOpacity
} from 'react-native';

import { Card } from 'react-native-elements';
import albums from '../json/albums.json';

class Panel extends Component {
    constructor(props) {
        super(props);
        const position = new Animated.ValueXY();
        this.state = { height: this.props.expanded ? null : 0, position }
    }

    goToPageTwo = (album) => {
        this.props.navigation.navigate('Details', { ...album });
    };

    componentWillMount() {
        this.panResponder = PanResponder.create({
            //onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponderCapture: (this.onShouldDrag),
            onPanResponderMove: (event, gesture) => {
                this.state.position.setValue({ x: gesture.dx });
            },
            onPanResponderRelease: this.onReleaseItem,
            onPanResponderTerminate: this.onReleaseItem,
        });
    }

    onShouldDrag = (event, gesture) => {
        const { dx } = gesture;
        return Math.abs(dx) > 2;
    }


    onReleaseItem = (event, gesture) => {
        let config = {
            toValue: { x: 0, y: 0 },
            duration: 500,
        };

        Animated.spring(
            this.state.position,
            config,
        ).start();
    }


    render() {
        const { album } = this.props;
        const { height, position } = this.state;
        return (
            <Animated.View
                style={position.getLayout()}
                {...this.panResponder.panHandlers}
            >
            <TouchableOpacity
            onPress={() => this.goToPageTwo(album)}>
                <Card
                    image={{ uri: album.image }}>
                </Card>
                </TouchableOpacity>
            </Animated.View>
        );
    }
}


export default Panel;
