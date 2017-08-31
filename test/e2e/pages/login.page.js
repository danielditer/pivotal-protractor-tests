'use strict';

class pivotalSignInPage {
	constructor() {
		this.nameInput = element(by.id('credentials_username'));
		this.passwordInput = element(by.id('credentials_password'));
		this.loginButton = element(by.css('.app_signin_action_button'));
	}

	setName(name) {
		return this.nameInput.clear()
			.then(() => this.nameInput.sendKeys(name))
			.then(() => this.loginButton.click());
	}

	setPassword(pass) {
		return this.passwordInput.clear()
			.then(() => this.passwordInput.sendKeys(pass))
			.then(() => this.loginButton.click());
	}
}

module.exports = new pivotalSignInPage();
