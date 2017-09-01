'use strict';

class pivotalDashboardPage {

	constructor() {
		this.projectButton = element(by.id('create-project-button'));
	}

	getPageTitle () {
		return browser.getTitle();
	}

	clickProjectButton() {
		return this.projectButton.click();
	}
}

module.exports = new pivotalDashboardPage();
