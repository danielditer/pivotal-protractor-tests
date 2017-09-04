exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',

	capabilities: {
		'browserName': 'chrome',
		'chromeOptions': {
			'args': ['--disable-extensions', '--start-maximized']
		}
	},

	specs: ['./test/e2e/specs/login.spec.js'],

	framework: 'jasmine',

	jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 3000000
	},

	onPrepare: function() {
		require('jasmine-co').install();
		global.EC = protractor.ExpectedConditions;
	},

	params : {
	    username: 'demouser2710@gmail.com',
		password: 'secret2710',
		token: '82bf5a28399fa5c2d587571f745b57c4',
		baseUrl: 'https://www.pivotaltracker.com',
		apiBaseUrl: 'https://www.pivotaltracker.com/services/v5'
	}
};
