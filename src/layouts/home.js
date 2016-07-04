import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, Navigator, ViewPagerAndroid} from 'react-native';
import connectComponent from '../utils/';
import * as Tab from '../components/tab';
import * as ChatList from './chatlist';

const TabComponent = connectComponent(Tab);
const ChatListComponent = connectComponent(ChatList);
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
    _tabChange(pageIndex) {
        let {actions} = this.props;
        actions.update_tab(pageIndex);
        this.viewPager.setPage(pageIndex);
    }
    _onPageSelected(e) {
        let {actions} = this.props;
        let {position} = e.nativeEvent;
        if (position === undefined) {
            return;
        }
        actions.update_tab(position);
    }
    render() {
        return (
            <View style={styles.container}>
                <ViewPagerAndroid
                    keyboardDismissMode ='on-drag'
                    ref={(view) => this.viewPager = view}
                    initialPage={this.props.activeIndex} style={styles.container}
                    onPageSelected={ this._onPageSelected.bind(this) }
                    scrollEnabled ={false}
                    >
                    <View>
                        <ChatListComponent {...this.props}></ChatListComponent>
                    </View>
                    <View><Text>消息</Text></View>
                    <View><Text>你好</Text></View>
                </ViewPagerAndroid>

                <TabComponent
                    tabs={Tabs}
                    selectedView={this.props.activeIndex}
                    tabChange={this._tabChange.bind(this) }
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