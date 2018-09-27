import React, {Component} from 'react';
import {Dropdown} from 'react-native-material-dropdown';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

class Combobox extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return(
            <Dropdown 
                label={this.props.label} 
                data={this.props.cData}
                animationDuration={0}
                containerStyle={styles}
                onChangeText={this.props.selectThis}
            />
        );
    }
}

const styles = {
    width: 120
}

export default Combobox;