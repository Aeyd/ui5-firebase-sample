sap.ui.define(["sap/ui/model/json/JSONModel", "sap/ui/model/BindingMode", "sap/ui/Device"], function (JSONModel, BindingMode, Device) {
	"use strict";

	return {
		createDeviceModel: function () {
			let oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode(BindingMode.OneWay);
			return oModel;
		},
		getProducts: function () {
			let oModel = new JSONModel();
			oModel.loadData("/api/products");
			console.log(oModel);
			oModel.setDefaultBindingMode(BindingMode.OneWay);
			return oModel;
		}
	};
});
