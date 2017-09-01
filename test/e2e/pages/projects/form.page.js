'use strict';

const Common = require('../common.js');

class ProjectForm {

	constructor() {
		this.projectNameInputField = element(by.className('tc-form__input'));
		this.accountSelect = element(by.className('tc-account-selector__header'));
		this.createNewAccountSelectOption = element(by.className('tc-account-selector__create-account-text'));
		this.newAccountNameInputField = element(by.className('tc-account-creator__name'));
		this.publicRadioButton = $('input[data-aid="public"]');
		this.privateRadioButton = $('input[data-aid="private"]');
		this.createProjectButton = $('button[data-aid="FormModal__submit"]');
	}

	setNameInputField(projectName) {
		return Common.setInputField(this.projectNameInputField, projectName);
	}

	clickAccountSelector() {
		return this.accountSelect.click();
	}

	setNewAccountNameInputField(accountName) {
		return Common.setInputField(this.newAccountNameInputField, accountName);
	}

	clickCreateProjectButton() {
		return this.createProjectButton.click();
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
