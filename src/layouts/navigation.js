import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Dimensions, Navigator } from 'react-native';
import connectComponent from '../utils';
import config from '../config/';
import * as Login   from './login';
import Router from '../config/router';

const component = connectComponent(Login);

/*首屏页面*/
const initialRouter = {
    name: 'login',
    index: 0,
    component: component,
    id: 0
}

export default class Navigation extends Component {
    //加载组件
    renderScene(route, navigator) {
        let { component, name, props, id, index } = route;
        this.router = this.router || new Router(navigator);

        if (component) {
            return React.createElement(component, {
                ref: view => this[index] = view,
                router: this.router,
                route: {
                    name,
                    id,
                    index
                },
                ...props
            });
        }
    }

    configureScene(route) {
        if (route.sceneConfig) {
            return route.sceneConfig
        }
        return Navigator.SceneConfigs.FloatFromRight
    }
    render() {
        return <Image
            source={{ uri: config.bgImgUri }}
            style={styles.bg}>
            <Navigator
                ref={view => this.navigator = view}
                initialRoute={initialRouter}
                configureScene={this.configureScene.bind(this) }
                renderScene={this.renderScene.bind(this) }/>
        </Image>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    flexCenter: {//居中
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bg: {
        flex: 1,
        backgroundColor: 'transparent'
    }
});
