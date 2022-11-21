"use strict";

// Best practice , used for allownig the html page fully renders on the page 
$(document).ready(function(){
    // $(function(){
    //     alert("Dom is finished loading");
    // })


    // $('.codeup').css("border","solid red");
    // $('#li1').removeClass("codeup");
    // let h1Content = $('h1').html();
    // alert(h1Content);


    // $('h1').hover(function(){
    //     $('h1').css("background","beige");
    // });
    // $('p').dblclick(function(){
    //     $('p').css("font-size", "18px");
    // });

    // $('li').hover(function(){
    //     $(this).css("background","red");
    // }).mouseleave(function(){
    //     $(this).css("background","black");
    //     $(this).css("color","white");
    // })
    let doc = $(document);
    let comp = [38,38,40,40,37,39,37,39,66,65];
    let user =[];

    





    $(doc).keyup( function(event) {
        console.log('e keyC');
        user.push(event.keyCode);

        comp.splice(comp.length-1, user.length-comp.length);

        console.log("user", user);

        if (user.join('').includes(comp.join(''))){


            alert("You have 30 lives")


        }
    })












});