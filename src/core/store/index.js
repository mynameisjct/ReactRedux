import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducer';
import thunk from 'redux-thunk';

export let store;

export default function configureStore(){
    store = createStore(
        rootReducer,
        applyMiddleware(thunk)
    );

    return store;
}