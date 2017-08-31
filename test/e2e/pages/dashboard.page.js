"use strict";

class pivotalDashboardPage {

	getPageTitle () {
		return browser.getTitle();
	}
}

module.exports = new pivotalDashboardPage();
