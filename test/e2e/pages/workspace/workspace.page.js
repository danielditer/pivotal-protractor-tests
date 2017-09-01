'use strict';

class Workspace {

    constructor() {
        this.workSpacesName = element(by.className('raw_context_name'));
        this.settingWorkspace = element(by.id('navTab-settings'))

    }

    getPageTitle() {
        return browser.getTitle();
    }

    getWorkspaceTitle(){
        return this.workSpacesName.getText();
    }

    clickSettingsNavTab() {
        return this.settingWorkspace.click();
    }


}

module.exports = new Workspace();
