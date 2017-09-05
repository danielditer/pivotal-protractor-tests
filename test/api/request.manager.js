'use strict';

let axios = require('axios');

class RequestManager {
	constructor() {
		this.service = axios.create({
			baseURL: browser.params.apiBaseUrl,
			headers: {
				'X-TrackerToken': browser.params.token
			}
		});
	}

	getResponse() {
		return this.response.data;
	}

	getStatus() {
		return this.status;
	}

	success(response) {
		this.response = response;
		this.status = response.status;
	}

	error(error) {
		this.error = error;
		this.status = error.status;
	}

	post(path, payload) {
		return this.service.request({
			method: 'POST',
			url: path,
			responseType: 'json',
			data: payload
		}).then(response => this.success(response))
			.catch(error => this.error(error));
	}

	get(path) {
		return this.service.request({
			method: 'GET',
			url: path,
			responseType: 'json'
		}).then(response => this.success(response))
			.catch(error => this.error(error));
	}

	put(path, payload) {
		return this.service.request({
			method: 'PUT',
			url: path,
			responseType: 'json',
			data: payload
		}).then(response => this.success(response))
			.catch(error => this.error(error));
	}

	del(path) {
		return this.service.request({
			method: 'DELETE',
			url: path,
			responseType: 'json'
		}).then(response => this.success(response))
			.catch(error => this.error(error));
	}
}

module.exports = new RequestManager();
