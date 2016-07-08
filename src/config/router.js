import React from 'react';
import ReactNative from 'react-native';
import {Navigator, Platform, BackAndroid} from 'react-native';
import _ from 'lodash';
import * as CustomSceneConfigs from './sceneconfig';
import connectComponent  from '../utils/';
import {Home, Message} from '../layouts/';



export default class Router {
    constructor(navigator) {
        this.navigator = navigator;
        //Android的物理返回键，该返回到哪里，到哪块停止
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', () => {
                const routesList = this.navigator.getCurrentRoutes();
                const currentRoute = routesList[routesList.length - 1];
                if (currentRoute.name !== 'home') {
                    navigator.pop();
                    return true;
                }
                return false;
            });
        }
    }

    // 因为有Redux,所以这里会将所有的页面都进行Connect再处理
    push(props = {}, route) {
        let routesList = this.navigator.getCurrentRoutes();
        let nextIndex = routesList[routesList.length - 1].index + 1;
        route.props = props;
        route.index = nextIndex;
        route.sceneConfig = route.sceneConfig ? route.sceneConfig : CustomSceneConfigs.customFloatFromRight;
        route.id = _.uniqueId();
        route.component = connectComponent(route.component);
        this.navigator.push(route);
    }

    //返回
    pop() {
        this.navigator.pop();
    }
    
    toHome(props) {
        this.push(props, {
            component: Home,
            name: 'home',
            sceneConfig: CustomSceneConfigs.customFloatFromBottom
        });
    }
    toMessage(props) {
        this.push(props, {
            component: Message,
            name: 'message',
            sceneConfig: CustomSceneConfigs.customFloatFromBottom
        });
    }
}
