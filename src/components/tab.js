import React, {Component, PropTypes} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, Navigator} from 'react-native';

class Tab extends Component {
    constructor(props, context) {
        super(props, context);
    }
    _renderChildren(tab, pageIndex) {
        let active = pageIndex === this.props.selectedView;
        return <TouchableOpacity style={styles.tab} key={pageIndex} onPress={() => this.props.actions.update_tab(pageIndex) }>
            <Image source={active ? tab.activeIcon : tab.icon} style={styles.tabIcon}></Image>
            <Text style={styles.tabText}>{tab.title}</Text>
        </TouchableOpacity>;
    }
    render() {
        return (
            <View style={[styles.flexCenter, styles.tabs]}>
                {this.props.tabs.map((tab, i) => this._renderChildren(tab, i)) }
            </View>
        );
    }
}
export const LayoutComponent = Tab;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    flexCenter: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: 52,
    },
    tabs: {
        backgroundColor: '#DDD',
        borderTopColor: '#CCC',
        borderTopWidth: 1,
    },
    tab: {
        flex: 1,
        alignItems: 'center',
    },
    tabText: {
        fontSize: 12,
        color: '#428bca'
    },
    tabIcon: {
        height: 25,
        width: 25
    }
})


