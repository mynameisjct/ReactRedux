import React, {Component} from 'react';
import Home from '../controllers/home';
import { Provider } from 'react-redux';
import configureStore from './store';

const store = configureStore();

store.subscribe(() => {
    console.log("Store is updated!");
})

export default class Main extends Component {
    render(){
        return(
            <Provider store = {store}>
                <Home/>
            </Provider>
        );
    }
}