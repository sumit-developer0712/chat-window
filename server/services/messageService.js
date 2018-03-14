const config = require('config');
const axios = require('axios');

class Service {

    constructor() {
		console.log(config.get('server.westUsPostUrl'))
		this.instance = axios.create({ 
            baseURL: config.get('server.westUsPostUrl') 
        });
    }

    post(url, payload) {
		const options = { 
            headers: {
                'content-type': 'application/json',
                'ocp-apim-subscription-key': 'e196d2839bd24d84a0b460da4b85bd35'
            } 
        };
		return new Promise((resolve, reject) => {
			this.instance.post(url, payload, options).then((response) => {
				if (response.answers) {
					resolve(response.answers);
				} else {
					reject({ "answer": "No good match found in the KB"});
				}
			}).catch((err) => {
				reject(err);
			});
		});
	}
    
}

module.exports = new Service();