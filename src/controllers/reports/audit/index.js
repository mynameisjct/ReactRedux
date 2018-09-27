import React, {Component} from 'react';
import {View, TextInput} from 'react-native';
import { getModules } from './redux/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Combobox from './components/Combobox';
import RadioButtons from './components/RedioButtons';
import ViewReport from './components/ViewReport';

class AuditTrail extends Component{
    constructor(props){
        super(props);

        this.state = {
            action_option: [
                {value: ''},
                {value: 'INSERT'},
                {value: 'DELETE'},
                {value: 'UPDATE'},
                {value: 'INVOKED'},
            ],
            module_option: [],
            text: '',
            radioData: [
                {label: 'Old Record', value: 0},
                {label: 'Modified Record', value: 1}
            ],
            selectedAction: '',
            selectedModule: '',
            company: 106,
        };

        this.chickenDinner1 = this.chickenDinner1.bind(this);
        this.chickenDinner2 = this.chickenDinner2.bind(this);
        this.selectedRadio = this.selectedRadio.bind(this);
    }

    async chickenDinner1(e) {
        await this.setState({selectedAction: e});
    }

    async chickenDinner2(e) {
        await this.setState({selectedModule: e});
    }

    selectedRadio(e) {
        console.log(JSON.stringify(e)) // returns 1 or 0
    }

    componentDidMount() {
        this.props.getModules();
    }

    componentWillReceiveProps(nxtProps){

        if(this.props.auditReducer.modules != nxtProps.auditReducer.modules){
            let moduleList = nxtProps.auditReducer.modules;
        
            if(moduleList.data.length > 0){
                if(moduleList.flagno === 1){
                   let arr = moduleList.data;
                   let arrData = [{value: ''}];

                   arr.forEach(element => {
                       arrData.push({value: element});
                   });

                   this.setState({module_option: arrData});
                }
            }
        }
    }

    render() {
            
        return(
            <View>
                <View style={{flexDirection: 'row'}}>
                    <View>
                        <Combobox label={'Select Action'} selectThis={this.chickenDinner1} cData={this.state.action_option}/>
                    </View>
                    <View style={{paddingLeft: 30}}>
                        <Combobox label={'Select Module'} selectThis={this.chickenDinner2} cData={this.state.module_option}/>
                    </View>
                    <View style={{padding: 10, flexDirection: 'column'}}>
                        <View style={{paddingLeft: 30, borderWidth: 0, height: 40, marginTop: 23, flexDirection: 'row'}}>
                            <TextInput width={180} onChangeText={(text) => this.setState({text})} value={this.state.text} placeholder={'tap to search words in ...'}/>
                            <View style={{paddingTop: 5}}>
                                <RadioButtons radioItems={this.state.radioData} intialRadio={0} pressedRadio={this.selectedRadio} />
                            </View>
                        </View>
                        <ViewReport reportdata = {this.state}/>
                    </View>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = dispatch => 
   bindActionCreators({
            getModules
        },
        dispatch
    )

export default connect(mapStateToProps, mapDispatchToProps)(AuditTrail);