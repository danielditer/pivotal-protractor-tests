'use strict';

class Workspace {

    constructor() {
        this.workSpacesName = element(by.className('raw_context_name'));
    }

    getPageTitle() {
        return browser.getTitle();
    }

    getWorkspaceTitle(){
        return this.workSpacesName.getText();
    }

}

module.exports = new Workspace();
