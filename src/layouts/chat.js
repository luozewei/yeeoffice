import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, Navigator} from 'react-native';

export default class Chat extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.props.router.toChatList() }>
                    <Text>这个是Chat</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({

})