import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Platform} from 'react-native';
import config from '../config';
import SignalrHubs from '../api/signalrhubs';
import signalr from 'react-native-signalr';

class WsRoot extends Component {
    constructor(props, context) {
        super(props, context);
        this.connection = signalr.hubConnection(config.domain, {
            Accept: 'text/plain, */*; q=0.01'
        });
        this.connection.url = config.domain + config.apiPath;
        let userID = 'i:0#.f|membership|jason.luo@akmiicn.onmicrosoft.com';
        this.connection.qs = {
            YGUToken: userID,// "i:0#.f|membership|jason.luo@akmiicn.onmicrosoft.com",
            ConnectionType: 'Android',
            YunGalaxyUserID: userID,
            MerchantKey: 'TestKey',
        };
        this.proxy = this.connection.createHubProxy(config.apiPath);
        this.proxy.server = SignalrHubs.hubserver;

        this.proxy.on('passivityReceiveMessage', (message) => {
            console.log(message.Data);
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
            this.props.actions.user_login('','logined');
            console.log('Now connected, connection ID=' + this.connection.id);
            this.proxy.server.initiativeGetAllUser(this.proxy).done((message) => {
                console.log(message.Data);
                this.props.actions.get_all_user(message.Data);
            });
            // this.proxy.server.initiativeGetSubscriptionList(this.proxy).done(function (d) {
            //     console.log(d);
            // });
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
        console.log(nextProps);
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