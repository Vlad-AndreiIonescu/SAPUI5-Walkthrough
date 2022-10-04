sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
 ], function (Controller, MessageToast, Fragment) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
       onShowHello : function () {
          // read msg from i18n model
          var oBundle = this.getView().getModel("i18n").getResourceBundle();
          var sRecipient = this.getView().getModel().getProperty("/recipient/name");
          var sMsg = oBundle.getText("helloMsg", [sRecipient]);
          // show message
          MessageToast.show(sMsg);
       },
       
		onOpenDialog : function () {//noul event de deschidere a dialog-ului

			// create dialog lazily
            //DUPA THIS POT SA SCRIU ORICE
			if (!this.pDial) {//daca dialogul nu exista, sa l creeze
				this.pDial = this.loadFragment({
					name: "sap.ui.demo.walkthrough.view.HelloDialog"
				});
			} 
			this.pDial.then(function(oDialog) {//daca exista sa l deschida
				oDialog.open();
			});
		}
    });
 });