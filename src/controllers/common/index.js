import React, {Component} from 'react';
import {View,Text} from 'react-native';

export class Header extends Component {
    render() {
        let title = '';

        this.props.title != undefined ? title = this.props.title : title;

        return(
            <View style={styles.header}>
                <Text>{title}</Text>
            </View>
        )
    }
}

export class LoadMask extends Component {
    render() {
        let title = '';

        this.props.title != undefined ? title = this.props.title : title;

        return(
            <View>
                <Text>{title}</Text>
            </View>
        )
    }
}

const styles = {
    header: {
        flexDirection: 'column',
        padding: 10,
        borderWidth: 0,
        backgroundColor: 'khaki',
        justifyContent: 'center',
        alignItems: 'center'
    }
}