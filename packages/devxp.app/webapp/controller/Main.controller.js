sap.ui.define(["./BaseController", "sap/m/MessageBox"], function (BaseController, MessageBox) {
	"use strict";

	return BaseController.extend("devxp.app.controller.Main", {
		onInit: async function () {
			const doc = await (await fetch("/docs/doc.md")).text();
			this.getView().byId("mdViewer").setContent(doc);
		},
		sayHello: function () {
			MessageBox.show("Hello World!");
		}
	});
});
