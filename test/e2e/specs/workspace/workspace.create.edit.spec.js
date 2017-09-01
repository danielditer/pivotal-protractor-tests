'use strict';
var nameEdited = "WorkspaceEdited";
var name = "Workspace";
describe('Create a new Workspace', function () {
    const loginPage = require('../../pages/login.page');
    const dashboardPage = require('../../pages/dashboard.page');
    const workspaceForm = require('../../pages/workspace/workspace.form.page');
    const workspace = require('../../pages/workspace/workspace.page');
    const workspaceSettings = require('../../pages/workspace/workspace.settings.page');

    beforeEach(() => {
        browser.waitForAngularEnabled(false);
        browser.get(browser.params.baseUrl + '/signin');
    });

    it('Login with valid credentials', function* () {
        yield loginPage.setName(browser.params.username);
        yield loginPage.setPassword(browser.params.password);
        expect(dashboardPage.getPageTitle()).toBe('Dashboard - Pivotal Tracker');
    });

    it('Create a new workspace and edit it', function* () {
        yield dashboardPage.clickLogo();
        yield dashboardPage.clickNewWorkspace();
        yield browser.wait(EC.presenceOf(workspaceForm.workSpaceNameInputField), 3000);
        yield workspaceForm.setNameWorkspace(name);
        yield workspaceForm.clickSaveWorkspace();
        yield browser.wait(EC.presenceOf(workspace.workSpacesName), 3000);
        expect(yield workspace.getWorkspaceTitle()).toBe(name);
        yield workspaces.clickSettingsNavTab();
        yield browser.wait(EC.presenceOf(workspaceSettings.workSpacesNameEdit), 3000);
        yield workspaceSettings.editNameWorkspace(nameEdited);
        yield workspaceSettings.clickSaveButtonWorkspaceEdited();
        yield browser.wait(EC.presenceOf(workspace.workSpacesName), 3000);
        expect (workspace.getWorkspaceTitle()).toBe(nameEdited);

    });

});
