import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, Navigator} from 'react-native';

export default class ChatList extends Component {
    render() {
        return <View  onPress={router.toChat}><Text>你好</Text></View>;
    }
}

export function mapStateToProps(state) {
    return {};
}
