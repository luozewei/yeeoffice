import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './store/storeconf';
import Navigation from './layouts/navigation';

const store = configureStore();


export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Navigation />
            </Provider>
        );
    }
}
