import React, {Component} from 'react';
import {View, TextInput, Text, Image, StyleSheet, TouchableOpacity, Navigator} from 'react-native';

class Login extends Component {
    renderLoginView() {

    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.isLogin !== this.props.isLogin) {
            //this.props.router.toHome();
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                ref 
                style={[styles.flexcenter, styles.m_10]}

                >
                </TextInput>
                <TouchableOpacity style={[styles.flexcenter, styles.button, styles.m_10]} onPress={() => this.props.actions.user_login('1', '2') }>
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
    m_10: {
        marginLeft: 10,
        marginRight: 10
    },
    flexcenter: {
        alignItems: 'center'
    },
    button: {
        borderColor: '#F00',
        borderWidth: 1,
        marginLeft: 10,
        marginRight: 10
    }
})
export const LayoutComponent = Login;

export function mapStateToProps(state) {
    return {
        isLogin: state.user.isLogin
    };
}
