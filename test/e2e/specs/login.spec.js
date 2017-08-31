'use strict';

describe('Login', function () {
	const loginPage = require('../pages/login.page');
	const dashboardPage = require('../pages/dashboard.page');

	beforeEach(() => {
		browser.waitForAngularEnabled(false);
		browser.get(browser.params.baseUrl+'/signin');
	});

	it('Login with valid credentials', function*() {
		yield loginPage.setName(browser.params.username);
		yield loginPage.setPassword(browser.params.password);
		expect(dashboardPage.getPageTitle()).toBe('Dashboard - Pivotal Tracker');
	});
});
