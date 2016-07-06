import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Platform} from 'react-native';
import SignalrHubs from '../api/signalrhubs';
import signalr from 'react-native-signalr';

class WsRoot extends Component {
    constructor(props, context) {
        super(props, context);
        this.connection = signalr.hubConnection('http://192.168.3.238', {
            Accept: 'text/plain, */*; q=0.01'
        });
        this.connection.url = 'http://192.168.3.238/receiveMessageHub';
        let userID = 'i:0#.f|membership|jason.luo@akmiicn.onmicrosoft.com';
        this.connection.qs = {
            YGUToken: userID,// "i:0#.f|membership|jason.luo@akmiicn.onmicrosoft.com",
            ConnectionType: Platform.OS === 'android' ? 'Android' : 'IOS',
            YunGalaxyUserID: userID,
            MerchantKey: 'TestKey',
        };
        this.proxy = this.connection.createHubProxy('receiveMessageHub');
        this.proxy.server = SignalrHubs.hubserver;

        this.proxy.on('passivityReceiveMessage', (message) => {
            console.log(message);
            //TODO actions
        });
        this.connection.connectionSlow(function () {
            console.log('We are currently experiencing difficulties with the connection.')
        });
        this.connection.error(function (error) {
            console.log('SignalR error: ' + error)
        });
    }

    WsSendMessage(message) {
        this.proxy.server.initiativeSendALLNotification(this.proxy, message).done(function (d) {
            console.log(d);
        });
    }
    WsLoginAndStart() {
        this.connection.start().done(() => {
            console.log('Now connected, connection ID=' + this.connection.id);
            console.log(this.proxy.server);
            this.proxy.server.initiativeGetSubscriptionList(this.proxy).done(function (d) {
                console.log(d);
            });
        }).fail(() => {
            console.log('fail');
        });
        //     this.proxy.server.initiativeGetSubscriptionList(this.proxy).done(function (d) {
        //     });
        // }).fail(() => {
        //     console.log('Failed');
        // });
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
            if (nextProps.isLogin === 'login') {
                this.WsLoginAndStart();
            } else {
                this.WsLoginOut();
            }
        }
        if (nextProps.sendMessage !== this.props.sendMessage) {
            this.WsSendMessage(nextProps.sendMessage);
        }
    }

    render() {
        return <View></View>;
    }
}

export const LayoutComponent = WsRoot;

export function mapStateToProps(state) {
    return {
        isLogin: state.user.isLogin,
        sendMessage: state.user.sendMessage
    };
}