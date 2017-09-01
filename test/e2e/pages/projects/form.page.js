'use strict';

class ProjectForm {
	constructor() {
		this.projectNameInputField = element(by.className('tc-form__input'));
		this.accountSelect = element(by.className('tc-account-selector__header'));
		this.createNewAccountSelectOption = element(by.className('tc-account-selector__create-account-text'));
		this.newAccountNameInputField = element(by.className('tc-account-creator__name'));
		this.publicRadioButton = element(by.css('input[data-aid="public"]'));
		this.privateRadioButton = element(by.css('input[data-aid="private"]'));
		this.createProjectButton = element(by.css('button[data-aid="FormModal__submit"]'));
	}

	setNameInputField(projectName) {
		return this.projectNameInputField.clear()
			.then(() => this.projectNameInputField.sendKeys(projectName));
	}

	clickAccountSelector() {
		return this.accountSelect.click();
	}

	setNewAccountNameInputField(accountName) {
		return this.newAccountNameInputField.clear()
			.then(() => this.newAccountNameInputField.sendKeys(accountName));
	}

	clickCreateProjectButton() {
		return this.publicRadioButton.click();
	}

	clickPrivateRadioButton() {
		return this.privateRadioButton.click();
	}

	clickCreateNewAccountSelectOption() {
		return this.createNewAccountSelectOption.click();
	}

	createNewAccount(accountName) {
		return this.clickCreateNewAccountSelectOption()
			.then(() => this.setNewAccountNameInputField(accountName));
	}
}

module.exports = new ProjectForm();
