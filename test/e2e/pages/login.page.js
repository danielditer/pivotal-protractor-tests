'use strict';

const Common = require('./common.js');

class pivotalSignInPage {
	constructor() {
		this.nameInput = element(by.id('credentials_username'));
		this.passwordInput = element(by.id('credentials_password'));
		this.loginButton = element(by.css('.app_signin_action_button'));
	}

	setName(name) {
		return Common.setInputField(this.nameInput, name)
			.then(() => this.loginButton.click());
	}

	setPassword(pass) {
		return Common.setInputField(this.passwordInput, pass)
			.then(() => this.loginButton.click());
	}
}

module.exports = new pivotalSignInPage();
