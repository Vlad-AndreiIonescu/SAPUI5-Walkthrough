sap.ui.define([//incarcarea este always async
   "sap/ui/core/mvc/Controller", //si controller si messageToast sun dependinte
   "sap/m/MessageToast"
], function (Controller, MessageToast) {//o sa se declanseze callback f si pasam ob celor doua module
   "use strict";
   //abia dupa ce modulele sunt incarcate cu succes, codul nostru se executa
   return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
      onShowHello: function () {
         MessageToast.show("Hello World");
      }
   });
});