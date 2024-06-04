import Control from "sap/ui/core/Control";
import marked from "marked/marked.min";

/**
 * @namespace devxp.app.control
 */
export default class NewMDViewer extends Control {
	static metadata = {
		properties: {
			"content": { type: "string" }
		}
	};

	static renderer = {
		apiVersion: 2,
		render: function (rm, control) {
			rm.openStart("div", control);
			rm.style("border", "2px dashed green");
			rm.openEnd();
			rm.unsafeHtml(marked.parse(control.getContent() || ""));
			rm.close("div");
		}
	};
};
