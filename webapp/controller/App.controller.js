sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
   "use strict";
   return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
      onInit : function () {// metoda onInit e declansata prima data cand controller ul e creat
         // set data model on view
         var oData = {// creare data object cu proprietatile..
            recipient : {
               name : "World"
            }
         };
         var oModel = new JSONModel(oData);//instantiere, creare JSONModel, punem ob ca param
         
         this.getView().setModel(oModel);//ca sa putem folosi JSONModel in view ul nostru
                                          //this.getView()-> ne ia viewul nostru 
                                          //si cu set ne setam jsonModelul nostru
      },
      onShowHello : function () {
         MessageToast.show("Hello World");
      }
   });
});
