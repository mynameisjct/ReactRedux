import {combineReducers} from 'redux';
import { reducer as auditReducer } from '../../controllers/reports/audit/redux/reducers';
/*
    EXAMPLE

import { reducer as dtrReducer } from './../containers/DTR/data/reducer';
apply dtrReducer below

*/
const rootReducer = combineReducers({
    auditReducer,
});

export default rootReducer;