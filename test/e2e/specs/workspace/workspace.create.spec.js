'use strict';
describe('Create a new Workspace', function () {
    const loginPage = require('../../pages/login.page');
    const dashboardPage = require('../../pages/dashboard.page');
    const workspaceForm = require('../../pages/workspace/workspace.form.page');
    const workspace = require('../../pages/workspace/workspace.page');

    beforeEach(() => {
        browser.waitForAngularEnabled(false);
        browser.get(browser.params.baseUrl + '/signin');
    });

    it('Login with valid credentials', function* () {
        yield loginPage.setName(browser.params.username);
        yield loginPage.setPassword(browser.params.password);
        expect(dashboardPage.getPageTitle()).toBe('Dashboard - Pivotal Tracker');
    });

    it('Create a new workspace', function* () {
        var name = "Workspace";
        yield dashboardPage.clickLogo();
        yield dashboardPage.clickNewWorkspace();
        yield browser.wait(EC.presenceOf(workspaceForm.workSpaceNameInputField), 3000);
        yield workspaceForm.setNameWorkspace(name);
        yield workspaceForm.clickSaveWorkspace();
        yield browser.wait(EC.presenceOf(workspace.workSpacesName), 3000);
        expect(yield workspace.getWorkspaceTitle()).toBe(name);
    });

});
