import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, Navigator} from 'react-native';
import Tab from '../components/tab';


export default class ChatList extends Component {

    render() {
        return <View style={styles.container}>
            <View style={[styles.flexCenter]}>
                <TouchableOpacity onPress={() => this.props.router.toChat() }>
                    <Text>你好啊</Text>
                </TouchableOpacity>
            </View>
            <Tab></Tab>
        </View>;
    }
}

export function mapStateToProps(state) {
    return {};
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    flexCenter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});