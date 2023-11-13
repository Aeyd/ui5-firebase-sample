sap.ui.define(["./BaseController", "sap/m/MessageBox"], function (BaseController, MessageBox) {
	"use strict";

	return BaseController.extend("com.palimedia.app.controller.Main", {
		sayHello: function () {
			fetch("/api/products").then(function(data) {
				console.log(data);
			});
		}
	});
});
