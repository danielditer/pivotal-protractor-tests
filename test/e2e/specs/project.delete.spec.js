'use strict';

describe('Login', function () {
	const loginPage = require('../pages/login.page');
	const dashboardPage = require('../pages/dashboard.page');
	const requestManager = require('../../api/request.manager');
	const projectSetting = require('../pages/projects/setting.page');
	const common = require('../pages/common');
	let id;

	beforeAll(function*() {
		browser.waitForAngularEnabled(false);
		browser.get(`${browser.params.baseUrl}/signin`);
		yield loginPage.setName(browser.params.username);
		yield loginPage.setPassword(browser.params.password);
		expect(dashboardPage.getPageTitle()).toBe('Dashboard - Pivotal Tracker');
	});

	beforeEach(function*() {
		yield requestManager.post('/projects', {'name': 'demoProject'});
		id = requestManager.getResponse().id;
		expect(requestManager.getStatus()).toBe(200);
	});

	it('Delete the project', function*() {
		yield common.goesToDashboard();
		yield dashboardPage.clickProjectSettings('demoProject');
		yield projectSetting.clickDeleteLabel();
		yield projectSetting.clickConfirmDeleteButton();
	});
});