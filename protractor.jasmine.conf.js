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
        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: 'testresults',
            filePrefix: 'xmloutput'
        }));
	},

	params : {
		username: json.username,
		password: json.password,
		token: json.token,
		baseUrl: json.baseUrl,
		apiBaseUrl: json.apiBaseUrl
	}
};
