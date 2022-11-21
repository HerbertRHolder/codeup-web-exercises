(function(){
"use strict"
$(document).ready(function () {
    alert("DOM IS RENDERED")
    let link = "https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}"
    let jqXr = $.ajax(link);

    console.log("ajax: ",jqXr);
    
















});// DOC READY
})(); //IIFE