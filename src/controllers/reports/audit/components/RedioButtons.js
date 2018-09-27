import React, { Component } from 'react';
import {View} from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

class RadioButtons extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View>
                <RadioForm
                    radio_props = {this.props.radioItems}
                    initial={this.props.initialRadio}
                    onPress={this.props.pressedRadio}
                    formHorizontal={true}
                    style={{width: 270, justifyContent: 'space-between'}}
                >
                    <RadioButtonInput buttonSize={20} />
                </RadioForm>
            </View>
        );
    }
}

export default RadioButtons;