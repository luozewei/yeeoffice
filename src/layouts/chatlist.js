import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

class ChatList extends Component {
    constructor(props) {
        super(props);

    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.friends !== this.props.friends) {

        }
    }

    _RenderUser(friends) {
        if (friends && friends.length > 0) {
            return friends.map((friend, index) => {
                return <TouchableOpacity
                    style={[styles.border]}
                    key={index}
                    onPress={() => this.props.router.toMessage({ friend: friend }) }>
                    <Text >{friend.YGUIName_CN}</Text>
                </TouchableOpacity>;
            });
        }
    }

    render() {
        return (<View>
            <Text>Current USer: </Text>
            {this._RenderUser(this.props.friends) }
        </View>
        );
    }
}

export const LayoutComponent = ChatList;
export function mapStateToProps(state) {
    return {
        friends: state.friend.friends
    }
}
const styles = StyleSheet.create({
    border: {
        borderColor: '#DDD',
        margin: 10,
        borderWidth: 1
    }
});