import React, {Component} from 'react';
import {View, ScrollView, FlatList, TouchableWithoutFeedback, Text} from 'react-native';
import { Button, ListItem } from 'react-native-elements'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getReport, addMoreReport } from '../redux/actions';
import { LoadMask } from '../../../common';

class ViewReport extends Component {
    constructor(props){
        super(props);

        this.state = { 
            payload: undefined,
            data: [],
            page: 1,
            totalPage: undefined
        };

        this.nextPage = this.nextPage.bind(this);
    }

    componentDidMount(){
        console.log('reading PAYLOAD: ' + JSON.stringify(this.state.payload));
    }

    componentWillReceiveProps(nextProps){
        if(this.props.reportdata != undefined && nextProps.reportdata != undefined){
            if(this.props.reportdata != nextProps.reportdata){
                this.getPayload(nextProps.reportdata);
            }
        }
    }

    getPayload = payload => {
        this.setState({
            payload: {
                action: payload.selectedAction,
                module: payload.selectedModule,
                transtype: 2,
                company: payload.company,
                page: this.state.page,
                }
            },
            () => this.getReport(false)
        )
    }

    nextPage(){

        console.log('rendering next page');

        let currentpage = this.state.page + 1;
        let total = this.state.totalPage == undefined ? 100 : this.state.totalPage;

        let payload = {
            action: this.state.payload.action,
            module: this.state.payload.module,
            transtype: this.state.payload.transtype,
            company: this.state.payload.company,
            page: currentpage,
        }

        if(currentpage <= total){
            this.setState({payload : payload, page: currentpage}, () => this.getReport(true))
        }   
    }

    getReport = (updatelist) => {
        const reportData = this.props.auditReducer.reports;

        updatelist ? this.props.addMoreReport(this.state.payload) : this.props.getReport(this.state.payload);
        this.setState({data: reportData != [] ? reportData.data : [], totalPage: reportData != [] ? reportData.total_pages : undefined})
    }

    getKey = (item, index) => `{${item.id}}`;

    reportFooter = (props) => {
        return(
            <LoadMask title={props} />
        )
    }

    render () {
        console.log( ' READING PROPS :  ' + JSON.stringify(this.props.auditReducer));
        const isLoading = this.props.auditReducer.loading;

        return(
            <View style={{backgroundColor: 'khaki', height: 100}}>
            <TouchableWithoutFeedback>
                    <FlatList
                        data={this.state.data}
                        renderItem={({item}) => (
                            <Text>{item.fullname}</Text>
                        )}
                        ListFooterComponent={this.reportFooter(isLoading)}
                        keyExtractor={this.getKey}
                        onEndReached={this.nextPage}
                        onEndReachedThreshold={1}
                    />
            </TouchableWithoutFeedback>
        </View>
        );
    }
}

const mapStateToProps = state => { return state }
const mapDispatchToProps = dispatch => 
    bindActionCreators({
            getReport, addMoreReport,
        },
        dispatch
    )

export default connect(mapStateToProps,mapDispatchToProps)(ViewReport);