sap.ui.define(["./BaseController"], function (BaseController) {
	"use strict";

	return BaseController.extend("com.palimedia.app.controller.App", {
		onInit: function () {
			// set log level
			sap/base/Log.setLevel(sap/base/Log.Level.NONE);

			// apply content density mode to root view
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		}
	});
});
