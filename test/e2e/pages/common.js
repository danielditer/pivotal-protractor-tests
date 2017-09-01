'use strict';

class Common {
	setInputField(element, inputString) {
		return element.clear()
			.then(() => element.sendKeys(inputString));
	}

}

module.exports = new Common();
