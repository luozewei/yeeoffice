import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, Navigator} from 'react-native';
import connectComponent from '../utils/';
import * as Tab from '../components/tab';

const TabComponent = connectComponent(Tab);

const Tabs = [
    {
        icon: require('../imgs/message.png'),
        activeIcon: require('../imgs/message_a.png'),
        title: '消息',
        name: 'message'
    }, {
        icon: require('../imgs/contact.png'),
        activeIcon: require('../imgs/contact_a.png'),
        title: '联系人',
        name: 'contact'
    }, {
        icon: require('../imgs/user.png'),
        activeIcon: require('../imgs/user_a.png'),
        title: '我的',
        name: 'user'
    }
];

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                
                <TabComponent
                    tabs={Tabs}
                    selectedView={this.props.activeIndex}
                    >
                </TabComponent>
            </View>
        );
    }
}
export const LayoutComponent = Home;
export function mapStateToProps(state) {
    return {
        activeIndex: state.tab.activeIndex
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1
    }
})