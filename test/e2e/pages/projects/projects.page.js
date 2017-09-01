'use strict';

class Project {
	constructor() {
		this.projectName = $('raw_context_name');
		this.storiesTabButton = $('a[data-aid="navTab-stories"]');
		this.analitycsTabButton = $('a[data-aid="navTab-analytics"]');
		this.settingsTabButton = $('a[data-aid="navTab-settings"]');
		this.membersTabButton = $('a[data-aid="navTab-members"]');
		this.expandButton = $('a[data-aid="expandButton"]');
	}

	getProjectName() {
		return this.projectName.getText();
	}

	clickStoriesTabButton() {
		return this.storiesTabButton.click();
	}

	clickAnalitycsTabButton() {
		return this.analitycsTabButton.click();
	}

	clickSettingsTabButton() {
		return this.settingsTabButton.click();
	}

	clickMembersTabButton() {
		return this.membersTabButton.click();
	}
}

module.exports = new Project();
