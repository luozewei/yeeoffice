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
