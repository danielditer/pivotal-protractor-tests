exports.config = {

	seleniumAddress: 'http://localhost:4444/wd/hub',

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
	    username: '',
		password: '',
		token: '',
		baseUrl: 'https://www.pivotaltracker.com',
		apiBaseUrl: 'https://www.pivotaltracker.com/services/v5'
	}
};
