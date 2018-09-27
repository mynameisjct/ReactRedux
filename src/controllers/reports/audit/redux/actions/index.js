import * as api from '../../api';
import * as todo from '../actions/types';

export const report = payload => ({
    type: todo.reports,
    payload
})

export const modules = payload => ({
    type: todo.getmodule,
    payload
})

export const loading = payload => ({
    type: todo.loading,
    payload
})

export const add = payload => ({
    type: todo.add,
    payload
})

export const addMoreReport = payload => 
    dispatch => {
        let valv = [];

        dispatch(loading('loading'));

        api.get(payload)
        .then((res) => res.json())
        .then((res) => {
            console.log(JSON.stringify(res));
            if(res.flagno == 1){
                dispatch(add(res))
            }
            valv = {...res}
        })
        .then(() =>{
            dispatch(loading('success'));
        })
        .catch((err) => {
        console.log('Error was detected. ' + err.message)
    })
}

export const getReport = payload => 
    dispatch => {
        let valv = [];

        dispatch(loading('loading'));

        api.get(payload)
        .then((res) => res.json())
        .then((res) => {
            if(res.flagno == 1){
                dispatch(report(res))
            }
            valv = {...res}
        })
        .then(() =>{
            dispatch(loading('success'));
        })
        .catch((err) => {
        console.log('Error was detected. ' + err.message)
    })
}

export const getModules = payload => 
    dispatch => {
        let ret = {};
        dispatch(loading('loading'));

        api.module(payload)
        .then((res) => res.json())
        .then((res) => {
            if(res.flagno === 1){
                dispatch(modules(res));
            }
            ret = {...res}
        })
        .then(() =>{
            dispatch(loading('success'));
        })
        .catch((err) => {
            console.log('Serious error' + err.message)
        })
}