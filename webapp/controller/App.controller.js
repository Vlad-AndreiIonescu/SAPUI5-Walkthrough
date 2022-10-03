sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"//nou modul
], function (Controller, MessageToast, JSONModel, ResourceModel) {
   "use strict";
   return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
     onInit : function () {
         // set data model on view
         var oData = {
            recipient : {
               name : "World"
            }
         };
         var oModel = new JSONModel(oData);
         this.getView().setModel(oModel);
         // set i18n model on view
         //Primul lucru pe care trb sa l facem e sa instantiem si sa cream modelul
         var i18nModel = new ResourceModel({
            bundleName: "sap.ui.demo.walkthrough.i18n.i18n"// folder.fisier
         });
         this.getView().setModel(i18nModel, "i18n");
      },
      onShowHello : function () {
         // read msg from i18n model
         var oBundle = this.getView().getModel("i18n").getResourceBundle();
         var sRecipient = this.getView().getModel().getProperty("/recipient/name");// de sus de la obiectul oData
         var sMsg = oBundle.getText("helloMsg", [sRecipient]);
         // show message
         MessageToast.show(sMsg);//afisam  variabila creata mai sus 
      }
   });
});