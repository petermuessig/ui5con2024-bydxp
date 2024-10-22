/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library devxp.lib.
 */
sap.ui.define([
	"sap/ui/core/library"
], function () {
	"use strict";

	// delegate further initialization of this library to the Core
	// Hint: sap.ui.getCore() must still be used to support preload with sync bootstrap!
	sap.ui.getCore().initLibrary({
		name: "devxp.lib",
		version: "${version}",
		dependencies: [ // keep in sync with the ui5.yaml and .library files
			"sap.ui.core"
		],
		types: [
			"devxp.lib.ExampleColor"
		],
		interfaces: [],
		controls: [
			"devxp.lib.Example"
		],
		elements: [],
		noLibraryCSS: false // if no CSS is provided, you can disable the library.css load here
	});

	/**
	 * Some description about <code>devxp.lib</code>
	 *
	 * @namespace
	 * @alias devxp.lib
	 * @author Peter Muessig
	 * @version ${version}
	 * @public
	 */
	var thisLib = devxp.lib;

	/**
	 * Semantic Colors of the <code>devxp.lib.Example</code>.
	 *
	 * @enum {string}
	 * @public
	 */
	thisLib.ExampleColor = {

		/**
		 * Default color (brand color)
		 * @public
		 */
		Default : "Default",

		/**
		 * Highlight color
		 * @public
		 */
		Highlight : "Highlight"

	};

	return thisLib;

});
