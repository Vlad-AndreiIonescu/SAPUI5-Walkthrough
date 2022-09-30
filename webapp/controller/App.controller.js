sap.ui.define([
    "sap/ui/core/mvc/Controller"//definim controller ul
 ], function (Controller) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
       onShowHello : function () {//event care va face o alerta. E folosir in view la apasare.
          // show a native JavaScript alert
          alert("Hello World");
       }
    });
 });