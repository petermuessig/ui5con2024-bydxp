sap.ui.define(["sap/ui/core/Control", "marked/marked.min"], function (Control, marked) {
	"use strict";

	return Control.extend("devxp.app.control.MDViewer", {
		metadata: {
			properties: {
				"content": { type: "string" }
			}
		},
		renderer: {
			apiVersion: 2,
			render: function (rm, control) {
				rm.openStart("div", control);
				rm.style("border", "2px dashed darkgray");
				rm.openEnd();
				rm.unsafeHtml(marked.parse(control.getContent() || ""));
				rm.close("div");
			}
		},
	});

});
