import * as endpoints from '../../../../core/api/endpoints';
import {fetchApi} from '../../../../core/api';

export const get = payload => fetchApi(endpoints.audit.get(payload), payload, 'get');
export const module = payload => fetchApi(endpoints.audit.modules(payload), payload, 'get');