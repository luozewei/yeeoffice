import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

class Message extends Component {
    _renderMessage(){

    }
    render() {
        console.log(this.props);
        return <View>
        <Text>Hello World</Text>
        </View>;
    }
}

export const LayoutComponent = Message;
export function mapStateToProps(state) {
    return {
        messages: state.message.messages
    };
}