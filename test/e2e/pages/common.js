'use strict';

/**
 * Common class with Common Methods.
 */
class Common {

	/**
	 * Clean and Set the WebElement with the value provided.
     * @param element WebElement.
     * @param inputString String value.
     * @returns {Promise.<TResult>} Promise.
     */
	setInputField(element, inputString) {
		return element.clear()
			.then(() => element.sendKeys(inputString));
	}

	/**
	 * Goes to the Dashboard page.
     */
	goesToDashboard() {
		return element(by.className('tc_header_item tc_header_logo')).click();
	}
}

module.exports = new Common();
