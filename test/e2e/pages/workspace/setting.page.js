'use strict';

const Common = require('../common.js');

class Workspace {

    constructor() {

        this.workSpacesNameEdit = element(by.id('workspace_name'));
        this.saveWorkspaceEditedbutton = element(by.className('save_bar__submit'));
        this.deleteLabel = element(by.id('delete_link'));
        this.confirmDeleteButton = element(by.id('confirm_delete'));
        this.changesSuccessLabel = $('div[id=save_success_bar] > div');

    }

    clickSaveButtonWorkspaceEdited() {
        return this.saveWorkspaceEditedbutton.click();
    }

    clickDeleteLabel() {
        return this.deleteLabel.click();
    }
    clickConfirmDeleteButton() {
        return this.confirmDeleteButton.click();
    }

    setWorkSpaceNameInputField(workspaceName) {
        return Common.setInputField(this.workSpacesNameEdit, workspaceName);
    }
    getChangesSuccessText() {
        return this.changesSuccessLabel.getText();
    }
}

module.exports = new Workspace();