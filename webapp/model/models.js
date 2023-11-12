sap.ui.define(["sap/ui/model/json/JSONModel", "sap/ui/model/BindingMode", "sap/ui/Device"], function (JSONModel, BindingMode, Device) {
	"use strict";

	return {
		createDeviceModel: function () {
			let oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode(BindingMode.OneWay);
			return oModel;
		},
		getProducts: async function () {
			const response = await fetch("/api/products");
			let oModel = new JSONModel(response);
			oModel.setDefaultBindingMode(BindingMode.OneWay);
			return oModel;
		}
	};
});
