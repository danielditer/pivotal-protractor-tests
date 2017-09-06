let json = require('./properties.json');
exports.config = {

	seleniumAddress: json.seleniumAddress,

	capabilities: {
		'browserName': 'chrome',
		'chromeOptions': {
			'args': ['--disable-extensions', '--start-maximized']
		}
	},

	specs: ['./test/**/specs/**.spec.js'],

	framework: 'jasmine',

	jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 3000000
	},

	onPrepare: function() {
		require('jasmine-co').install();
		global.EC = protractor.ExpectedConditions;
		browser.waitForAngularEnabled(false);
		browser.get(`${browser.params.baseUrl}/signin`);
	},

	params : {
		username: json.username,
		password: json.password,
		token: json.token,
		baseUrl: json.baseUrl,
		apiBaseUrl: json.apiBaseUrl
	}
};
