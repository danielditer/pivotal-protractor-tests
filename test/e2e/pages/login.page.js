'use strict';

const Common = require('./common.js');

class pivotalSignInPage {
	constructor() {
		this.nameInput = element(by.id('credentials_username'));
		this.passwordInput = element(by.id('credentials_password'));
		this.loginButton = $('.app_signin_action_button');
	}

	setName(name) {
		return Common.setInputField(this.nameInput, name)
			.then(() => this.loginButton.click());
	}

	setPassword(pass) {
		return Common.setInputField(this.passwordInput, pass)
			.then(() => this.loginButton.click());
	}

	loginAs(user, pass) {
		browser.get(`${browser.params.baseUrl}/signin`);
		return browser.getTitle()
			.then(title => {
				if (title === 'Pivotal Tracker - Sign in') {
					return this.setName(user)
						.then(() => this.setPassword(pass));
				}
			});
	}
}

module.exports = new pivotalSignInPage();
