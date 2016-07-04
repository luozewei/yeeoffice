import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, Navigator} from 'react-native';

class Login extends Component {
    renderLoginView() {

    }
    render() {
        if (this.props.isLogin) {

        }
        return (

            <View style={styles.container}>
                <TouchableOpacity style={styles.flexcenter} onPress={this.props.actions.user_login('1', '2') }>
                    <Text>登录</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    flexcenter: {
        alignItems: 'center'
    }
})
export const LayoutComponent = Login;

export function mapStateToProps(state) {
    return {
        isLogin: state.user.isLogin
    };
}
