import config from '../config';


const urlPrefix = config.domain + config.apiPath;
const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;


function filterJSON(res) {
	return res.json();
}


function filterStatus(res) {
	if (res.status >= 200 && res.status < 300) {
		return res;
	}
	else {
		let error = new Error(res.statusText);
		error.res = res;
		error.type = 'http';
		throw error;
	}
}

export function post(url, body) {
	url = urlPrefix + url;

	if (isDebuggingInChrome) {
		console.info(`POST: `, url);
		console.info(`Body: `, body);
	}

	return fetch(url, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	})
		.then(filterStatus)
		.then(filterJSON);
}


