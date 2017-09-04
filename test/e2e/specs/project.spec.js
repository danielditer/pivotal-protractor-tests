'use strict';

describe('Login', function () {
	const loginPage = require('../pages/login.page');
	const dashboardPage = require('../pages/dashboard.page');
	const projectForm = require('../pages/projects/form.page.js');
	const project = require('../pages/projects/projects.page.js');
	const requestManager = require('../../api/request.manager');
	const projectSetting = require('../pages/projects/setting.page.js');

	beforeAll(() => {
		browser.waitForAngularEnabled(false);
		browser.get(`${browser.params.baseUrl}/signin`);
	});

	it('Demo Test API of Projects', function* () {
		yield requestManager.post('/projects', {'name': 'demo5'});
		expect(requestManager.getStatus()).toBe(200);
		yield requestManager.delete('/projects/'+requestManager.getResponse().id);
		expect(requestManager.getStatus()).toBe(204);
	});

	it('Login with valid credentials', function*() {
		yield loginPage.setName(browser.params.username);
		yield loginPage.setPassword(browser.params.password);
		expect(dashboardPage.getPageTitle()).toBe('Dashboard - Pivotal Tracker');
	});

	it('Creates a new Project', function*() {
		yield dashboardPage.clickProjectButton();
		yield projectForm.setNameInputField('at-04demo');
		yield projectForm.clickAccountSelector();
		yield projectForm.createNewAccount('demo');
		yield projectForm.clickCreateProjectButton();
		yield browser.wait(EC.presenceOf(project.projectName), 12000);
		expect(project.getProjectName()).toContain('demo');
	});

	it('Edit Project', function*() {
		yield project.clickSettingsTabButton();
		yield projectSetting.setProjectNameInputField('other name');
		yield projectSetting.clickSaveButton();
		yield browser.wait(EC.presenceOf(projectSetting.changesSuccessLabel), 8000);
		expect(projectSetting.getChangesSuccessText()).toContain('changed saved');
	});

	it('Delete Project', function*() {
		yield projectSetting.clickDeleteLabel();
		yield projectSetting.clickConfirmDeleteButton();
		yield browser.wait(EC.presenceOf(projectSetting.errorMessage), 8000);
		expect(projectSetting.isErrorMessageDisplayed());
	});

	it('Edit a Project', function*() {
	    yield dashboardPage.clickProjectSettings('at-04demo');
	    yield projectSetting.setNameInputField('other name');
	    yield projectSetting.clickSaveButton();
	    yield browser.wait(EC.presenceOf(projectSetting.changesSuccessLabel), 8000);
	    expect(projectSetting.getChangesSuccessText()).toContain('changed saved');
	});
});
