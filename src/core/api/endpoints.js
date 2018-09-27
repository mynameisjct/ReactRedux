import {store} from '../store';

/*  use to get store state */
// export const getActiveUsername = () => {
// 	return store.getState().loginReducer.logininfo.resUsername;
// };

export const audit = {
	modules: function(payload){
		return('codelist/auditmodules')
	},
	get: function(payload){
		return(
			  'reports/audit/?action=' + payload.action + '&module=' + payload.module + '&transtype=' + payload.transtype + '&page=' + payload.page + '&company=' + payload.company
		);
  },
}