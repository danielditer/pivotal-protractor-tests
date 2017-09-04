'use strict';

class Common {
	setInputField(element, inputString) {
		return element.clear()
			.then(() => element.sendKeys(inputString));
	}

	goesToDashboard() {
		return element(by.className('tc_header_item tc_header_logo')).click();
	}
}

module.exports = new Common();
