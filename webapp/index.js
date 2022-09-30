sap.ui.define([
    "sap/m/Text" //sap/m -> control library .. /Text -> control name
], function (Text) {
    "use strict";

    new Text({  //cream un ob pt control, setam at text cu val hw
        text:"Hello World"
    }).placeAt("content");// face legatura cu id ul din html si l pune acolo
})