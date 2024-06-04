sap.ui.define(function () {
	"use strict";

	return {
		name: "QUnit TestSuite for devxp.lib",
		defaults: {
			bootCore: true,
			ui5: {
				libs: "sap.ui.core,devxp.lib",
				theme: "sap_horizon",
				noConflict: true,
				preload: "auto"
			},
			qunit: {
				version: 2,
				reorder: false
			},
			sinon: {
				version: 4,
				qunitBridge: true,
				useFakeTimers: false
			},
			module: "./{name}.qunit",
			coverage: {
				only: ["devxp/lib/"],
				never: ["test-resources/"]
			}
		},
		tests: {
			// test file for the Example control
			Example: {
				title: "QUnit Test for Example",
				_alternativeTitle: "QUnit tests: devxp.lib.Example"
			}
		}
	};
});
