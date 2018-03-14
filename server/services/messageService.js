const config = require('config');
const axios = require('axios');

class messageService {

    post(payload) {
		return new Promise((resolve, reject) => {
			axios({
				method: 'post',
				url: config.get('server.westUsPostUrl'),
				headers: {
					'content-type': 'application/json',
					'ocp-apim-subscription-key': 'e196d2839bd24d84a0b460da4b85bd35'
				},
				data: payload
			  }).then(function (response) {
				resolve(response.data.answers);
			  }).catch(function (axError) {
				reject({
					status:500,
					msg: "Server error"
				 });
			  })
		});
	}
    
}

module.exports = new messageService;