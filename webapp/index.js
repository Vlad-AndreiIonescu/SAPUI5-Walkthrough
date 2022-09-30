

sap.ui.define([
	"sap/ui/core/mvc/XMLView"// definim XMLVIEW
], function (XMLView) {//pasam ob XMLView in callbackfunction
	"use strict";

	XMLView.create({//cream un nou view
		viewName: "sap.ui.demo.walkthrough.view.App"//avem nev de viewName care e locatia xml ului nostru
	}).then(function (oView) {
		oView.placeAt("content");//plasam view-ul nostru in body prin content
	});

});
