import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

class Header extends Component {

    render() {
        return (<View style={[styles.container]}>
            <Text>Header</Text>
        </View>);
    }
}

export const LayoutComponent = Header;
export function mapStateToProps() {
    return {};
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        borderBottomColor: '#BBB',
        borderBottomWidth: 1,
        backgroundColor: '#DDD',
    }
});