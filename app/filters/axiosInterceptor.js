import config from 'config';
import store from '../store';

const axiosInterceptor = {
	contextPathInterceptor(request) {
		const newConfig = Object.assign({}, request);
		const url = request.url;
		let contextPath = 'http://localhost:3000';
        newConfig.url = `${contextPath}${request.url}`;
        console.log(JSON.stringify(newConfig))
		return newConfig;
	}
};

module.exports = axiosInterceptor;
