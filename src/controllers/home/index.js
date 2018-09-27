import React, {Component} from 'react';
import {View} from 'react-native';
import AuditTrail from '../reports/audit';
import {Header} from '../common';

class Home extends Component{
    
    render() {
        return(
            <View>
                <Header title='FlatList Sample'/>
                <View style={{padding: 10}}>
                    <AuditTrail/>
                </View>
                
            </View>
        )
    }
}

export default Home;