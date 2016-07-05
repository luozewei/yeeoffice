import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import Signalr from 'signalr-client';


class WsRoot extends Component {
    constructor(props, context) {
        super(props, context);
        this.client = new Signalr.client(
            'http://192.168.3.238/receiveMessageHub',
            ['receiveMessageHub'], 2
        );
        this.client.on('receiveMessageHub', 'InitiativeGetAllUser', function (d) {
            console.log(d);
        });
        this.client.serviceHandlers.messageReceived = function (d) {
            /* message: this is the raw message received on the websocket */
            console.log(d);
            return true; //if true the client handler for the hub will not be raised.
            //if false the client handler will be raised.
        }
    }

    WsLoginAndStart() {
        this.client.start();
    }
    WsError() {
        console.log('ws error');
        this.WsReconn();
    }
    WsLoginOut() {

        console.log('ws close');
    }
    WsReconn() {
        console.log('ws reconn');
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.isLogin !== this.props.isLogin) {
            let {actions} = this.props;
            if (nextProps.isLogin == 'login') {
                this.WsLoginAndStart();
            } else {
                this.WsLoginOut();
            }
        }
    }

    render() {
        return <View></View>;
    }
}

export const LayoutComponent = WsRoot;

export function mapStateToProps(state) {
    return {
        isLogin: state.user.isLogin
    };
}