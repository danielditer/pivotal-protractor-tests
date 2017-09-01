'use strict';

class ProjectSetting {
	constructor() {
		this.deleteLabel = element(by.id('delete_link'));
		this.confirmDeleteButton = element(by.id('confirm_delete'));
		this.changesSuccessLabel = $('div[id=save_success_bar] > div');
		this.projectNameInputField = element(by.id('project_name'));
		this.saveButton = element(by.className('save_bar__submit'));
		this.errorMessage = element(by.className('error_above_or_below'));
	}

	setProjectNameInputField(projectName) {
		return this.projectNameInputField.clear()
			.then(() => this.projectNameInputField.sendKeys(projectName));
	}

	clickDeleteLabel() {
		return browser.executeScript('document.getElementById("delete_link").scrollIntoView();')
			.then(() => this.deleteLabel.click());
	}

	clickConfirmDeleteButton() {
		return this.confirmDeleteButton.click();
	}

	clickSaveButton() {
		return this.saveButton.click();
	}

	getChangesSuccessText() {
		return this.changesSuccessLabel.getText();
	}

	modifyProjectName(name) {
		return this.setProjectNameInputField(name)
			.then(() => this.clickSaveButton());
	}


	isErrorMessageDisplayed() {
		return this.errorMessage.isVisible();
	}

	deleteProject() {
		return this.clickDeleteLabel()
			.then(() => this.clickConfirmDeleteButton());
	}

}

module.exports = new ProjectSetting();
