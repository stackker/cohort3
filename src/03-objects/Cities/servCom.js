
async function postData(url = '', data = {}) {
	// Default options are marked with *
	const response = await fetch(url, {
		method: 'POST',     // *GET, POST, PUT, DELETE, etc.
		mode: 'cors',       // no-cors, *cors, same-origin
		cache: 'no-cache',  // *default, no-cache, reload, force-cache, only-if-cached
		credentials: 'same-origin', // include, *same-origin, omit
		headers: {
			'Content-Type': 'application/json'
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		redirect: 'follow',         // manual, *follow, error
		referrer: 'no-referrer',    // no-referrer, *client
		body: JSON.stringify(data)  // body data type must match "Content-Type" header
	});

	const json = await response.json();    // parses JSON response into native JavaScript objects
	json.status = response.status;
	json.statusText = response.statusText;
	// console.log(json, typeof(json));
	return json;
};

const url = 'http://localhost:5000/';

async function createServCity(city) {
	let data = await postData(url + 'add', city);
	
	return data;
};

async function syncServerCities() {
	let cityControl = await postData(url + 'all');
	
	return cityControl;
};


	


export {createServCity, syncServerCities};


