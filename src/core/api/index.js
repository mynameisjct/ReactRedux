import apiAddress from '../destination';
import _ from 'lodash';

export const fetchApi = (endPoint, payload = {}, strMethod = 'post', headers = {}) => {
    //Access Token - 2018-04-30
    // const accessToken = sessionSelectors.get().tokens.access.value;
    const accessToken = '7b456b1b73ed958cfca19167cf6abdaf'; // sample only
    
    let oBody = '';
    if(strMethod.toUpperCase() === 'GET'){
        oBody = undefined;
    }else{
        oBody = JSON.stringify(payload)
    }

    // console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX_API_REQUEST');
    console.log('endPoint: ' + apiAddress.url + endPoint);
    // console.log('payload: ' + oBody);
    // console.log('strMethod: ' + strMethod);
    // console.log('header: ' + JSON.stringify(_.pickBy({
    //     ...(accessToken ? {
    //         Authorization: `Bearer ${accessToken}`,
    //     } : {
    //         'Client-ID': apiAddress.clientId,
    //     }),
    //     ...headers,
    // }, item => !_.isEmpty(item))));
    return fetch(apiAddress.url + endPoint,{
        method: strMethod,
        headers: _.pickBy({
			...(accessToken ? {
				Authorization: `Bearer ${accessToken}`,
			} : {
				'Client-ID': apiAddress.clientId,
			}),
			...headers,
		}, item => !_.isEmpty(item)),
        body: oBody
    })
	.catch((e) => {
		if (e.response && e.response.json) {
			e.response.json().then((json) => {
				if (json) throw json;
				throw e;
            });
		} else {
            throw e;
		}
	});
}

export const mockFetch = (endPoint, payload = {}, strMethod = 'post', headers = {}) => {
    let oBody = '';
    if(strMethod.toUpperCase() === 'GET'){
        oBody = undefined;
    }else{
        oBody = JSON.stringify(
            payload)
    }
    console.log('endpoints',endPoint)
    return fetch(endPoint,{
        method: strMethod,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: oBody
    })
	.catch((e) => {
		if (e.response && e.response.json) {
			e.response.json().then((json) => {
				if (json) throw json;
				throw e;
            });
		} else {
            throw e;
		}
	});
}
