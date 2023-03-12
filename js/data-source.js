export class DataSource {
    
    constructor() {

    }
    async getData(url ='',endpoint = '',method = 'GET', body = {}) {
        const headers = {
            'Accept': 'application/json'
        };
        const useBody = method.toUpperCase() !== 'GET';
        const request = {
            method: method,
            headers: headers,
        }
        if (useBody) {
			requestInfo['body'] = JSON.stringify(body);
			requestInfo['headers']['Content-Type'] = 'application/json';
		}
        return fetch(`${url}/${endpoint}`, request);
    }

}