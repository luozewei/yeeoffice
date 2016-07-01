import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

/*首屏页面*/
const initialRouter = {

}

export default class Navigation extends Component {
    //加载组件
    renderScene(route, nav) {

    }
    render() {
        return <Navigator
            renderScene={this.renderScene.bind(this) }
            initialRoute={this.initialRouter}
            >
        </Navigator>;
    }
}

const styles = StyleSheet.create({

});
