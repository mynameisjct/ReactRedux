import { combineReducers } from 'redux';
import * as todo from '../actions/types';
import * as helper from '../../../../helper';

export const reports = (state = [], action) => {

    switch(action.type){
        case todo.reports:
            return action.payload;
        case todo.reset:
            return [];
        case todo.add:
            return helper.flatListPaging(action.payload,state.data,action.payload.data) // current state, old state, current state data
        default: return state;
    }
}

export const modules = (state = [], action) => {
    switch(action.type){
        case todo.getmodule:
            return action.payload;
        case todo.clear:
            return [];
        default: return state;
    }
}

export const loading = (state = '', action) => {
    switch(action.type){
        case todo.loading:
            return action.payload;
        default: return state;
    }
}

export const reducer = combineReducers({
    reports: reports,
    modules: modules,
    loading: loading,
})