'use strict';

let axios = require('axios');

class RequestManager {
	constructor() {
		let service = axios.create({
			baseURL: browser.params.apiBaseUrl,
			timeout: 1000,
			headers: {
				'X-TrackerToken': browser.params.token
			}
		});
		this.service = service;
	}

	getResponse() {
	    return this.response.data;
	}

	getStatus() {
	    return this.status;
	}

	post(path, payload) {
	    return this.service.request({
			method: 'POST',
			url: path,
			responseType: 'json',
			data: payload
		}).then((response) => {
	        this.response = response;
	        this.status = response.status;
		}).catch((error) => {
	        this.error = error;
			this.status = error.status;
		});
	}

	get(path) {
	    return this.service.request({
			method: 'GET',
			url: path,
			responseType: 'json'
		}).then((response) => {
			this.response = response;
			this.status = response.status;
		}).catch((error) => {
			this.error = error;
			this.status = error.status;
		});
	}

	put(path, payload) {
	    return this.service.request({
			method: 'PUT',
			url: path,
			responseType: 'json',
			data: payload
		}).then((response) => {
			this.response = response;
			this.status = response.status;
		}).catch((error) => {
			this.error = error;
			this.status = error.status;
		});
	}

	delete(path) {
	    return this.service.request({
			method: 'DELETE',
			url: path,
			responseType: 'json'
		}).then((response) => {
			this.response = response;
			this.status = response.status;
		}).catch((error) => {
			this.error = error;
			this.status = error.status;
		});
	}
}


module.exports = new RequestManager();