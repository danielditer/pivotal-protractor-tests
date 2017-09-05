'use strict';

class Workspace {

    constructor() {
        this.workSpacesName = element(by.className('raw_context_name'));
        this.settingWorkspace = $('a[data-aid=\'navTab-settings\']');
        this.noticeMessage = element(by.id('notice'));

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
    getNoticeMessage() {
        return this.noticeMessage.getText();
    }

}

module.exports = new Workspace();