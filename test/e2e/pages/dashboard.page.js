'use strict';

class pivotalDashboardPage {

	constructor() {

		this.profileButton = $('a[data-aid=\'ProfileDropdown__profile\']');
		this.logoLabel = element(by.className('tc_header_text_logo'));
		this.projectButton = element(by.id('create-project-button'));
		this.createWorkspace = element(by.className('tc_projects_menu_item tc_projects_menu_callout tc_create_workspace'));

	}

	getPageTitle () {
		return browser.getTitle();
	}

	clickProjectButton() {
		return this.projectButton.click();
	}

	clickProjectSettings(name) {
		this.xpath = `//a[text()='${name}']/following::a[contains(@class,'SettingsIcon')]`;
		return element(by.xpath(this.xpath)).click();
	}

	clickProfileButton () {
		return this.profileButton.click();
	}

	clickLogoLabel () {
		return this.logoLabel.click();
	}

	clickProjectName(name){
		this.xpath = `//a[text()='${name}']`;
		return element(by.xpath(this.xpath)).click();
	}

	clickNewWorkspace() {
		return this.createWorkspace.click();
	}

}

module.exports = new pivotalDashboardPage();
